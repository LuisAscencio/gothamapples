import React from 'react';

const ModalMenuPrimary = (props) => {
    return (
        <nav className="menu-primary">
            <ul className="nav">
            
               
                
                <li className={ "nav-item" + (window.location.pathname === '/about' ? " current-nav-item" : "") }>
                <a title="Insta" href={ "https://www.instagram.com/gotham_apples/" }>Visit Instagram</a>
                </li>
         

                {/* <li className={ "nav-item" + (window.location.pathname === '/flower' ? " current-nav-item" : "") }>
                    <a title="flower" href={ process.env.PUBLIC_URL + "/flower" }>Flower</a>
                </li>

                <li className={ "nav-item" + (window.location.pathname === "/chef's-recommendations" ? " current-nav-item" : "") }>
                    <a title="chef's-recommendations" href={ process.env.PUBLIC_URL + "/chef's-recommendations" }>chef's Recommendations</a>
                </li>

                <li className={ "nav-item" + (window.location.pathname === "/edibles-chocolates-candies-and-gummies" ? " current-nav-item" : "") }>
                    <a title="/edibles-chocolates-candies-and-gummies" href={ process.env.PUBLIC_URL + "/edibles-chocolates-candies-and-gummies" }>EDIBLES CHOCOLATES GUMMIES & CANDIES</a>
                </li>

                <li className={ "nav-item" + (window.location.pathname === '/thcvapes' ? " current-nav-item" : "") }>
                    <a title="thcvapes" href={ process.env.PUBLIC_URL + "/thcvapes" }>thc vapes</a>
                </li>

                <li className={ "nav-item" + (window.location.pathname === '/concentrates' ? " current-nav-item" : "") }>
                    <a title="concentrates" href={ process.env.PUBLIC_URL + "/concentrates" }>Concentrates</a>
                </li>
                <li className={ "nav-item" + (window.location.pathname === '/prerolled' ? " current-nav-item" : "") }>
                    <a title="prerolled" href={ process.env.PUBLIC_URL + "/prerolled" }>Pre Rolled</a>
                </li>  */}
            </ul>
        </nav>
    );
};

export default ModalMenuPrimary;
