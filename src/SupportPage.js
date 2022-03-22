import React from 'react';
import logo from './assets/sadu-logo.png';

function SupportPage(){
    return(
        <>
        <div className="info">
            <img className="hero__logo" src={logo} alt='Sadu logo'/>
            <h1>You don't have permissions to access this page</h1>
            <p>Your wallet address does not match with our member list. If you would like to gain access to the member list, please <a href="#">click here</a> to learn more about it.</p>
            <button className="info__btn">Okay, I understand </button>
        </div>
        </>
    );
}

export default SupportPage;