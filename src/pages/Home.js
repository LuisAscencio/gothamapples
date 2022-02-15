import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import { useEffect } from "react";
import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import PageTitleServices from '../blocks/page-title/PageTitleServices';
import PageTitleHome from '../blocks/page-title/PageTitleHome';
import ContactsUs from "../blocks/contacts/ContactUs";
import ServicesHome from '../blocks/services/ServicesHome';
import ServicesContent from '../blocks/services/ServicesContent';
import ContactForm from '../components/form/ContactForm';
import AboutsUs from '../blocks/about/AboutUs';
import News from '../blocks/news/News';
import GoogleMaps from '../blocks/google-maps/GoogleMaps';
import ContactsInside from '../blocks/contacts/Contacts';
import Newsletter from '../blocks/newsletter/Newsletter';
import BackToServices from '../components/button/BackToServices';





  

const Home = () => {


useEffect(() => {

    if (window.location.pathname==="/form") {
        window.scrollTo({ behavior: "smooth",
        top: 2000
      })
    }
    




    // if (window.location.pathname==="/services") {
    //     window.scrollTo({ behavior: "smooth",
    //     top: 800
    //   })
    // }
    
    
  }, []);



    document.body.classList.add( 'home' );
    document.body.classList.add( 'header-absolute-true' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Home | 🎇 Gotham 🍏’s  Gifting 🎁 Menu:📍MORE Flavors = More FUN🌈 all ⛽️ no Brakes</title>

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

            <Header logoColor="light" />

            <main id="main" className="site-main content-no-spacing">
                <div className="content">
                    <div className="clearfix">
                        <PageTitleHome />

                        <div id="page-content" className="spacer p-top-xl">
                        <ContactsUs />
                                
                           
                            </div>
                        
                                {/* <PageTitleServices /> */}

                            <div id="page-content" className="spacer p-top-xl">
                                <ServicesHome/>
                                
                           
                            </div>
                            <div id="page-content" className="spacer p-top-xl">
                               
                                
                                <ServicesContent />
                            </div>

                          
                           
                    


                        <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div className="clearfix">
                          

                              <div className="spacer p-top-xl">
                                    <div className="title">
                                        <h2 className="text-uppercase">Let’s get Connected</h2>
                                    </div>

                                    <div className="row gutter-width-sm with-pb-xl spacer p-top-lg">
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                            {/* <ContactsInside /> */}
                                            <div className="header-logo" style={{maxHeight: "350px"}}>
                                                <a className="logo logo-secondary transform-scale-h" title="Logo" href={ "https://www.instagram.com/gotham_apples/" }>
                                                    <img src={ "assets/img/bg/contactbannerbutton.png" } alt="Logo" style={{maxHeight: "600px",}}/>
                                                </a>
                                               
                                            </div>
                                            
                                        </div>

                                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                                            <div className="contact-form-shortcode">
                                                <ContactForm />
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>


                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                        {/* <ServicesContent /> */}

                        {/* <AboutsUs /> */}
                        {/* <ContactsUs /> */}
                        {/* <div id="img" className="block spacer p-top-xl">
                            <div className="img-no-wrap-1">
                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src="assets/img/bg/bannerbottom.jpg" alt="Gotham Apples" />
                                      
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <News />

                        <Newsletter /> */}
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Home;
