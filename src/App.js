import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import RequiredAuth from './RequiredAuth';
import LandingPage from './LandingPage';
import GalleryPage from './GalleryPage';
import MarketplacePage from './MarketplacePage';
import NotFoundPage from './NotFoundPage';

import axios from 'axios';
axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response
  }
);


async function getInjectedAccounts() {
  try {
    const injectedPromise = web3Enable('polkadot-js/apps');

    await injectedPromise.catch(console.error);

    const accounts = await web3Accounts();

    return accounts;
    
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
