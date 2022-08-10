import logo from '../images/logo.svg'

import { Link } from 'react-router-dom';

function Header(props) {

    let mainLink;

    if (props.currentMode=='register') {
        mainLink = <Link to="/sign-in" className="header__main-link">Войти</Link>
    } 
    else if (props.currentMode=='login') {
        mainLink = <Link to="/sign-up" className="header__main-link">Регистрация</Link>
    }
    else {
        mainLink = <Link to="/sign-in" className="header__main-link">Выйти</Link>
    }

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип Место"/>
            {mainLink}
        </header>          
    );
  }

export default Header;