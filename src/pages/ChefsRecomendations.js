import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import PageTitleServicesInside from '../blocks/page-title/PageTitleServicesInside'
import Footer from '../blocks/footer/Footer';
import BackToServices from '../components/button/BackToServices';


const veganCookies= [
"Red π° Velvet Crinkle",, 
"Snickerdoodle π§ Cookie ",
"Molasses Cookie π",
"Coconut π₯₯ Dream ",
"Chocolateπ« Peppermint Cookie ",

]

const gummyWorms= [
"Baja Blast π Daytime Regular ",
"Super Chill π Twizzlers",
"π« π Daytime 3:1:1π",  
]

const deathWorms=[
"Slap Nβ Tickle Watermelon π Lemonade",
"Apples π and Oranges",
"Limeberry Kiwi π₯ Soma",
"Cherry π Twizzler Pick Me Up",
]

const kindFarms=[
"Classic Milk π«", 
"Extra Dark π«",
"Dark Toffee Crunch",
"Milk Toffee Crunch",
"Rice Crispies",
"Cookie Crunch",
"Dark Mint" ,
]


const laDank=[
"Strawberry π Gelato",
"Lemon π Gelato",
"Vanilla π¦ Marshmallow",
"White π Gelato",
"Chocolate π« Runtz",
]

const oneUp=[
"Milk π« Chocolate",
"Strawberries π Creme",
"Cookies πͺ Cream",
]

const wonderland=[
"Vanilla Golden Teachers (Vegan)"
]

const truffles=[
"Dried Brazilian Cubensis Fruits π",
"Dried Golden Teacher Fruits"
]



const ChefsRecommendation = () => {
    document.body.classList.add( 'single' );
    document.body.classList.add( 'single-adveits_services' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>π¨βπ³βs  RECOMMENDATIONS: βοΈβ¬</title>

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
                <PageTitleServicesInside name={"Chef's recommendations"}/>

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="single">
                                <div id="single-content">
                                    <div id="img" className="block">
                                        <div className="img-no-wrap-1">
                                            <div className="img object-fit">
                                                <div className="object-fit-cover">
                                                    <img src="assets/img/bg/bannerchef.jpg" alt="Flower" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="description" className="block spacer p-top-xl">
                                        <div className="description">
                                            <p>1:1 or 2:1 or 3:1:1 refers to the amount of THC compared to the other cannabinoids.</p>
                                            <p>1:1 would be either - 35 mg THC/35 mg CBD or CBG</p>
                                            <p>2:1 would be - 35 mg THC/ 17.5 mg CBD/CBG/CBN</p> 
                                            <p>3:1 would be 35 mg THC/12 mg CBD/CBG</p>
                                            <p>In this case, 3:1:1 is 35 mg THC/12 mg CBD/12 mg CBG</p>
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
                                                        <h3>πVEGAN πΏCookies πͺ by Twinπ΄ (NY)</h3>
                                                        <h4>β¬οΈ1@35π² 2@60β€΄οΈπ</h4>
                                                    </div>
                                                    <ul className="price-list-item-list-group list-group">
                                                    
                                                    {veganCookies.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>              
           
                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>πGummy Worms by Full Spectrum Confectionery πͺ± (NJ)</h3>
                                                        <h4>β¬οΈ1@35π²</h4>
                                                    </div>
                                                    <ul className="price-list-item-list-group list-group">
                                                    
                                                    {gummyWorms.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>   

                                                 <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>πDeath Worms Worms by Full Spectrum Confectionery πͺ± (NJ)</h3>
                                                        <h4>β¬οΈ1@35π²</h4>
                                                        <h6>Death Worms are 3x STRONGER than the REGULAR Worms, both are the strongest Gummies on our Menu</h6>
                                                    </div>
                                                    <ul className="price-list-item-list-group list-group">
                                                    
                                                    {deathWorms.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>πKIND FARMS Confections π«(ME)</h3>
                                                        <h4>β¬οΈ1@45π²</h4>
                                                        <h6>Cannabis Infused HASH ROSIN Milk Chocolate Bars</h6>
                                                    </div>
                                                    <ul className="price-list-item-list-group list-group">
                                                    
                                                    {kindFarms.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                   <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>π«LA Dankπ°Sugar Dank Nugsπ₯« (CA)</h3>
                                                        <h4>β¬οΈ1@40π²</h4>
                                                        <h6>Hash Rosin Chocolate [500mg] π</h6>
                                                    </div>
                                                    <ul className="price-list-item-list-group list-group">
                                                    
                                                    {laDank.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                  <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>π«β³οΈONE UP π</h3>
                                                        <h4>β¬οΈ1@80  π² 2@150β€΄οΈπ</h4>
                                                        <h6>Magic π Truffles Fruit Chocolate Bar β³οΈπ«(CA)</h6>
                                                    </div>
                                                    <ul className="price-list-item-list-group list-group">
                                                    
                                                    {oneUp.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div> 

                                                <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>π¬ Wonderland π</h3>
                                                        <h4>β¬οΈ1@80  π² 2@150β€΄οΈπ</h4>
                                                        <h6>Magic π Truffles Chocolate π« Squares (CA)</h6>
                                                    </div>
                                                    <ul className="price-list-item-list-group list-group">
                                                    
                                                    {wonderland.map((item) => {
                                                            
                                                            return <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            <span className="list-group-title">{item.split("(")[0]}</span>
                                                            <span className="list-group-price">{item.split("(")[1] ? item.split("(")[1].replace(")", "") : "" } </span>
                                                        </li>  
                                                         })}
                                                    </ul>
                                                </div>

                                                 <div className="price-list-item">
                                                    <div className="price-list-item-title">
                                                        <h3>Tπ?R π΅U π?F πF π?L π΅E π?S π΅</h3>
                                                        <h4>β¬οΈ1/8th @60   π² 2@115β€΄οΈπ</h4>
                                                    </div>
                                                    <ul className="price-list-item-list-group list-group">
                                                    
                                                    {truffles.map((item) => {
                                                            
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

export default ChefsRecommendation;
