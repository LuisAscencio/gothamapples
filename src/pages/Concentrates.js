import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside'
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';



const solvent=[
"Don ๐ Mega (Indica)"   
]

const hashrosin=[
"GMO ๐ง (IndicaHybrid) ๐",
"Kush ๐ฌ Mints (IndicaHybrid)",
"Dosi ๐ช Mac (IndicaHybrid)",
"Platinum ๐ฆ  Jelly (SativaHybrid) ๐",
]

const liveresin=[
"Bubble ๐Gum (IndicaHybrid)",
"Biscotti ๐ช (IndicaHybrid)",
"Triangle ๐ Kush (Indica)",
"Alien ๐ฝ Orange Cookies (SativaHybrid)",
"Apple ๐ Fritter (IndicaHybrid)",
"Sโmores ๐ซ (Hybrid)",   
]

const curedbadder=[
"Black ๐ Sheep (Indica, PTA)",
"Snakes ๐ Cake (SativaHybrid) ๐ ",
"GG4 ๐ฆ (Hybrid)",
"GMO ๐ง (IndicaHybrid)",
"Guava ๐ (Hybrid)" 
]

const hashco=[
"MAC ๐ซ 69 (Hybrid)"
]

const houseco=[
"Sherblato ๐จ (Hybrid)",
"Scotti ๐จโ๐ณ (IndicaHybrid)" 
]

const viola=[
"Cheese ๐ง Dog (Sativa)",
"Cheesy ๐ฅ MAC (Sativa)",
"Dog ๐ฐ Cake (IndicaHybrid)"   
]

const olio=[
"White โช๏ธ Grapefruit (SativaHybrid)",
"Apple ๐ Fritter (Indica)",
"Papaya ๐ฐ Cake (IndicaHybrid)"  
]

const freshfrozen=[
"Punch ๐ฅ Cake (Hybrid)",
"Strawberry ๐ Cough (Sativa)",
"Fruity ๐ฅฃ Pebbles (Hybrid)",
"Pineapple ๐ Express (Hybrid)",   
]


const Concentrates = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-adveits_services' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>๐น๐ท๐ฎ Concentrates  ๐ฌ๐ท๐น๐ซ๐๐ฏ๐๐๐๐ฅฅ๐ฏ๐๐</title>

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
                                                    <img src="assets/img/bg/bannerconcentrates.jpg" alt="Flower" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="description" className="block spacer p-top-xl">
                                        <div className="description">
                                            <p>โ๏ธMedical Grade - Absolutely NO BOOF -</p>
                                            <p>Clean โ๏ธ - Real โ๏ธ- Tasty โ - Terpy โผ๏ธ-</p>
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
                                                        <h3>โถ๏ธโฝ๏ธ Solventless Hash Rosin๐Tier 90-120u ๐๐ฅ ๐๐ฅ๐๐ฅ๐๐ฅ๐(1G) ๐(Maine)๐ฏ ๐จ </h3>
                                                        <h4>โฌ๏ธ1@140  ๐ฒ</h4>
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
                                                        <h3>โถ๏ธโฝ๏ธ Hash Rosin (1G) ๐(Maine)  ๐ฏ ๐จ  </h3>
                                                        <h4>โฌ๏ธ1@100  ๐ฒ 2@180โคด๏ธ๐</h4>
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
                                                        <h3>โถ๏ธโฝ๏ธ  Live Resin Diamonds with Sauce (1G) ๐(California)๐ฏ ๐จ  ๐</h3>
                                                        <h4>โฌ๏ธ1@70  ๐ฒ </h4>
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
                                                        <h3>โถ๐๐ฝ๐ฝโโฝ๏ธ Ask About the 5G Wax Special For the following: ๐๐ฝ๐ฝโฝ๏ธโโ๏ธ</h3>
                                                    </div>

                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>โถ๏ธโฝ๏ธ Cured Badder (1G) ๐(Maine) ๐ฏ ๐จ </h3>
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
                                                        <h3>โถ๏ธโฝ๏ธ Hash Co. Live Resin (1G) ๐(Maine)  ๐ฏ ๐จ  ๐</h3>
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
                                                        <h3>โถ๏ธโฝ๏ธ House of Connoisseurs Live Resin (1G) ๐(Colorado)  ๐ฏ ๐จ  ๐</h3>
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
                                                        <h3>โถ๏ธโฝ๏ธ VIOLA Live Resin (1G) ๐(Colorado)  ๐ฏ ๐จ  ๐ +$5</h3>
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
                                                        <h3>โถ๏ธโฝ๏ธ OLIO Live Resin Dry Sugar (1G) ๐(Colorado)  ๐ฏ ๐จ ๐ +$5</h3>
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
                                                        <h3>โถ๏ธโฝ๏ธ Fresh Frozen Clear Melts (1G) ๐(CA)  ๐ฏ ๐จ  ๐ </h3>
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
                                                        <h3>โฌ๏ธ1G @60 ๐ฒ โฌ๏ธ2G @115 โฌ๏ธ3G @165 โฌ๏ธ5G @260 โคด๏ธ๐</h3>
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
