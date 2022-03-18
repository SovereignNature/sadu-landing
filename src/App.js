import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { stringToU8a, u8aToHex, stringToHex } from '@polkadot/util';
import { web3Accounts, web3FromSource,  web3Enable } from '@polkadot/extension-dapp';
import { Keyring } from '@polkadot/keyring';
import RequiredAuth from './RequiredAuth';
import LandingPage from './LandingPage';
import GalleryPage from './GalleryPage';
import MarketplacePage from './MarketplacePage';
import NotFoundPage from './NotFoundPage';
import axios from 'axios';

async function getInjectedAccounts() {
  // keypair.sign(stringToU8a(timestamp))
//   credentials = {
//     address: keypair.address,
//     signature: signature,
//     timestamp: timestamp
// };
// signature = u8aToHex();
  try {
    const injectedPromise = web3Enable('polkadot-js/apps');

    await injectedPromise.catch(console.error);

    const accounts = await web3Accounts();
    const account = accounts[0];
    const injector  =  await web3FromSource(account.meta.source);
    const signRaw = injector?.signer?.signRaw;
    

    axios.get('https://api.sadu.sovereignnature.ch/login', 
    { mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }}).then(async (response) => {
      const timestamp = response.data;
      if (!!signRaw) {
        // after making sure that signRaw is defined
        // we can use it to sign our message
        const { signature } = await signRaw({
            address: account.address,
            data: stringToHex(timestamp),
            type: 'bytes'
        });
        axios.post('https://api.sadu.sovereignnature.ch/login', {
          address: account.address,
          signature: signature,
          timestamp: timestamp
        },
        { mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }}).then((response) => {
          console.log(response.data);
        })
      }
    })

    return accounts.map(({address}) => ({
      address
    }));
  } catch (error) {
    console.error('web3Accounts', error);
    return null;
  }
}

export default function App() {
  const [account, setAccount] = React.useState({});

  React.useEffect(() => {
    getInjectedAccounts().then(([account]) => {
      setAccount(account);
    });
  }, []);

  const keyring = new Keyring(); 
  

  function sign(){
    console.log('>>>>>>>>>' + JSON.stringify(keyring));
  }

  return (
    <Router>
        <div>
          <ul>
            <li>
              <Link to="/gallery">NFT Gallery</Link>
            </li>
            <li>
              <Link to="/marketplace">NFT Marketplace</Link>
            </li>
          </ul>

          <hr />
          <button onClick={sign}>Sign it</button>
        </div>

          <Routes>
            <Route exact path='/' element={!account ? <LandingPage/> : <RequiredAuth><MarketplacePage/></RequiredAuth>}/>
            <Route path="/gallery" element={<RequiredAuth><GalleryPage/></RequiredAuth>} />
            <Route path="/marketplace" element={<RequiredAuth><MarketplacePage/></RequiredAuth>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
    </Router>
  );
}
