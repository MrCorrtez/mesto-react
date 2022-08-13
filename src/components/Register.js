import React from 'react';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import Auth from '../utils/auth';

import Header from './Header';

import ImagePopup from './ImagePopup';

function Register() {

    let navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [popupImage, setPopupImage] = React.useState({});

    const [isSuccess, setIsSuccess] = React.useState(false);

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleRegistration(e) {

        e.preventDefault();

        const data = {"password": password,
                      "email": email};
                      
        Auth.register(data)
            .then(res => {
                setPopupImage({link: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612674760_149-p-kitaiskoe-prilozhenie-zelenii-krug-na-cher-239.jpg", name: ''});                                
                setIsSuccess(true);
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
        if (isSuccess) {navigate('/sign-in');}        
    }

    return (
        <>
            <Header currentMode='register'/>
            <section className={"register"}>
                <form className= {"register__form"} onSubmit={handleRegistration} noValidate>
                    <p className="register__heading">Регистрация</p>
                    <input className="register__input" value={email} onChange={handleEmailChange} name="email" type="email" placeholder="Email"/>
                    <input className="register__input" value={password} onChange={handlePasswordChange} name="password" type="password" placeholder="Пароль"/>
                    <button type="submit" className="register__saveButton">Зарегистрироваться</button>                
                    <Link to="/sign-in" className="register__login-link">Уже зарегистрированы? Войти</Link>                 
                </form>              
            </section>
            <ImagePopup card={popupImage} onClose={handleClosePopup}/>
        </>
    );
  }

export default Register;