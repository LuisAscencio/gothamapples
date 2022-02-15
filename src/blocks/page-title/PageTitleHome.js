import React from 'react';
import { Link } from 'react-scroll';


const PageTitleHome = () => {
    console.log(window.innerWidth)
    return (
        <section id="page-title" className="block with-img" style={ { backgroundImage: 'url(assets/img/bg/mainbannercity.png)' } }>
            <div className="wrapper text-center d-flex">
                <div className="align-self-center w-100">
                    <div className="title">
                        <h1 className="large text-uppercase">Gotham Apples</h1>
                        {window.innerWidth<911 ? 
                        <a href={ "https://www.instagram.com/gotham_apples"} className="btn btn-link border-0 p-0 min-w-auto">
                        <i class="fab fa-instagram fa-5x" ></i>
                        </a>
            
                        : '' }
                    </div>

                    {/* <div className="description spacer p-top-lg">
                        <p>For Gifting 🎁 Menu</p>
                    </div>

                    <div className="spacer p-top-lg no-space">
                        <Link href="#contact-us"
                              to="contact-us"
                              spy={ true }
                              smooth={ true }
                              duration={ 0 }
                              className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space text-uppercase scroll-to-id">
                            Scroll
                        </Link>
                    </div> */}

                    {/* <nav className="languages lang-position">
                        <ul className="nav">
                            <li className="lang-item current-lang">
                                <a title="en" href={ process.env.PUBLIC_URL + "/" }>en</a>
                            </li>
                        </ul>
                    </nav> */}
                </div>
            </div>

            <div className="page-title-bg-color"></div>
        </section>
    );
};

export default PageTitleHome;
