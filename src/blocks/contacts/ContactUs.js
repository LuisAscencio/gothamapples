import React from 'react';

const ContactsUs = () => {
    return (
        <section id="contact-us" className="block" style={ { backgroundImage: 'url(assets/img/bg/bannercrazy.png)' } }>
            <div className=" text-tertiary spacer p-top-xl p-bottom-xl">
                <div className="wrapper text-center">
                    <div className="title">
                        <h2 className="text-uppercase">Info</h2>
                    </div>

                    <a href={ process.env.PUBLIC_URL + "/info" } className="btn btn-outline-tertiary text-uppercase">Visit Info</a>
                </div>
            </div>
        </section>









    );
};

export default ContactsUs;
