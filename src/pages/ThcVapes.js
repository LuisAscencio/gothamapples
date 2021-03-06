import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside'
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';

const seaweed= [
"Purple ๐ฃ Afghani ๐ (Indica)",
"Orange ๐ Valley OG (Hybrid)",
"Purple๐ฎBubba Kush ๐ (Indica)",
]

const refined= [
"Zkittles ๐ (Indica)",
"Do Si Dos ๐ช (IndicaHybrid)",
"Grape ๐ฃ Fruit Haze (Sativa)",
"Pie ๐ฅง Hoe (IndicaHybrid) ",
"Fruity ๐ Pebbles (IndicaHybrid)",
"Runtz โช๏ธ (Hybrid)",
"Wedding ๐ Cake (Indica)",
"Forbidden ๐ Fruit (Indica)",
"Apple ๐ Jack (SativaHybrid)",
"Purple ๐ฅ Punch (Indica)",
"Lime ๐ฆ Sorbet (Indica)",
"Mimosa ๐ฅ (Sativa)",
"Gelato ๐จ(IndicaHybrid)",
"Second ๐ณ Breakfast (SativaHybrid)",
"Pineapple ๐ OG (SativaHybrid)" , 
]

const saucedbars= [
"Strawberry ๐ Cough (Sativa)",
"Grand Daddy Purple (Indica)",
"Sour โฝ๏ธ Diesel (Sativa)",
"Gelato ๐ฆ (Hybrid)",
"Zkittles ๐ (Indica)",
"White ๐ท Widow (Hybrid)",
"Ghost ๐ Train Haze (Sativa)",
"Blueberry ๐ซ Kush (Indica)",
"Apple ๐ Fritter (Hybrid)",
"Peaches ๐ (Indica)",
]

const lonelybones= [
"Le Montage ๐ (SativaHybrid)",
"Floruit ๐ฑ (IndicaHybrid)"     
]

const pinetree= [
"Banana ๐ Kush (Indica)",
"24Kโฑ๏ธGold Punch (SativaHybrid)",
"Forbidden Guava๐ (Indica)",
"Strawberry ๐ Shortcake (Indica)" ,  
]

const sauced= [
"Guava ๐ Dawg (Sativa)",
"Skywalker ๐ฅท๐ฟ OG (Hybrid)",
"Runtz  (Hybrid)",
"Gelonade (Hybrid)",
"Slurricane ๐(Hybrid)",
"Jack Wreck (Sativa)",
"Maui โ๏ธ Wowie (Sativa)",
"Strawberry ๐ Kiwi (Sativa)",
"Sauced OG (Indica)",
"Goo ๐ฆ Berry (Indica) ",  
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
                <title>๐จ THC Vape๐จCartridges๐ดโ๏ธโคต๏ธ ๐ง ๐ ๐ง ๐ง๐๐ง โฌ๏ธโ๏ธ(Live Resinโฉ๏ธ510โช๏ธDistillate THREAD</title>

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
                                                        <h3>โถ๏ธSea Weed Co. ๐ Live Resin๐(0.5)๐จ ๐ง(Maine)</h3>
                                                        <h4>โฌ๏ธ1@75  ๐ฒ 2@140โคด๏ธ๐</h4>
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
                                                        <h3>โถ๏ธRefine ๐งฟ (1.0 G)๐ ๐จ  ๐ง(Washington)</h3>
                                                        <h4>โฌ๏ธ1@75  ๐ฒ 2@140โคด๏ธ</h4>
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
                                                        <h3>โถ๏ธSauce Bars DISPOSABLE Device ๐คค (1.0 G)๐ ๐จ ๐ง(CA) ๐</h3>
                                                        <h4>โฌ๏ธ1@75  ๐ฒ 2@140โคด๏ธ๐</h4>
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
                                                        <h3>โถ๏ธLonely Bones ๐ฆด Cured Resin ๐(0.5)๐จ  ๐ง(Maine)</h3>
                                                        <h4>โฌ๏ธ1@65  ๐ฒ 2@120โคด๏ธ๐</h4>
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
                                                        <h3>โถ๏ธPine๐ฒTree๐ฒApothecary ๐ (1G)๐จ ๐ง(Maine)</h3>
                                                        <h4>โฌ๏ธ1@70  ๐ฒ 2@130โคด๏ธ๐</h4>
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
                                                        <h3>โถ๏ธSAUCED โ Live Resin ๐งฟ (1G)๐ ๐จ ๐ง(Nevada) ๐</h3>
                                                        <h4>โฌ๏ธ1@80  ๐ฒ 2@150โคด๏ธ๐</h4>
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
                                                        <h3>โถ๏ธSoul Selects Cultivated by Hummingbird Family Farm ๐น Live Resin๐(1G)๐จ  ๐ง(Maine)</h3>
                                                        <h4>โฌ๏ธ1@90  ๐ฒ 2@170โคด๏ธ๐</h4>
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
