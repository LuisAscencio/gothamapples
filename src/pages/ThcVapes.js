import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside'
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';

const seaweed= [
"Purple 🟣 Afghani 🆕 (Indica)",
"Orange 🍊 Valley OG (Hybrid)",
"Purple🔮Bubba Kush 🆕 (Indica)",
]

const refined= [
"Zkittles 🌈 (Indica)",
"Do Si Dos 🍪 (IndicaHybrid)",
"Grape 🟣 Fruit Haze (Sativa)",
"Pie 🥧 Hoe (IndicaHybrid) ",
"Fruity 🌈 Pebbles (IndicaHybrid)",
"Runtz ⚪️ (Hybrid)",
"Wedding 🎂 Cake (Indica)",
"Forbidden 🍎 Fruit (Indica)",
"Apple 🍏 Jack (SativaHybrid)",
"Purple 🥊 Punch (Indica)",
"Lime 🍦 Sorbet (Indica)",
"Mimosa 🥂 (Sativa)",
"Gelato 🍨(IndicaHybrid)",
"Second 🍳 Breakfast (SativaHybrid)",
"Pineapple 🍍 OG (SativaHybrid)" , 
]

const saucedbars= [
"Strawberry 🍓 Cough (Sativa)",
"Grand Daddy Purple (Indica)",
"Sour ⛽️ Diesel (Sativa)",
"Gelato 🍦 (Hybrid)",
"Zkittles 🌈 (Indica)",
"White 🕷 Widow (Hybrid)",
"Ghost 🚂 Train Haze (Sativa)",
"Blueberry 🫐 Kush (Indica)",
"Apple 🍏 Fritter (Hybrid)",
"Peaches 🍑 (Indica)",
]

const lonelybones= [
"Le Montage 🍋 (SativaHybrid)",
"Floruit 🌱 (IndicaHybrid)"     
]

const pinetree= [
"Banana 🍌 Kush (Indica)",
"24K⚱️Gold Punch (SativaHybrid)",
"Forbidden Guava🍈 (Indica)",
"Strawberry 🍓 Shortcake (Indica)" ,  
]

const sauced= [
"Guava 🍈 Dawg (Sativa)",
"Skywalker 🥷🏿 OG (Hybrid)",
"Runtz  (Hybrid)",
"Gelonade (Hybrid)",
"Slurricane 🌊(Hybrid)",
"Jack Wreck (Sativa)",
"Maui ☀️ Wowie (Sativa)",
"Strawberry 🍓 Kiwi (Sativa)",
"Sauced OG (Indica)",
"Goo 🦠Berry (Indica) ",  
]

const soulselects= [
"Deception OG (IndicaHybrid)",
"Project 4516 (IndicaHybrid)"   
]




const ThcVapes = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-adveits_services' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>💨 THC Vape🎨Cartridges🕴↘️⤵️ 🧃 🆕 🧃 🧃🆕🧃 ⬇️↙️(Live Resin↩️510↪️Distillate THREAD</title>

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
                <PageTitleServicesInside name={"THC Vapes"}/>

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="single">
                                <div id="single-content">
                                    <div id="img" className="block">
                                        <div className="img-no-wrap-1">
                                            <div className="img object-fit">
                                                <div className="object-fit-cover">
                                                    <img src="assets/img/bg/bannervape.jpg" alt="Flower" />
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
                                                        <h3>▶️Sea Weed Co. 🌊 Live Resin🖊(0.5)💨 🧃(Maine)</h3>
                                                        <h4>⬆️1@75  💲 2@140⤴️📐</h4>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                         {seaweed.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️Refine 🧿 (1.0 G)🖊 💨  🧃(Washington)</h3>
                                                        <h4>⬆️1@75  💲 2@140⤴️</h4>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                         {refined.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️Sauce Bars DISPOSABLE Device 🤤 (1.0 G)🖊 💨 🧃(CA) 🆕</h3>
                                                        <h4>⬆️1@75  💲 2@140⤴️📐</h4>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                         {saucedbars.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️Lonely Bones 🦴 Cured Resin 🖊(0.5)💨  🧃(Maine)</h3>
                                                        <h4>⬆️1@65  💲 2@120⤴️📐</h4>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                         {lonelybones.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️Pine🌲Tree🌲Apothecary 🖊 (1G)💨 🧃(Maine)</h3>
                                                        <h4>⬆️1@70  💲 2@130⤴️📐</h4>
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
                                                        <h3>▶️SAUCED ❕ Live Resin 🧿 (1G)🖊 💨 🧃(Nevada) 🆕</h3>
                                                        <h4>⬆️1@80  💲 2@150⤴️📐</h4>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                         {sauced.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>▶️Soul Selects Cultivated by Hummingbird Family Farm 🌹 Live Resin🖊(1G)💨  🧃(Maine)</h3>
                                                        <h4>⬆️1@90  💲 2@170⤴️📐</h4>
                                                    </div>

                                                    <ul className="price-list-item-list-group list-group">
                                                         {soulselects.map((item) => {
                                                            
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

export default ThcVapes;
