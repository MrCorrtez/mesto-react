import React from 'react';

import logo from '../images/logo.svg'

import { Link } from 'react-router-dom';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Header(props) {

    let mainLink;

    const currentUser = React.useContext(CurrentUserContext);

    if (props.currentMode==='register') {
        mainLink = <Link to="/sign-in" className="header__main-link">Войти</Link>
    } 
    else if (props.currentMode==='login') {
        mainLink = <Link to="/sign-up" className="header__main-link">Регистрация</Link>
    }
    else {
        mainLink = <Link to="/sign-in" className="header__main-link" onClick={handleExitClick}>{currentUser.email} Выйти</Link>
    }

    function handleExitClick() {
        localStorage.removeItem('mesto-jwt');
    }

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип Место"/>
            {mainLink}
        </header>          
    );
  }

export default Header;