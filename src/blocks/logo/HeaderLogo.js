import React from 'react';

const HeaderLogo = ( { logoColor } ) => {
    return (
        <div className="header-logo">
            <a className="logo logo-secondary transform-scale-h" title="Logo" href={ process.env.PUBLIC_URL + "/" }>
                <img src={ "assets/img/logo/galogo.png" } alt="Logo" style={{width: window.innerWidth<=999 ? "43vw": "10vw" }} />
            </a>
        </div>
    );
};

export default HeaderLogo;
