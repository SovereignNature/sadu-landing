import React from 'react';
import logo from './assets/sadu-logo.png';

function LandingPage(){
    return(
        <>
        <div className="hero">
            <img className="hero__logo" src={logo} alt='Sadu logo'/>
            <div className='hero__title'>
                <h1>NFT Exhibition!</h1>
                <h2>by Sadu</h2>
            </div>
            <button className="hero__btn">Click to enter the exhibition </button>
            <p>You need to connect your <a href="#">whitelisted-wallet</a> in order to enter the exhibition</p>
            <div className="hero__scroll">
                <p>scroll to learn more</p>
                <p>icon</p>
            </div>
        </div>
        
        </>
    );
}

export default LandingPage;