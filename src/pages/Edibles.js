import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside'
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';

const candy=[
"Errlli 🟣🔴 Sour Berry Terp Gummy Worm Crawlers 🟣🔴",
"⭐️Starburst 🌈 Starbuds 💫Gummies Sours⭐️",
"🌈Skittles🌈",
"Trrlli 🍑 Peachie 🍑 Os",
"🟡AIR 🎈HEADS 🔵 🌈 Sour Chewy Candy",
"🍒 BARIBO Happy 🍒Cherries 🍒",
"🟡Stoner🟠Patch🟢Dummies🔵 ",
"Runtz💗Gummies 🍉Watermelon Gummies 🍉",
"💚Love Savers 🟢LIFESAVERS 🟢Gummies 💚 ",
]

const punch=[
"Milk🥛",
"Dark🌚 ", 
]

const oreo=[
"Peanut 🥜 Butter",
"Chocolate 🌚 ",
"Mint 🧊 "
]


const Edibles = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-adveits_services' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>EDIBLES 💎Chocolates 🍫 Gummies 🔮 Candies 🍬 ↘️⬇️🆕⬇️↙️</title>

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
                <PageTitleServicesInside name={"Edibles chocolates gummies & candies"}/>

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="single">
                                <div id="single-content">
                                    <div id="img" className="block">
                                        <div className="img-no-wrap-1">
                                            <div className="img object-fit">
                                                <div className="object-fit-cover">
                                                    <img src="assets/img/bg/bannergummy.jpg" alt="Flower" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div id="description" className="block spacer p-top-xl">
                                        <div className="description">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                                        </div>
                                    </div> */}

                                    <div id="price-list" className="block spacer p-top-xl">
                                        <div className="title">
                                            <h2 className="hr text-uppercase">Menu</h2>
                                            
                                        </div>

                                        <div className="price-list">
                                            <div className="price-list-items">
                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                    <h3>↘️⬇️🆕⬇️↙️ @30ea 💲 🍎➡️🔽⬅️🍏</h3>
                                                    </div>

                                                </div>

                                                <div className="price-list-item">
                                                    <ul className="price-list-item-list-group list-group">
                                                    
                                                    {candy.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>   

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>⚪️🥛🌑Oreos ⚫️🥛⚪️</h3>
                                                    </div>
                                                    <ul className="price-list-item-list-group list-group">
                                                    
                                                    {oreo.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div> 

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>Punch 🥊 BARS Chocolates 🍫 </h3>
                                                    </div>
                                                    <ul className="price-list-item-list-group list-group">
                                                    
                                                    {punch.map((item) => {
                                                            
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

export default Edibles;
