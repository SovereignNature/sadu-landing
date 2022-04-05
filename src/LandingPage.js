import React from 'react';
import logo from './assets/sadu-logo.png';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage(){
    const [index, setIndex] = React.useState(0);
    let currentYear = new Date().getFullYear();

    const stopAllYoutubeVideos = () => {
        const iframes = document.querySelectorAll('iframe');

        Array.prototype.forEach.call(iframes, iframe => { 
            iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
          func: 'stopVideo' }), '*');
         });
    }

    const onStep = (number) => {
        setIndex(number);
        stopAllYoutubeVideos();
    }

    return(
        <>
        <div className="hero section">
            <div className="hero__content"></div>
                <img className="hero__logo" src={logo} alt='Sadu logo'/>
                <div className='hero__title'>
                    <h1>Genesis Eco-conscious</h1>
                    <h2>NFT Collection</h2>
                </div>
                <a href="https://market.sadu.sovereignnature.ch" className="hero__btn">Click to See Collection 
                    <svg className="chevron-right" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 3.81057C11.1785 3.48911 10.6573 3.48911 10.3359 3.81057L7.27045 6.87599C6.89518 7.25126 6.28674 7.25126 5.91147 6.87599L2.84605 3.81057C2.52459 3.48911 2.0034 3.48911 1.68194 3.81057C1.36048 4.13203 1.36048 4.65322 1.68194 4.97468L5.91147 9.20421C6.28674 9.57948 6.89518 9.57948 7.27044 9.20421L11.5 4.97468C11.8214 4.65322 11.8214 4.13203 11.5 3.81057Z" fill="#F3E8E8"/>
                    </svg>
                </a>
        </div>
        <Navbar className='banner' sticky="top">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <a href="https://market.sadu.sovereignnature.ch" className="banner__btn">Click to See Collection 
                <svg className="chevron-right" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 3.81057C11.1785 3.48911 10.6573 3.48911 10.3359 3.81057L7.27045 6.87599C6.89518 7.25126 6.28674 7.25126 5.91147 6.87599L2.84605 3.81057C2.52459 3.48911 2.0034 3.48911 1.68194 3.81057C1.36048 4.13203 1.36048 4.65322 1.68194 4.97468L5.91147 9.20421C6.28674 9.57948 6.89518 9.57948 7.27044 9.20421L11.5 4.97468C11.8214 4.65322 11.8214 4.13203 11.5 3.81057Z" fill="#F3E8E8"/>
                </svg>
            </a>
            </Navbar.Collapse>
        </Navbar>
        <div className="about section">
            <h2 className="about__title">About Sādu</h2>
            <p className="about__text">
                Sādu is a play to earn mobile app for natural capital. Eco-conscious habits can feel pointless. Investing in the carbon market is complicated. Reduce your impact and gain access to the market for carbon removal by collecting eco-friendly NFTs.
            </p>
            <p className="about__text">
                Download the app, subscribe, or play your favourite sport to earn trees monthly. Every tree guarantees funding to an ecosystem restoration project. The more trees you earn the more NFTs you win.
            </p>
            <p className="about__text">
                As a platform for digital assets with a positive environmental impact Sādu will release the first batch of NFTs on a marketplace that prioritizes the planet. Funding from the sale of every digital asset will be allocated to participating Sustainability Partners, a digital artist, and Sādu. Participating Sustainability Partners, include <a href="https://sea-trees.org/pages/about" target="_blank">SeaTrees</a>, <a href="https://www.thehaititreeproject.org/" target="_blank">The Haiti Tree Project</a>, and <a href="http://re-climate.com/en" target="_blank">Re-Climate 🇺🇦</a>.  They each take their own approach to restoring kelp forests, deforestation recovery, and regenerative agroforestry.
            </p>
            <p className="about__text">
                The artists contributing work to this collection,  <a href="https://www.instagram.com/bondtruluv/?hl=en" target="_blank">Bond Truluv</a> and <a href="https://www.instagram.com/whosthereplease/" target="_blank">Stacie Ant</a> bring awareness to the emotional dichotomy between self-preservation, technological advancement and an innate longing to preserve the natural ecosystem. Additionally, the work of Stacie Ant implements generative artificial intelligence to make each piece truly unique for this genesis collection.
            </p>
            <p className="about__text">
                This batch of NFTs is a pre-release for Polkadot Kusama. A total of 1000 NFTs will be released on multiple blockchain networks. This marketplace was built in partnership with Sovereign Nature Initiative (SNI) and Unique Network.  SNI takes a 5% commission on every NFT to support conservation partner projects.
            </p>
        </div>
        <div className="collection section">
            <h2 className="collection__title">The Collection</h2>
            <div className="collection__cards">
                <div className="card">
                    <h3 className="card__title">Stacie Ant</h3>
                    <div className="card__content">
                    <p className="card__text">
                        I am creating a unique collection of 3D environments inspired by versions of futuristic Utopias. Each piece juxtaposes elements of the organic and mechanic — portrayal of a progressive future via technological advancement.
                    </p>
                    <div className="card__list">
                        <p>Generative Traits</p>
                        <ul>
                            <li>Headpiece - Type A  Extremly Rare, Type B Rare, Type c Common</li>
                            <li>Humanoid Skins - Type A extremely Rare, Type B Rare, Type C Common, Type D Common</li>
                            <li>Couture - Type A Common, Type B Rare</li>
                            <li>Backgrounds - Type A Common, Type B Rare</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <h3 className="card__title">Bond Truluv</h3>
                    <div className="card__content">
                        <p className="card__text">For this unique collection I chose truly magical places to host my surreal digital arrangements, thus creating a symbiotic dichotomy of nature and technology.</p>
                        <div className="card__list">
                            <p>Unique Traits</p>
                            <ul>
                                <li>Colour of moving objects</li>
                                <li>Colour of the background</li>
                                <li>Placement of the moving object</li>
                                <li>Size of the moving object</li>
                                <li>Glitches, pixelations, aberrations</li>
                            </ul>
                        </div>
                        <p className="card__text">Genesis collection pre-release by Sādu. Reduce your environmental impact by collecting eco-friendly digital assets.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="tutorial section">
            <div className="tutorial__buttons">
                <button className={`tutorial__button ${index === 0 ? "active" : ""}`} onClick={() => onStep(0)}>I want to setup a Polkadot wallet</button>
                <button className={`tutorial__button ${index === 1 ? "active" : ""}`} onClick={() => onStep(1)}>I want to buy Kusama tokens</button>
                
            </div>
            <Carousel controls={false} interval={null} activeIndex={index} indicators={false}>
                <Carousel.Item>
                <iframe className="carousel__video" src="https://www.youtube.com/embed/OImeySrC6n0?enablejsapi=1" title="Download the extension" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="carousel__content">
                        <ol className='carousel__list'>
                            <li className='carousel__item'>
                                <p className='item__title'>Download the extension</p>
                                <p className='item__text'>Install the Polkadot extension to your browser.</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Create the wallet</p>
                                <div>
                                    <p className='item__text'>Create your wallet with this extension.</p>
                                    <p className="item__disclaimer">Beware!! Do not share your wallet seed or password with anyone. As well, do not store it on the cloud. Because this could cause you to lose your wallet.</p>
                                </div>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Choose Kusama Chain</p>
                                <p className='item__text'>Lastly, choose “Kusama chain” from the dropdown button.</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Well done!</p>
                                <p className='item__text'>You’ve created your Polkadot wallet on Kusama chain!</p>
                            </li>
                        </ol>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <iframe className="carousel__video" src="https://www.youtube.com/embed/uLnq6emvr8k?enablejsapi=1" title="Sign up at Kraken Platform" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="carousel__content">
                        <ol className='carousel__list'>
                            <li className='carousel__item'>
                                <p className='item__title'>Sign up at Kraken Platform</p>
                                <p className='item__text'>You need an exchange platform to buy Kusama crypto. We recommend you to use the Kraken platform.</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Buy KSM</p>
                                <p className='item__text'>There are two ways of buying KSM on Kraken platform: (1) The first option is purchasing crypto with a credit or debit card. (2) The second option is that buying crypto with the money on your Kraken account.</p>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Transfer KSM from Kraken to Polkadot wallet</p>
                                <div>
                                    <p className='item__text'>You need to withdraw Kusama from your Kraken account.</p>
                                    <p className="item__disclaimer">Be careful!! Your withdrawal address must be the same address as your Polkadot wallet address that is on the Kusama chain.</p>
                                </div>
                            </li>
                            <li className='carousel__item'>
                                <p className='item__title'>Well done!</p>
                                <p className='item__text'>You’ve purchased Kusama!</p>
                            </li>
                        </ol>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className="faq section">
            <h2 className="faq__title">Frequently Asked Questions</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                <Accordion.Header>I connected the right wallet to the app but it shows that my NFTree belongs to a different address. Why?</Accordion.Header>
                <Accordion.Body>
                    Substrate account addresses (Polkadot, Kusama etc.) may look different on different networks but they have all the same private key underneath. You can see all transformations of any address on <a href="https://polkadot.subscan.io/tools/ss58_transform" target="_blank">https://polkadot.subscan.io/tools/ss58_transform</a>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>I see my NTF on the My Gallery page twice and one of them is “on hold”</Accordion.Header>
                    <Accordion.Body>
                        It can happen if the previous version of the market had information about an unfinished listing. In that case: (1) Go to the page of ‘on hold’ token and complete listing. (2) Then delist this token.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>I see the error “1010: Invalid Transaction: Inability to pay some fees, e.g. account balance too low”</Accordion.Header>
                    <Accordion.Body>
                        Just wait for half a minute and try again.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Whom can I contact if I have questions regarding the marketplace?</Accordion.Header>
                    <Accordion.Body>
                        Please contact <a className="link" href="mailto:info@sadu.io">info@sadu.io</a> if you have any questions.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        <footer className="footer">
            <div className="footer__logo">
                <a href="https://sadu.app/" target="_blank"><img className="logo" src={logo} alt='Sadu logo'/></a>
                <p>Copyright © {currentYear} Sovereign Nature Initiative | All Rights Reserved</p>
                <p className='poweredBy'>Powered By  <a className='poweredBy__link' href="https://sovereignnature.com/" target="_blank"> Sovereign Nature Initiative </a> | Built On<a href="https://unique.network/" target="_blank"><svg className="unique"  viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" fill="#FFF">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M66.4709 34.6119C66.4709 35.0292 66.8545 35.342 67.2583 35.2365C73.8748 33.5089 78.7565 27.507 78.7565 20.3685C78.7565 11.8807 71.8552 5 63.3421 5C54.829 5 47.9277 11.8807 47.9277 20.3685C47.9277 27.671 53.0362 33.784 59.8845 35.3488C60.2837 35.44 60.6539 35.1289 60.6539 34.7194V31.0843C60.6539 30.7882 60.4556 30.5302 60.1737 30.4396C58.0052 29.7433 56.2514 28.5099 54.9122 26.7397C53.4856 24.8405 52.7723 22.6399 52.7723 20.1378C52.7723 16.8319 54.0181 14.1238 56.5096 12.0136C58.5793 10.2652 60.9352 9.39098 63.5774 9.39098C66.9832 9.39098 69.731 10.6219 71.8207 13.0838C73.5085 15.0734 74.3524 17.3695 74.3524 19.972C74.3524 22.5243 73.604 24.8103 72.107 26.8301C70.8513 28.5359 69.1323 29.7391 66.9501 30.4395C66.6685 30.5299 66.4709 30.7877 66.4709 31.0834V34.6119ZM66.275 22.4548C66.275 22.0909 65.9799 21.7958 65.6159 21.7958H61.5239C61.1599 21.7958 60.8649 22.0909 60.8649 22.4548V22.7038C60.8649 23.261 60.2335 23.539 59.9149 23.0819C59.3426 22.2608 59.0565 21.2895 59.0565 20.168C59.0565 18.8918 59.5035 17.7865 60.3977 16.852C61.2918 15.9175 62.3518 15.4502 63.5774 15.4502C64.7931 15.4502 65.848 15.9175 66.7421 16.852C67.6363 17.7865 68.0833 18.8918 68.0833 20.168C68.0833 21.2555 67.8005 22.2134 67.2348 23.0416C66.9171 23.5067 66.275 23.2309 66.275 22.6676V22.4548Z" fill="#40BCFF"></path>
                            <path d="M4.91797 14.5678C4.91797 14.2039 5.21302 13.9088 5.57697 13.9088H10.9659C11.3299 13.9088 11.6249 14.2039 11.6249 14.5678V23.3967C11.6249 23.81 11.717 24.1365 11.9011 24.3761C12.0851 24.6097 12.3108 24.7265 12.578 24.7265C12.8511 24.7265 13.1243 24.6007 13.3974 24.3491C13.6765 24.0915 13.8161 23.7741 13.8161 23.3967V14.5678C13.8161 14.2039 14.1111 13.9088 14.4751 13.9088H19.9442C20.3082 13.9088 20.6032 14.2039 20.6032 14.5678V23.6573C20.6032 25.1607 20.2202 26.4635 19.4542 27.5657C18.6941 28.6678 17.6965 29.5004 16.4614 30.0634C15.2323 30.6265 13.9378 30.908 12.578 30.908C11.6101 30.908 10.666 30.7552 9.74556 30.4498C8.82517 30.1383 7.99979 29.6771 7.26942 29.0661C6.54498 28.4492 5.97196 27.6854 5.55037 26.775C5.12877 25.8645 4.91797 24.8253 4.91797 23.6573V14.5678Z"></path>
                            <path d="M22.8423 29.9566C22.4783 29.9566 22.1833 29.6616 22.1833 29.2976V19.4624C22.1833 18.1386 22.5485 17.0066 23.2789 16.0662C24.0152 15.1198 24.986 14.407 26.1915 13.9278C27.3969 13.4486 28.6735 13.209 30.0215 13.209C31.3991 13.209 32.7084 13.4606 33.9495 13.9637C35.1964 14.4609 36.2029 15.2066 36.9689 16.2009C37.7409 17.1952 38.1268 18.3692 38.1268 19.723V29.2976C38.1268 29.6616 37.8318 29.9566 37.4678 29.9566H31.7404C31.3764 29.9566 31.0814 29.6616 31.0814 29.2976V20.1632C31.0814 19.8038 30.9804 19.5373 30.7786 19.3636C30.5826 19.1839 30.357 19.094 30.1016 19.094C29.8166 19.094 29.5435 19.2018 29.2822 19.4175C29.0209 19.6271 28.8903 19.8757 28.8903 20.1632V29.2976C28.8903 29.6616 28.5952 29.9566 28.2313 29.9566H22.8423Z"></path>
                            <path d="M40.357 29.9566C39.9931 29.9566 39.698 29.6616 39.698 29.2976V14.0567C39.698 13.6927 39.9931 13.3977 40.357 13.3977H46.0132C46.3772 13.3977 46.6722 13.6927 46.6722 14.0567V29.2976C46.6722 29.6616 46.3772 29.9566 46.0132 29.9566H40.357Z"></path>
                            <path d="M79.9767 14.5678C79.9767 14.2039 80.2717 13.9088 80.6357 13.9088H86.0246C86.3886 13.9088 86.6836 14.2039 86.6836 14.5678V23.3967C86.6836 23.81 86.7757 24.1365 86.9598 24.3761C87.1438 24.6097 87.3695 24.7265 87.6367 24.7265C87.9099 24.7265 88.183 24.6007 88.4561 24.3491C88.7352 24.0915 88.8748 23.7741 88.8748 23.3967V14.5678C88.8748 14.2039 89.1698 13.9088 89.5338 13.9088H95.0029C95.3669 13.9088 95.6619 14.2039 95.6619 14.5678V23.6573C95.6619 25.1607 95.2789 26.4635 94.5129 27.5657C93.7528 28.6678 92.7553 29.5004 91.5202 30.0634C90.291 30.6265 88.9965 30.908 87.6367 30.908C86.6688 30.908 85.7247 30.7552 84.8043 30.4498C83.8839 30.1383 83.0585 29.6771 82.3281 29.0661C81.6037 28.4492 81.0307 27.6854 80.6091 26.775C80.1875 25.8645 79.9767 24.8253 79.9767 23.6573V14.5678Z"></path>
                            <path d="M114.017 18.9236C114.151 19.2272 114.023 19.5795 113.733 19.7394L106.497 23.7228C106.182 23.8959 105.787 23.7855 105.608 23.4745L104.545 21.6304C104.36 21.3092 104.476 20.8986 104.802 20.722L106.83 19.6232C107.216 19.4138 107.276 18.8859 106.855 18.7585C106.655 18.6979 106.439 18.6675 106.209 18.6675C105.474 18.6675 104.74 18.9998 104.005 19.6387C103.853 19.7665 103.169 20.2776 102.966 20.8143C102.84 21.121 102.865 21.4021 102.89 21.581C102.916 21.811 103.6 23.6766 104.182 24.3411C104.79 25.0311 105.474 25.3634 106.285 25.3634C107.464 25.3634 108.744 24.7086 110.072 23.399C110.336 23.1382 110.762 23.1232 111.029 23.3813L113.844 26.1048C114.074 26.3265 114.114 26.6825 113.917 26.9337C113.379 27.6214 112.709 28.2395 111.935 28.788C110.972 29.4525 109.959 29.938 108.869 30.2958C107.78 30.6281 106.691 30.807 105.601 30.807C104.512 30.807 103.498 30.6281 102.51 30.2958C101.522 29.9636 100.635 29.4525 99.8246 28.7369C99.0139 28.0468 98.3805 27.1524 97.8738 26.079C97.3924 25.0056 97.0377 23.7789 96.9617 22.3733C96.9617 22.2966 96.9617 22.271 96.9617 22.1432C96.9617 22.0155 96.9617 21.9388 96.9617 21.9388C96.9617 20.0732 97.3924 18.4631 98.2285 17.1341C99.0646 15.8052 100.154 14.7829 101.446 14.1185C102.764 13.454 104.081 13.0962 105.424 13.0962C109.448 13.0962 112.313 15.0387 114.017 18.9236Z"></path>
                            </svg></a>
                </p>
            </div>
            <div className='footer__links' >
                <div className="footer__link">
                    <p>About us</p>
                    <ul>
                        <li><a href="https://sadu.app/#team" target="_blank">Who we are</a></li>
                        <li><a href="https://unique.network/terms/" target="_blank">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="footer__link">
                    <p>Follow Sadu</p>
                    <ul class="social">
                        <li>
                            <a href="https://discord.com/invite/sswAtkYmsG" target="_blank">
                                Discord
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.3468 6.016C22.7822 5.072 21.1206 4.384 19.3862 4C19.1679 4.496 18.9253 5.16799 18.7555 5.696C16.9108 5.34399 15.0793 5.34399 13.2601 5.696C13.0903 5.16799 12.8355 4.496 12.6293 4C10.8829 4.384 9.22127 5.072 7.66761 6.016C4.52633 12.128 3.67733 18.0959 4.10182 23.9839C6.18793 25.9839 8.20128 27.2 10.1794 28C10.6646 27.136 11.1012 26.2079 11.4772 25.232C10.7616 24.88 10.0824 24.4479 9.42747 23.9359C9.59727 23.776 9.76708 23.6 9.92475 23.424C13.8786 25.808 18.1612 25.808 22.0666 23.424C22.2364 23.6 22.3941 23.776 22.5639 23.9359C21.9089 24.4479 21.2297 24.88 20.5141 25.232C20.8901 26.2079 21.3268 27.136 21.8119 28C23.7888 27.2 25.8143 25.9839 27.8895 23.9839C28.4109 17.168 27.0635 11.248 24.3468 6.016ZM12.023 20.3519C10.8344 20.3519 9.86408 18.928 9.86408 17.184C9.86408 15.44 10.8101 14.016 12.023 14.016C13.2237 14.016 14.2061 15.44 14.1818 17.184C14.1818 18.928 13.2237 20.3519 12.023 20.3519ZM19.9926 20.3519C18.804 20.3519 17.8325 18.928 17.8325 17.184C17.8325 15.44 18.7797 14.016 19.9926 14.016C21.1934 14.016 22.1757 15.44 22.1515 17.184C22.1515 18.928 21.2055 20.3519 19.9926 20.3519Z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/s%C4%81du/" target="_blank">
                                LinkedIn 
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.4492 24.451H20.8933V18.8801C20.8933 17.5518 20.8693 15.8414 19.0435 15.8414C17.1914 15.8414 16.9078 17.2885 16.9078 18.7825V24.4506H13.352V12.9975H16.7656V14.5628H16.8116C17.1533 13.9787 17.6471 13.4981 18.2403 13.1723C18.8334 12.8465 19.5039 12.6878 20.1802 12.7129C23.7844 12.7129 24.4492 15.084 24.4492 18.1683V24.451ZM9.33937 11.4316C8.93116 11.4317 8.5321 11.3107 8.19264 11.084C7.85318 10.8573 7.58858 10.5349 7.4323 10.1578C7.27603 9.78065 7.23509 9.36563 7.31467 8.96522C7.39425 8.56482 7.59078 8.197 7.87939 7.9083C8.16801 7.6196 8.53575 7.42297 8.93611 7.3433C9.33646 7.26362 9.75146 7.30447 10.1286 7.46067C10.5057 7.61688 10.8281 7.88143 11.0549 8.22086C11.2817 8.56029 11.4027 8.95937 11.4027 9.36761C11.4027 9.91494 11.1854 10.4399 10.7984 10.8269C10.4115 11.214 9.88665 11.4315 9.33937 11.4316V11.4316ZM11.1173 24.4506H7.55774V12.9975H11.1178L11.1173 24.4506ZM26.2202 4.00156H5.77058C5.54054 3.99876 5.3122 4.04137 5.09864 4.12695C4.88508 4.21253 4.6905 4.33939 4.52604 4.50028C4.36157 4.66117 4.23045 4.85291 4.14019 5.06455C4.04992 5.27618 4.00228 5.50354 4 5.73361V26.2678C4.00546 26.7323 4.19506 27.1756 4.52713 27.5003C4.85921 27.8251 5.3066 28.0048 5.77104 27.9998H26.2202C26.6859 28.0061 27.135 27.8272 27.4687 27.5024C27.8025 27.1776 27.9936 26.7335 28 26.2678V5.72993C27.9933 5.26452 27.8021 4.82082 27.4683 4.49643C27.1345 4.17204 26.6856 3.99354 26.2202 4.00018"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://brittanymsalas.medium.com/" target="_blank">
                                Medium
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5366 16C17.5366 20.4086 14.5183 24 10.7683 24C7.01829 24 4 20.4086 4 16C4 11.5914 7.01829 8 10.7683 8C14.5183 8 17.5366 11.5914 17.5366 16ZM24.9634 16C24.9634 20.1505 23.4451 23.5269 21.5793 23.5269C19.7134 23.5269 18.1951 20.1505 18.1951 16C18.1951 11.8495 19.7134 8.47312 21.5793 8.47312C23.4451 8.47312 24.9634 11.8495 24.9634 16ZM28 16C28 19.7204 27.4695 22.7527 26.811 22.7527C26.1524 22.7527 25.622 19.7204 25.622 16C25.622 12.2796 26.1524 9.24731 26.811 9.24731C27.4695 9.24731 28 12.2796 28 16Z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/sadu_app/" target="_blank">
                                Instagram
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 6.16221C19.2041 6.16221 19.5836 6.1744 20.849 6.23213C22.019 6.28553 22.6544 6.48102 23.0773 6.64531C23.6373 6.863 24.0371 7.12308 24.457 7.54297C24.8769 7.96287 25.137 8.36266 25.3546 8.92274C25.519 9.34564 25.7145 9.98103 25.7679 11.151C25.8256 12.4164 25.8378 12.7959 25.8378 16C25.8378 19.2042 25.8256 19.5837 25.7679 20.849C25.7145 22.019 25.519 22.6544 25.3546 23.0773C25.137 23.6374 24.8769 24.0372 24.457 24.4571C24.0371 24.877 23.6373 25.137 23.0773 25.3547C22.6544 25.519 22.019 25.7145 20.849 25.7679C19.5838 25.8256 19.2043 25.8378 16 25.8378C12.7956 25.8378 12.4161 25.8256 11.151 25.7679C9.98098 25.7145 9.34559 25.519 8.92274 25.3547C8.36261 25.137 7.96282 24.877 7.54293 24.4571C7.12303 24.0372 6.86295 23.6374 6.64531 23.0773C6.48097 22.6544 6.28548 22.019 6.23209 20.8491C6.17435 19.5837 6.16216 19.2042 6.16216 16C6.16216 12.7959 6.17435 12.4164 6.23209 11.151C6.28548 9.98103 6.48097 9.34564 6.64531 8.92274C6.86295 8.36266 7.12303 7.96287 7.54293 7.54297C7.96282 7.12308 8.36261 6.863 8.92274 6.64531C9.34559 6.48102 9.98098 6.28553 11.1509 6.23213C12.4163 6.1744 12.7958 6.16221 16 6.16221ZM16 4C12.7409 4 12.3323 4.01381 11.0524 4.07221C9.77511 4.13052 8.90283 4.33334 8.1395 4.63001C7.35039 4.93668 6.68118 5.347 6.01406 6.01411C5.34695 6.68123 4.93663 7.35044 4.62996 8.13954C4.3333 8.90288 4.13047 9.77516 4.07217 11.0525C4.01377 12.3323 4 12.741 4 16C4 19.2591 4.01377 19.6677 4.07217 20.9476C4.13047 22.2249 4.3333 23.0972 4.62996 23.8605C4.93663 24.6496 5.34695 25.3188 6.01406 25.9859C6.68118 26.6531 7.35039 27.0634 8.1395 27.37C8.90283 27.6667 9.77511 27.8695 11.0524 27.9278C12.3323 27.9862 12.7409 28 16 28C19.259 28 19.6677 27.9862 20.9475 27.9278C22.2248 27.8695 23.0971 27.6667 23.8605 27.37C24.6496 27.0634 25.3188 26.6531 25.9859 25.9859C26.653 25.3188 27.0633 24.6496 27.37 23.8605C27.6667 23.0972 27.8695 22.2249 27.9278 20.9476C27.9862 19.6677 28 19.2591 28 16C28 12.741 27.9862 12.3323 27.9278 11.0525C27.8695 9.77516 27.6667 8.90288 27.37 8.13954C27.0633 7.35044 26.653 6.68123 25.9859 6.01411C25.3188 5.347 24.6496 4.93668 23.8605 4.63001C23.0971 4.33334 22.2248 4.13052 20.9475 4.07221C19.6677 4.01381 19.259 4 16 4ZM16 9.83784C12.5967 9.83784 9.83779 12.5968 9.83779 16C9.83779 19.4033 12.5967 22.1622 16 22.1622C19.4032 22.1622 22.1622 19.4033 22.1622 16C22.1622 12.5968 19.4032 9.83784 16 9.83784ZM16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20ZM23.8456 9.59438C23.8456 10.3897 23.2009 11.0344 22.4056 11.0344C21.6103 11.0344 20.9656 10.3897 20.9656 9.59438C20.9656 8.79909 21.6103 8.15441 22.4056 8.15441C23.2009 8.15441 23.8456 8.79909 23.8456 9.59438Z"/>
                                </svg>

                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__link">
                    <p>Contact us</p>
                    <ul>
                        <li><a className="link" href="mailto:info@sadu.io">info@sadu.io</a></li>
                    </ul>
                </div>
                <div className="button__container">
                    <a href="https://market.sadu.sovereignnature.ch" className="footer__btn">Click to See Collection 
                        <svg className="chevron-right" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 3.81057C11.1785 3.48911 10.6573 3.48911 10.3359 3.81057L7.27045 6.87599C6.89518 7.25126 6.28674 7.25126 5.91147 6.87599L2.84605 3.81057C2.52459 3.48911 2.0034 3.48911 1.68194 3.81057C1.36048 4.13203 1.36048 4.65322 1.68194 4.97468L5.91147 9.20421C6.28674 9.57948 6.89518 9.57948 7.27044 9.20421L11.5 4.97468C11.8214 4.65322 11.8214 4.13203 11.5 3.81057Z" fill="#F3E8E8"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
        </>
    );
}

export default LandingPage;