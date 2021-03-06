import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside'
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';



const maineFlower= [
    "Garanimals πͺ (IndicaHybrid) π",
    "Candy π­ Shoppe (Sativa) π",
   "Gelato π§ 33 (IndicaHybrid) π",
   "7 Steps To Heaven (Hybrid) + $5",
    "GMO π§ Zkittlez (IndicaHybrid)",
    "Island π Breeze (SativaHybrid) π",
   "Happy π Hour (Sativa) + $5",
    "SFV πΌ OG (Indica)",
    "Molten π Lava (IndicaHybrid) + $5",
    "Wedding π Cake (IndicaHybrid) π",
    "TKO π¨ (Hybrid)",
    "TKO π¨ ",
]

const caliFlower= [
"RS-11 β οΈ (IndicaHybrid) + $5",
"Sherbinski π Runtz (IndicaHybrid) π",
"Zkittles π (Indica)",
"Bompton π Berry (Indica) π",
"Peanut π₯ Breath (IndicaHybrid)", 
"Jokerz π (Hybrid) π",
"Gello π° Cake (Indica)",
"Pastila π (Hybrid) π",
"Gushers π¦  (IndicaHybrid)",
"Kandy π­ Kush (Hybrid)",
"Deez π² Runtz (IndicaHybrid)",

]














const Flower = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-adveits_services' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>FlowerπΊ | Selection of πΊ Available for DELIVERY right now! π’βΆοΈπ</title>

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
                                            <p>πSHELFπINDOOR PREMIUM FLOWERβ½οΈ in 8οΈβ£th  CANS/JARS SOURCED from π Maine & NorCal π</p>
                                            <p>Selection of πΊ Available for DELIVERY right now! π’βΆοΈπ</p>
                                            
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
                                                            <span className="list-group-title">π’ 2 Cans/Jars   @120π²(60/π)</span>                
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">π 2 Cans & Edible @150(60/π’)</span>                
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">π’ 2 Cans/Jars   @120π²(60/π)</span>                
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">π’ 3               @ 175(58/π)</span>                
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">π 4               @210(53/π)</span>                
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">π 6βCans/Jars    @(50/π’)</span>                
                                                        </li>

                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">π’ 9 Random  @4οΈβ£2οΈβ£0οΈβ£(46 π)</span>                
                                                        </li>
                    
                                                       
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>πMaine</h3>
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
                                                        <h3>πCalifornia</h3>
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
