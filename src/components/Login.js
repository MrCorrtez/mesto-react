import React from 'react';

import Header from './Header';

import { useNavigate } from 'react-router-dom';

import Auth from '../utils/auth';

import ImagePopup from './ImagePopup';

function Login(props) {

    let navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setpassword] = React.useState('');

    const [popupImage, setPopupImage] = React.useState({});

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setpassword(e.target.value);
    }

    function handleLogin(e) 
    {
        e.preventDefault();

        const data = {"password": password,
                      "email": email};
                      
        Auth.authorize(data)
            .then(jwt => {
                localStorage.setItem('mesto-jwt', jwt);
                props.setLoggedIn(true);
                navigate('/');
            })
            .catch(err => {
                err.json().then(
                        err => setPopupImage({link: "https://avatars.mds.yandex.net/get-zen_doc/1578609/pub_61e69ad9209190023a022677_61e6a1220141a70c4ac38157/scale_1200", name: err.message})                        
                    )
            }                    
            )
    }

    function handleClosePopup() {
        setPopupImage({});        
    }

    return (
        <>
            <Header currentMode='login'/>
            <section className={"register"}>
                <form className= {"register__form"} onSubmit={handleLogin} noValidate>
                    <p className="register__heading">Вход</p>
                    <input className="register__input" value={email} onChange={handleEmailChange} name="email" type="email" placeholder="Email"/>
                    <input className="register__input" value={password} onChange={handlePasswordChange} name="password" type="password" placeholder="Пароль"/>
                    <button type="submit" className="register__saveButton">Войти</button>                
                </form>              
            </section>

            <ImagePopup card={popupImage} onClose={handleClosePopup}/>          
        </>
    );
  }

export default Login;