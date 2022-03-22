import React from "react";
import { web3Accounts, web3FromSource, web3Enable } from '@polkadot/extension-dapp';
import { stringToHex } from '@polkadot/util';
import SupportPage from './SupportPage';
import LandingPage from './LandingPage';
import axios from 'axios';
import jwt_decode from "jwt-decode";

let cookie = document.cookie;

async function signWallet(account) {
  const injector = await web3FromSource(account.meta.source);
  const signRaw = injector?.signer?.signRaw;

  axios.get('https://api.sadu.sovereignnature.ch/login', 
  { mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }}).then(async (response) => {
    const timestamp = response.data;
    if (!!signRaw) {
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

        const decoded = jwt_decode(response.data);
        const expDate = new Date(decoded.exp * 1000);
        document.cookie = `jwt=${decoded.address}; expires=${expDate}`;
      })
    }
  });
}


async function getInjectedAccounts() {
  try {
    const injectedPromise = web3Enable('polkadot-js/apps');

    await injectedPromise.catch(console.error);

    const accounts = await web3Accounts();
    if(!cookie) {
      return accounts.forEach(account => {
        signWallet(account);
        window.reload();
      })
    } else {
      window.reload();
      return null;
    }
  } catch (error) {
    console.error('web3Accounts', error);
    return null;
  }
}

function RequiredAuth({children}) {
  const [account, setAccount] = React.useState({});

  React.useEffect(() => {
    getInjectedAccounts().then(([account]) => {
      setAccount(account);
    });
  }, []);

  if (account) {
      if (cookie) {
        return (children);
      } else {
        return (<SupportPage/>);
      }
  } else {
    return (<LandingPage/>);
  }
}

export default RequiredAuth;