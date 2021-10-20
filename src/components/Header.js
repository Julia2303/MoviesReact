import React from 'react';
import ArrowDown from './elements/Arrow';

const Header = () => {
    return <header className="header">
        <div className="header__logo">
            <img className="header__logo-image"
                 src="/images/header-logo.svg"
                 alt=""
            />
            <p className="header__text">Movies</p>
        </div>
        <button className="header__button">
            <span className="header__button-content">My Account</span>
            <ArrowDown className="header__icon" />
        </button>
    </header>;
};

export default Header;
