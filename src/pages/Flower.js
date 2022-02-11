import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside'
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';



const maineFlower= [
    "Garanimals 🍪 (IndicaHybrid) 🆕",
    "Candy 🍭 Shoppe (Sativa) 🆕",
   "Gelato 🍧 33 (IndicaHybrid) 🆕",
   "7 Steps To Heaven (Hybrid) + $5",
    "GMO 🧄 Zkittlez (IndicaHybrid)",
    "Island 🏝 Breeze (SativaHybrid) 🆕",
   "Happy 😆 Hour (Sativa) + $5",
    "SFV 🚼 OG (Indica)",
    "Molten 🌋 Lava (IndicaHybrid) + $5",
    "Wedding 🎂 Cake (IndicaHybrid) 🆕",
    "TKO 💨 (Hybrid)",
    "TKO 💨 ",
]

const caliFlower= [
"RS-11 ⚠️ (IndicaHybrid) + $5",
"Sherbinski 🔉 Runtz (IndicaHybrid) 🆕",
"Zkittles 🌈 (Indica)",
"Bompton 🎒 Berry (Indica) 🆕",
"Peanut 🥜 Breath (IndicaHybrid)", 
"Jokerz 🃏 (Hybrid) 🆕",
"Gello 🍰 Cake (Indica)",
"Pastila 🍝 (Hybrid) 🆕",
"Gushers 🦠 (IndicaHybrid)",
"Kandy 🍭 Kush (Hybrid)",
"Deez 🔲 Runtz (IndicaHybrid)",

]














const Flower = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-adveits_services' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Flower🌺 | Selection of 🌺 Available for DELIVERY right now! 🛢▶️🔋</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <Header logoColor="dark" />

            <main id="main" className="site-main">
                <PageTitleServicesInside name={"Flower"}/>

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="single">
                                <div id="single-content">
                                    <div id="img" className="block">
                                        <div className="img-no-wrap-1">
                                            <div className="img object-fit">
                                                <div className="object-fit-cover">
                                                    <img src="assets/img/bg/bannerflower.jpg" alt="Flower" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="description" className="block spacer p-top-xl">
                                        <div className="description">
                                            <p>🔝SHELF👑INDOOR PREMIUM FLOWER⛽️ in 8️⃣th  CANS/JARS SOURCED from 🔌 Maine & NorCal 🔛</p>
                                            <p>Selection of 🌺 Available for DELIVERY right now! 🛢▶️🔋</p>
                                            
                                        </div>
                                    </div>

                                    <div id="price-list" className="block spacer p-top-xl">
                                        <div className="title">
                                            <h2 className="hr text-uppercase">Pricing</h2>
                                        </div>

                                        <div className="price-list">
                                            <div className="price-list-items">
                                                <div className="price-list-item">
                                                    {/* <div className="price-list-item-title">
                                                        <h3>Special in-salon treatments</h3>
                                                    </div> */}

                                                    <ul className="price-list-item-list-group list-group">
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">🛢 2 Cans/Jars   @120💲(60/🍏)</span>                
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">🍏 2 Cans & Edible @150(60/🛢)</span>                
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">🛢 2 Cans/Jars   @120💲(60/🍏)</span>                
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">🛢 3               @ 175(58/🔋)</span>                
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">🔋 4               @210(53/🍎)</span>                
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">🍏 6➕Cans/Jars    @(50/🛢)</span>                
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">🛢 9 Random  @4️⃣2️⃣0️⃣(46 🍏)</span>                
                                                        </li>
                    
                                                       
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>💌Maine</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">

                                                        {maineFlower.map((item) => {
                                                            
                                                           return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                           <span className="list-group-title">{item.split("(")[0]}</span>
                                                           <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                       </li>  
                                                        })}

                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>💌California</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">

                                                        {caliFlower.map((item) => {
                                                            
                                                           return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                           <span className="list-group-title">{item.split("(")[0]}</span>
                                                           <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                       </li>  
                                                        })}

                                                    </ul>
                                                </div>






                                            </div>
                                        </div>
                                    </div>

                                    <BackToServices />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Flower;
