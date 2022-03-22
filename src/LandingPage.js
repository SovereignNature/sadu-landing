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
            <p>Entry is granted to whitelist members only. If you would like access to the whitelist <a href="#">click here</a></p>
            <div className="hero__scroll">
                <p>scroll to learn more</p>
                <div className="scroll">
                    <svg className="mousewheel" width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7992 19.8C15.7992 23.8 12.5992 27.1 8.49922 27.1C4.49922 27.1 1.19922 23.9 1.19922 19.8V8.50005C1.19922 4.50005 4.39922 1.30005 8.49922 1.30005C12.4992 1.30005 15.7992 4.50005 15.7992 8.50005V19.8Z" stroke="#F4F4F4" stroke-width="1.5" stroke-miterlimit="10"/>
                    <path className='ball' d="M8.89961 10.6C8.89961 11.2 8.69961 11.6 8.49961 11.6C8.29961 11.6 8.09961 11.1 8.09961 10.6V9C8.09961 8.4 8.29961 8 8.49961 8C8.69961 8 8.89961 8.5 8.89961 9V10.6Z" stroke="#F4F4F4" stroke-miterlimit="10"/>
                    </svg>
                    <svg className="chevron" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_94_271)">
                    <path d="M11.5 3.81057C11.1785 3.48911 10.6573 3.48911 10.3359 3.81057L7.27045 6.87599C6.89518 7.25126 6.28674 7.25126 5.91147 6.87599L2.84605 3.81057C2.52459 3.48911 2.0034 3.48911 1.68194 3.81057C1.36048 4.13203 1.36048 4.65322 1.68194 4.97468L5.91147 9.20421C6.28674 9.57948 6.89518 9.57948 7.27044 9.20421L11.5 4.97468C11.8214 4.65322 11.8214 4.13203 11.5 3.81057Z" fill="#F3E8E8"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_94_271">
                    <rect width="13.1786" height="13.1786" fill="white" transform="translate(13.1797) rotate(90)"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
            </div>
        </div>
        <div className="about">
            <h2 className="about__title">About Us</h2>
            <p className="about__text">     
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias repudiandae cum dolore debitis nihil, soluta sed ad autem, iusto illum explicabo enim laboriosam eligendi beatae doloribus perferendis ullam sequi reprehenderit.
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias repudiandae cum dolore debitis nihil, soluta sed ad autem, iusto illum explicabo enim laboriosam eligendi beatae doloribus perferendis ullam sequi reprehenderit.
            </p>
        </div>
        <div className="collection">
            <h2 className="collection__title">The Collection</h2>
            <div className="collection__cards">
                <div className="card">
                    <h3 className="card__title">Stacie Ant</h3>
                    <div className="card__content">
                    <p className="card__text">
                        I am creating a unique collection of 3D environments inspired by versions of futuristic Utopias. Each piece juxtaposes elements of the organic and mechanic - portrayal of a progressive future via technological advancement.
                    </p>
                    <div className="card__list">
                        <p>Generative Traits</p>
                        <ul>
                            <li>Humanoid Skin</li>
                            <li>Humanoid Hair</li>
                            <li>Humanoid Headdress</li>
                            <li>Humanoid Garments</li>
                            <li>Landscape Built Environment</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <h3 className="card__title">Bond Truluv</h3>
                    <div className="card__content">
                        <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, at saepe libero sint illo mollitia facere, tempora ea ut quisquam, dicta deleniti ipsam harum aspernatur reiciendis commodi incidunt. Eos, iusto!</p>
                        <div className="card__list">
                            <p>Generative Traits</p>
                            <ul>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="faq">
            <h2 className="faq__title">Frequently Asked Questions</h2>
        </div>

        </>
    );
}

export default LandingPage;