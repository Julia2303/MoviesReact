import React from 'react';
import ArrowDown from './elements/Arrow';
import { Link } from 'react-router-dom';

const Header = () => {
    return <header className="header">
        <Link to="/" className="header__logo">
            <img className="header__logo-image" src="/images/header-logo.svg" alt="" />
            <p className="header__logo-text">Movies</p>
        </Link>
        <Link to="/favourites">
            <button className="header__button">
                <span className="header__button-content">My Account</span>
                <ArrowDown className="header__button-icon" />
            </button>
        </Link>
    </header>;
};

export default Header;
