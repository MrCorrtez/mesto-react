import React from 'react';

import Header from './Header';

function Login(props) {

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
            <Header currentMode='login'/>
            <section className={"register"}>
                <form className= {"register__form"} onSubmit={props.onSubmit} noValidate>
                    <p className="register__heading">Вход</p>
                    <input className="register__input" value={email} onChange={handleEmailChange} name="email" type="email" placeholder="Email"/>
                    <input className="register__input" value={password} onChange={handlePasswordChange} name="password" type="password" placeholder="Пароль"/>
                    <button type="submit" className="register__saveButton">Войти</button>                
                </form>              
            </section>          
        </>
    );
  }

export default Login;