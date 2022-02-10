import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside'
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';



const solvent=[
"Don 🍌 Mega (Indica)"   
]

const hashrosin=[
"GMO 🧄 (IndicaHybrid) 🆕",
"Kush 🍬 Mints (IndicaHybrid)",
"Dosi 🍪 Mac (IndicaHybrid)",
"Platinum 🦠 Jelly (SativaHybrid) 🆕",
]

const liveresin=[
"Bubble 🎈Gum (IndicaHybrid)",
"Biscotti 🍪 (IndicaHybrid)",
"Triangle 🍊 Kush (Indica)",
"Alien 👽 Orange Cookies (SativaHybrid)",
"Apple 🍏 Fritter (IndicaHybrid)",
"S’mores 🍫 (Hybrid)",   
]

const curedbadder=[
"Black 🐑 Sheep (Indica, PTA)",
"Snakes 🐍 Cake (SativaHybrid) 🏆 ",
"GG4 🦍 (Hybrid)",
"GMO 🧄 (IndicaHybrid)",
"Guava 🍈 (Hybrid)" 
]

const hashco=[
"MAC 🫕 69 (Hybrid)"
]

const houseco=[
"Sherblato 🍨 (Hybrid)",
"Scotti 👨‍🍳 (IndicaHybrid)" 
]

const viola=[
"Cheese 🧀 Dog (Sativa)",
"Cheesy 🥘 MAC (Sativa)",
"Dog 🍰 Cake (IndicaHybrid)"   
]

const olio=[
"White ⚪️ Grapefruit (SativaHybrid)",
"Apple 🍏 Fritter (Indica)",
"Papaya 🍰 Cake (IndicaHybrid)"  
]

const freshfrozen=[
"Punch 🥊 Cake (Hybrid)",
"Strawberry 🍓 Cough (Sativa)",
"Fruity 🥣 Pebbles (Hybrid)",
"Pineapple 🚂 Express (Hybrid)",   
]


const Concentrates = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-adveits_services' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>🔹🔷🔮 Concentrates  🔬🔷🔹🫐🍓🕯🍇🍉🍒🥥🕯🍍🍏</title>

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
                <PageTitleServicesInside name={"Concentrates"}/>

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="single">
                                <div id="single-content">
                                    <div id="img" className="block">
                                        <div className="img-no-wrap-1">
                                            <div className="img object-fit">
                                                <div className="object-fit-cover">
                                                    <img src="assets/img/placeholder/1600x700.jpg" alt="Flower" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="description" className="block spacer p-top-xl">
                                        <div className="description">
                                            <p>❗️Medical Grade - Absolutely NO BOOF -</p>
                                            <p>Clean ☑️ - Real ✔️- Tasty ✅ - Terpy ‼️-</p>
                                            <p>All concentrates are from medical LICENSED extractors w/ Glass jar presentation</p>
                                        </div>
                                    </div>

                                    <div id="price-list" className="block spacer p-top-xl">
                                        <div className="title">
                                            <h2 className="hr text-uppercase">Menu</h2>
                                        </div>

                                        <div className="price-list">
                                            <div className="price-list-items">

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️⛽️ Solventless Hash Rosin🔝Tier 90-120u 🏆🥇 🏆🥇🏆🥇🏆🥇🏆(1G) 📍(Maine)🍯 💨 </h3>
                                                        <h4>⬆️1@140  💲</h4>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {solvent.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️⛽️ Hash Rosin (1G) 📍(Maine)  🍯 💨  </h3>
                                                        <h4>⬆️1@100  💲 2@180⤴️📐</h4>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {hashrosin.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️⛽️  Live Resin Diamonds with Sauce (1G) 📍(California)🍯 💨  🆕</h3>
                                                        <h4>⬆️1@70  💲 </h4>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {liveresin.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶🆕🔽🔽❕⛽️ Ask About the 5G Wax Special For the following: 🆕🔽🔽⛽️❕◀️</h3>
                                                    </div>

                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️⛽️ Cured Badder (1G) 📍(Maine) 🍯 💨 </h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {curedbadder.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️⛽️ Hash Co. Live Resin (1G) 📍(Maine)  🍯 💨  🆕</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {hashco.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️⛽️ House of Connoisseurs Live Resin (1G) 📍(Colorado)  🍯 💨  🆕</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {houseco.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️⛽️ VIOLA Live Resin (1G) 📍(Colorado)  🍯 💨  🆕 +$5</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {viola.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️⛽️ OLIO Live Resin Dry Sugar (1G) 📍(Colorado)  🍯 💨 🆕 +$5</h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {olio.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️⛽️ Fresh Frozen Clear Melts (1G) 📍(CA)  🍯 💨  🆕 </h3>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {freshfrozen.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>⬆️1G @60 💲 ⬆️2G @115 ⬆️3G @165 ⬆️5G @260 ⤴️📐</h3>
                                                    </div>

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

export default Concentrates;
