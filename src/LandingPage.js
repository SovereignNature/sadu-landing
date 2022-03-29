import React from 'react';
import logo from './assets/sadu-logo.png';
import tutorial from './assets/tutorial.png';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage(){
    const [index, setIndex] = React.useState(0);
    let currentYear = new Date().getFullYear();

    const onStep = (number) => {
        setIndex(number);
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
                <a href="https://market.sadu.sovereignnature.ch" className="hero__btn">Click to See Collection  <svg className="chevron-right" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 3.81057C11.1785 3.48911 10.6573 3.48911 10.3359 3.81057L7.27045 6.87599C6.89518 7.25126 6.28674 7.25126 5.91147 6.87599L2.84605 3.81057C2.52459 3.48911 2.0034 3.48911 1.68194 3.81057C1.36048 4.13203 1.36048 4.65322 1.68194 4.97468L5.91147 9.20421C6.28674 9.57948 6.89518 9.57948 7.27044 9.20421L11.5 4.97468C11.8214 4.65322 11.8214 4.13203 11.5 3.81057Z" fill="#F3E8E8"/>
                        </svg>
                        </a>
                <div className="hero__scroll">
                    <p>scroll to learn more</p>
                    <div className="scroll">
                        <svg className="mousewheel" width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7992 19.8C15.7992 23.8 12.5992 27.1 8.49922 27.1C4.49922 27.1 1.19922 23.9 1.19922 19.8V8.50005C1.19922 4.50005 4.39922 1.30005 8.49922 1.30005C12.4992 1.30005 15.7992 4.50005 15.7992 8.50005V19.8Z" stroke="#F4F4F4"/>
                        <path className='ball' d="M8.89961 10.6C8.89961 11.2 8.69961 11.6 8.49961 11.6C8.29961 11.6 8.09961 11.1 8.09961 10.6V9C8.09961 8.4 8.29961 8 8.49961 8C8.69961 8 8.89961 8.5 8.89961 9V10.6Z" stroke="#F4F4F4"/>
                        </svg>
                        <svg className="chevron" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                        <path d="M11.5 3.81057C11.1785 3.48911 10.6573 3.48911 10.3359 3.81057L7.27045 6.87599C6.89518 7.25126 6.28674 7.25126 5.91147 6.87599L2.84605 3.81057C2.52459 3.48911 2.0034 3.48911 1.68194 3.81057C1.36048 4.13203 1.36048 4.65322 1.68194 4.97468L5.91147 9.20421C6.28674 9.57948 6.89518 9.57948 7.27044 9.20421L11.5 4.97468C11.8214 4.65322 11.8214 4.13203 11.5 3.81057Z" fill="#F3E8E8"/>
                        </g>
                        <defs>
                        <rect width="13.1786" height="13.1786" fill="white" transform="translate(13.1797) rotate(90)"/>
                        </defs>
                        </svg>
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
                <iframe className="carousel__video" src="https://www.youtube.com/embed/OImeySrC6n0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                <iframe className="carousel__video" src="https://www.youtube.com/embed/uLnq6emvr8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                This batch of NFTs is a pre-release for Polkadot Kusama. A total of 1000 NFTs will be released on multiple blockchain networks. This marketplace was built in partnership with Sovereign Nature Initiative (SNI) and Unique Network.  SNI takes a 5% commission on every NFT.
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
                <p className='poweredBy'>Powered By
                    <a href="https://sovereignnature.com/" target="_blank">
                        <svg className='sni-brand' viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.56023 2.44316C8.98699 3.25123 9.20222 4.08712 8.90349 4.99074C8.91833 4.88312 8.93782 4.7755 8.94709 4.66788C8.97524 4.23566 8.91365 3.80229 8.76618 3.39502C8.66413 3.0898 8.53425 2.79478 8.4155 2.49512C8.4155 2.48862 8.40808 2.48398 8.39694 2.46821C8.35427 2.53687 8.30974 2.59995 8.27355 2.66582C8.18078 2.84024 8.07595 3.01187 7.99523 3.19371C7.83288 3.58057 7.88205 3.96558 8.06017 4.33482C8.16501 4.55006 8.29304 4.75416 8.40715 4.96476C8.47858 5.09743 8.54724 5.23195 8.6094 5.36925C8.72659 5.60627 8.78362 5.8685 8.77546 6.13278C8.84319 6.05764 8.91277 5.98342 8.97771 5.90642C9.28859 5.5514 9.52293 5.13609 9.66609 4.68644C9.7985 4.2768 9.78064 3.8334 9.61573 3.43573C9.45082 3.03807 9.14963 2.71216 8.76618 2.51646C8.70402 2.48398 8.63723 2.45894 8.57321 2.43018L8.56023 2.44316Z" fill="#FAFAFA"/>
                        <path d="M5.91992 2.81487C6.03589 2.88167 6.13516 2.94476 6.23906 3.00042C6.47808 3.13219 6.74065 3.21573 7.01187 3.24627C7.51656 3.29359 7.84034 3.11453 8.07228 2.66458C8.10289 2.60335 8.13165 2.54119 8.15948 2.47903C8.17062 2.45491 8.17618 2.42801 8.19196 2.38069C7.76612 2.76941 7.30133 2.98743 6.72613 2.85384C7.30133 2.90115 7.73736 2.62933 8.13351 2.25545C7.81993 1.9697 7.52027 1.92332 7.17144 2.11814C7.05105 2.1882 6.93573 2.26664 6.82632 2.35286C6.6083 2.53474 6.35987 2.6767 6.09248 2.7722C6.04146 2.78797 5.99136 2.79725 5.91992 2.81487Z" fill="#FAFAFA"/>
                        <path d="M5.50189 12.3951C4.28934 11.7633 3.31428 10.9163 2.9135 9.54976C2.98679 9.69542 3.05359 9.84386 3.13523 9.98395C3.46593 10.5401 3.90815 11.0218 4.43406 11.3987C4.82 11.6873 5.23099 11.9405 5.63085 12.2096C5.64542 12.2166 5.66064 12.2222 5.67631 12.2263C5.67074 12.1048 5.67631 11.9897 5.65961 11.8775C5.62806 11.5824 5.61044 11.2837 5.55013 10.9943C5.42118 10.3792 5.03431 9.94684 4.50086 9.64532C4.18914 9.46812 3.85794 9.32618 3.53787 9.1629C3.33747 9.05992 3.13801 8.9523 2.94504 8.83633C2.59878 8.64445 2.30552 8.36967 2.09152 8.03662C2.07204 8.18784 2.04977 8.33721 2.03493 8.4875C1.95277 9.18897 2.01593 9.89985 2.22048 10.5758C2.40642 11.193 2.80617 11.7237 3.34803 12.0727C3.88988 12.4218 4.53838 12.5664 5.17718 12.4805C5.28109 12.4684 5.385 12.4425 5.48797 12.423L5.50189 12.3951Z" fill="#FAFAFA"/>
                        <path d="M10.5497 10.655C10.5692 11.0641 10.4495 11.5187 10.2816 11.964C10.2518 12.0398 10.2165 12.1133 10.1758 12.1839C10.1675 12.1987 10.1378 12.2024 10.1183 12.2117C10.1113 12.1975 10.1072 12.1821 10.1063 12.1663C10.1582 11.6616 9.87248 11.3192 9.53663 11.0103C9.15528 10.6774 8.7282 10.4009 8.26841 10.1893C6.97452 9.55344 5.68033 8.91608 4.38582 8.27718C4.11492 8.14451 3.84495 8.01092 3.57683 7.87176C2.70198 7.41809 2.20842 6.68611 2.0572 5.72497C1.88185 4.61168 2.25017 3.63848 2.91257 2.7562C2.93176 2.72963 2.95251 2.70422 2.97473 2.68013L3.22058 2.43799C3.18162 2.53076 3.13894 2.62354 3.10183 2.72373C3.03327 2.90753 3.00183 3.10309 3.00931 3.29912C3.0168 3.49515 3.06306 3.68774 3.14543 3.86578C3.36716 4.40016 3.74383 4.81207 4.19007 5.16461C4.52462 5.42554 4.88824 5.64689 5.27367 5.82424C6.23975 6.27883 7.20491 6.73466 8.16914 7.19172C8.85782 7.49772 9.45528 7.97722 9.90309 8.58333C10.3422 9.18316 10.5697 9.91186 10.5497 10.655Z" fill="#FAFAFA"/>
                        <defs>
                        <filter id="filter0_d_94_100" x="0.931874" y="0.931874" width="10.689" height="12.6411" filterUnits="userSpaceOnUse">
                        <feFlood result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="0.534063"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.53 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_94_100"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_94_100" result="shape"/>
                        </filter>
                        </defs>
                        </svg>
                        </a>
                    Sovereign Nature Initiative | Built On 
                        <a href="https://unique.network/" target="_blank">
                            <svg className="unique"  viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" fill="#FFF">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M66.4709 34.6119C66.4709 35.0292 66.8545 35.342 67.2583 35.2365C73.8748 33.5089 78.7565 27.507 78.7565 20.3685C78.7565 11.8807 71.8552 5 63.3421 5C54.829 5 47.9277 11.8807 47.9277 20.3685C47.9277 27.671 53.0362 33.784 59.8845 35.3488C60.2837 35.44 60.6539 35.1289 60.6539 34.7194V31.0843C60.6539 30.7882 60.4556 30.5302 60.1737 30.4396C58.0052 29.7433 56.2514 28.5099 54.9122 26.7397C53.4856 24.8405 52.7723 22.6399 52.7723 20.1378C52.7723 16.8319 54.0181 14.1238 56.5096 12.0136C58.5793 10.2652 60.9352 9.39098 63.5774 9.39098C66.9832 9.39098 69.731 10.6219 71.8207 13.0838C73.5085 15.0734 74.3524 17.3695 74.3524 19.972C74.3524 22.5243 73.604 24.8103 72.107 26.8301C70.8513 28.5359 69.1323 29.7391 66.9501 30.4395C66.6685 30.5299 66.4709 30.7877 66.4709 31.0834V34.6119ZM66.275 22.4548C66.275 22.0909 65.9799 21.7958 65.6159 21.7958H61.5239C61.1599 21.7958 60.8649 22.0909 60.8649 22.4548V22.7038C60.8649 23.261 60.2335 23.539 59.9149 23.0819C59.3426 22.2608 59.0565 21.2895 59.0565 20.168C59.0565 18.8918 59.5035 17.7865 60.3977 16.852C61.2918 15.9175 62.3518 15.4502 63.5774 15.4502C64.7931 15.4502 65.848 15.9175 66.7421 16.852C67.6363 17.7865 68.0833 18.8918 68.0833 20.168C68.0833 21.2555 67.8005 22.2134 67.2348 23.0416C66.9171 23.5067 66.275 23.2309 66.275 22.6676V22.4548Z" fill="#40BCFF"></path>
                            <path d="M4.91797 14.5678C4.91797 14.2039 5.21302 13.9088 5.57697 13.9088H10.9659C11.3299 13.9088 11.6249 14.2039 11.6249 14.5678V23.3967C11.6249 23.81 11.717 24.1365 11.9011 24.3761C12.0851 24.6097 12.3108 24.7265 12.578 24.7265C12.8511 24.7265 13.1243 24.6007 13.3974 24.3491C13.6765 24.0915 13.8161 23.7741 13.8161 23.3967V14.5678C13.8161 14.2039 14.1111 13.9088 14.4751 13.9088H19.9442C20.3082 13.9088 20.6032 14.2039 20.6032 14.5678V23.6573C20.6032 25.1607 20.2202 26.4635 19.4542 27.5657C18.6941 28.6678 17.6965 29.5004 16.4614 30.0634C15.2323 30.6265 13.9378 30.908 12.578 30.908C11.6101 30.908 10.666 30.7552 9.74556 30.4498C8.82517 30.1383 7.99979 29.6771 7.26942 29.0661C6.54498 28.4492 5.97196 27.6854 5.55037 26.775C5.12877 25.8645 4.91797 24.8253 4.91797 23.6573V14.5678Z"></path>
                            <path d="M22.8423 29.9566C22.4783 29.9566 22.1833 29.6616 22.1833 29.2976V19.4624C22.1833 18.1386 22.5485 17.0066 23.2789 16.0662C24.0152 15.1198 24.986 14.407 26.1915 13.9278C27.3969 13.4486 28.6735 13.209 30.0215 13.209C31.3991 13.209 32.7084 13.4606 33.9495 13.9637C35.1964 14.4609 36.2029 15.2066 36.9689 16.2009C37.7409 17.1952 38.1268 18.3692 38.1268 19.723V29.2976C38.1268 29.6616 37.8318 29.9566 37.4678 29.9566H31.7404C31.3764 29.9566 31.0814 29.6616 31.0814 29.2976V20.1632C31.0814 19.8038 30.9804 19.5373 30.7786 19.3636C30.5826 19.1839 30.357 19.094 30.1016 19.094C29.8166 19.094 29.5435 19.2018 29.2822 19.4175C29.0209 19.6271 28.8903 19.8757 28.8903 20.1632V29.2976C28.8903 29.6616 28.5952 29.9566 28.2313 29.9566H22.8423Z"></path>
                            <path d="M40.357 29.9566C39.9931 29.9566 39.698 29.6616 39.698 29.2976V14.0567C39.698 13.6927 39.9931 13.3977 40.357 13.3977H46.0132C46.3772 13.3977 46.6722 13.6927 46.6722 14.0567V29.2976C46.6722 29.6616 46.3772 29.9566 46.0132 29.9566H40.357Z"></path>
                            <path d="M79.9767 14.5678C79.9767 14.2039 80.2717 13.9088 80.6357 13.9088H86.0246C86.3886 13.9088 86.6836 14.2039 86.6836 14.5678V23.3967C86.6836 23.81 86.7757 24.1365 86.9598 24.3761C87.1438 24.6097 87.3695 24.7265 87.6367 24.7265C87.9099 24.7265 88.183 24.6007 88.4561 24.3491C88.7352 24.0915 88.8748 23.7741 88.8748 23.3967V14.5678C88.8748 14.2039 89.1698 13.9088 89.5338 13.9088H95.0029C95.3669 13.9088 95.6619 14.2039 95.6619 14.5678V23.6573C95.6619 25.1607 95.2789 26.4635 94.5129 27.5657C93.7528 28.6678 92.7553 29.5004 91.5202 30.0634C90.291 30.6265 88.9965 30.908 87.6367 30.908C86.6688 30.908 85.7247 30.7552 84.8043 30.4498C83.8839 30.1383 83.0585 29.6771 82.3281 29.0661C81.6037 28.4492 81.0307 27.6854 80.6091 26.775C80.1875 25.8645 79.9767 24.8253 79.9767 23.6573V14.5678Z"></path>
                            <path d="M114.017 18.9236C114.151 19.2272 114.023 19.5795 113.733 19.7394L106.497 23.7228C106.182 23.8959 105.787 23.7855 105.608 23.4745L104.545 21.6304C104.36 21.3092 104.476 20.8986 104.802 20.722L106.83 19.6232C107.216 19.4138 107.276 18.8859 106.855 18.7585C106.655 18.6979 106.439 18.6675 106.209 18.6675C105.474 18.6675 104.74 18.9998 104.005 19.6387C103.853 19.7665 103.169 20.2776 102.966 20.8143C102.84 21.121 102.865 21.4021 102.89 21.581C102.916 21.811 103.6 23.6766 104.182 24.3411C104.79 25.0311 105.474 25.3634 106.285 25.3634C107.464 25.3634 108.744 24.7086 110.072 23.399C110.336 23.1382 110.762 23.1232 111.029 23.3813L113.844 26.1048C114.074 26.3265 114.114 26.6825 113.917 26.9337C113.379 27.6214 112.709 28.2395 111.935 28.788C110.972 29.4525 109.959 29.938 108.869 30.2958C107.78 30.6281 106.691 30.807 105.601 30.807C104.512 30.807 103.498 30.6281 102.51 30.2958C101.522 29.9636 100.635 29.4525 99.8246 28.7369C99.0139 28.0468 98.3805 27.1524 97.8738 26.079C97.3924 25.0056 97.0377 23.7789 96.9617 22.3733C96.9617 22.2966 96.9617 22.271 96.9617 22.1432C96.9617 22.0155 96.9617 21.9388 96.9617 21.9388C96.9617 20.0732 97.3924 18.4631 98.2285 17.1341C99.0646 15.8052 100.154 14.7829 101.446 14.1185C102.764 13.454 104.081 13.0962 105.424 13.0962C109.448 13.0962 112.313 15.0387 114.017 18.9236Z"></path>
                            </svg>
                        </a>
                </p>
            </div>
            <div className="footer__link">
                <p>About us</p>
                <ul>
                    <li><a href="https://sadu.app/#team" target="_blank">Who we are</a></li>
                    <li><a href="https://unique.network/terms/" target="_blank">Terms of Service</a></li>
                </ul>
            </div>
            <div className="footer__link">
                <p>Contact us</p>
                <ul>
                    <li><a className="link" href="mailto:info@sadu.io">info@sadu.io</a></li>
                </ul>
            </div>
            <div className="footer__link">
                <p>Follow Sadu</p>
                <ul>
                    <li><a href="https://www.linkedin.com/company/s%C4%81du/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/sadu_app/" target="_blank">Instagram</a></li>
                    <li><a href="https://brittanymsalas.medium.com/" target="_blank">Medium</a></li>
                </ul>
            </div>
        </footer>
        </>
    );
}

export default LandingPage;