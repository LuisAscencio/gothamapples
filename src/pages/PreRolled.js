import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside'
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';


const wisley=[
"Bacio π¨ Gelato (Hybrid)",
"Jelly O",
"94 Octane",
"3 Peat",
"Gasper",
"Hot Cake",
"Citrine Runtz",   
]

const jeeter=[
"SOLD OUT",
]

const pinetree=[
"Beach π Wedding (IndicaHybrid)",
"Triple Chocolate π« Chip (SativaHybrid)",
"Salmon River OG (IndicaHybrid)",
"First Class Funk (IndicaHybrid)",
"Peanut π₯ Butter Punch 5 (IndicaHybrid)",  
]

const kind=[
"Sativa",
"Indica",
"Hybrid",    
]


const PreRolled = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-adveits_services' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>π Pre-Rolled πShelf πΊ  </title>

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
                <PageTitleServicesInside name={"Pre Rolled"}/>

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="single">
                                <div id="single-content">
                                    <div id="img" className="block">
                                        <div className="img-no-wrap-1">
                                            <div className="img object-fit">
                                                <div className="object-fit-cover">
                                                    <img src="assets/img/bg/bannerprerolled.jpg" alt="Flower" />
                                                </div>
                                            </div>
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
                                                        <h3>(1.2)π£ WISELY Cannabis</h3>
                                                        <h4>β¬οΈ1@30 π² 3@75β€΄οΈ π</h4>
                                                        <h6>King Size Preroll (Maine)π</h6>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {wisley .map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}   
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>π(2.5) BABY π§JEETER</h3>
                                                        <h4>β¬οΈ5@70π² </h4>
                                                        <h6>Infused PREROLLS w/ Liquid Diamonds π & Kief, Pack of 5 π (CA)</h6>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {jeeter.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}   
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>(1.0) PINE π² TREE APOTHECARY: King π Caviar</h3>
                                                        <h4>β¬οΈ1@30 π² 3@75β€΄οΈ π</h4>
                                                        <h6>βͺοΈ Top Shelf Organically Grown πΊ Coated w/High Terpenes Extract & Kief: (Maine)</h6>
                                                        
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {pinetree.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}   
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>KIND FARMS Dogwalkers Pack of 5 (2.5G) π (Maine)</h3>
                                                        <h4>β¬οΈ5@75π² 2@140β€΄οΈπ</h4>
                                                          
                                                        
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                    {kind.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}   
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>(1.2) π SACRED ROLLS Blunts π₯</h3>
                                                        <h4>β¬οΈ1@30 π²</h4>
                                                        <h6>Hand-filled πShelf Medical Flower from Maine π¦ </h6>
                                                       
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

export default PreRolled;

