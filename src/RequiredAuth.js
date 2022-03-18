import React from "react";
import { Navigate  } from "react-router-dom";
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import SupportPage from './SupportPage';
import LandingPage from './LandingPage';

const whitelist = [
  '5GpeRxMG3qWyXtnXfhX76jcR5asbdA5PAB3wEpy5n3YnsvsG',
  '5GpeRxMG3qWyXtnXfhX76jcR5asbdA5PAB3wEpy5n3YnsvsP',
  '5GpeRxMG3qWyXtnXfhX76jcR5asbdA5PAB3wEpy5n3YnsvsC',
  '5GpeRxMG3qWyXtnXfhX76jcR5asbdA5PAB3wEpy5n3YnsvsF'
];

async function getInjectedAccounts() {
  
  try {
    const injectedPromise = web3Enable('polkadot-js/apps');

    await injectedPromise.catch(console.error);

    const accounts = await web3Accounts();

    return accounts.map(({address}) => ({
      address
    }));
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
      if (whitelist.includes(account.address)) {
        return (children);
      } else {
        return (<SupportPage/>);
      }

  } else {
    return (<LandingPage/>);
  }
}

export default RequiredAuth;