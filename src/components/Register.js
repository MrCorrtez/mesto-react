import React from 'react';

import { Link } from 'react-router-dom';

import Header from './Header';

function Register(props) {

    const [email, setEmail] = React.useState('');
    const [password, setpassword] = React.useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setpassword(e.target.value);
    }

    return (
        <>
            <Header currentMode='register'/>
            <section className={"register"}>
                <form className= {"register__form"} onSubmit={props.onSubmit} noValidate>
                    <p className="register__heading">Регистрация</p>
                    <input className="register__input" value={email} onChange={handleEmailChange} name="email" type="email" placeholder="Email"/>
                    <input className="register__input" value={password} onChange={handlePasswordChange} name="password" type="password" placeholder="Пароль"/>
                    <button type="submit" className="register__saveButton">Зарегистрироваться</button>                
                    <Link to="/sign-in" className="register__login-link">Уже зарегистрированы? Войти</Link>                 
                </form>              
            </section>          
        </>
    );
  }

export default Register;