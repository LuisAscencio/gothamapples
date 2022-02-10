import React, { Component } from 'react';
import Swiper from 'swiper';

class ServicesHome extends Component {
    componentDidMount() {
        new Swiper( '.adv-slider-services .adv-swiper-container', {
            // ADV swiper
            noSwipingClass: 'adv-swiper-no-swiping',
            containerModifierClass: 'adv-swiper-container-',
            slideClass: 'adv-swiper-slide',
            slideBlankClass: 'adv-swiper-slide-invisible-blank',
            slideActiveClass: 'adv-swiper-slide-active',
            slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
            slideVisibleClass: 'adv-swiper-slide-visible',
            slideDuplicateClass: 'adv-swiper-slide-duplicate',
            slideNextClass: 'adv-swiper-slide-next',
            slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
            slidePrevClass: 'adv-swiper-slide-prev',
            slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
            wrapperClass: 'adv-swiper-wrapper',
            navigation: {
                disabledClass: 'adv-swiper-button-disabled',
                hiddenClass: 'adv-swiper-button-hidden',
                lockClass: 'adv-swiper-button-lock',
                nextEl: '.adv-2-swiper-button-next',
                prevEl: '.adv-2-swiper-button-prev'
            },
            spaceBetween: 0,
            slidesPerView: 'auto'
        } );
    }

    render() {
        return (
            <section id="services" className="block">
                <div className="adv-slider-services">
                    <div className="adv-swiper-container">
                        <div className="adv-swiper-wrapper services-items clearfix">
                            <a title="Flower" className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + "/flower" }>
                                <div className="services-item-content">
                                    <h3 className="services-item-t-head">Flower🌺</h3>

                                    <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">Visit</span>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src="assets/img/bg/flowercat.png" alt="Haircut" />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a>

                            <a title="chef's-recommendations" className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + "/chef's-recommendations" }>
                                <div className="services-item-content">
                                    <h3 className="services-item-t-head">👨‍🍳‘s  RECOMMENDATIONS: ✔️⏬
</h3>

                                    <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">Visit</span>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src="assets/img/bg/chefcatpng.png" alt="👨‍🍳‘s  RECOMMENDATIONS: ✔️⏬" />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a>

                            <a title="EDIBLES💎Chocolates🍫Gummies🔮Candies" className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + "/edibles-chocolates-candies-and-gummies" }>
                                <div className="services-item-content">
                                    <h3 className="services-item-t-head">EDIBLES 💎Chocolates 🍫 Gummies 🔮 Candies 🍬 </h3>

                                    <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">Visit</span>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src="assets/img/bg/ediblescat.png" alt="EDIBLES 💎Chocolates 🍫 Gummies 🔮 Candies 🍬 " />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a>

                            <a title="THC Vapes" className="adv-swiper-slide services-item" href={ process.env.PUBLIC_URL + "/thcvapes" }>
                                <div className="services-item-content">
                                    <h3 className="services-item-t-head">💨 THC Vape🎨Cartridges🕴↘️⤵️ 🧃 🆕 🧃 🧃🆕🧃 ⬇️↙️(Live Resin↩️510↪️Distillate)THREAD
</h3>

                                    <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto link-no-space">read more</span>
                                </div>

                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src="assets/img/bg/vapecat.png" alt="Beard Trim" />
                                    </div>
                                </div>

                                <div className="img-bg-color"></div>
                            </a>
                        </div>

                        <div className="adv-2-swiper-button-prev">
                            <span>
                                <span className="btn btn-lg btn-before-dot btn-link border-0 p-0 min-w-auto">Previous</span>
                            </span>
                        </div>

                        <div className="adv-2-swiper-button-next">
                            <span>
                                <span className="btn btn-lg btn-after-dot btn-link border-0 p-0 min-w-auto">Next</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesHome;
