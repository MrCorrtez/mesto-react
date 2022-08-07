import React from 'react';

import PopupWithForm from './PopupWithForm';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState(currentUser.name);
    const [occupation, setOccupation] = React.useState(currentUser.occupation);

    React.useEffect(() => {
        setName(currentUser.name);
        setOccupation(currentUser.occupation);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleOccupationChange(e) {
        setOccupation(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
          name: name,
          occupation: occupation
        });
    }

    return (
        <PopupWithForm formSelector="type_profile" title="Редактировать профиль" submitTitle="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input className="popup__input popup__input_type_line-one" value={name} onChange={handleNameChange} name="name" type="text" placeholder="Заполните имя" minLength="2" maxLength="40" required id="1"/>
            <span className="popup__input-error popup__input-error_place_line1 hidden"></span>
            <input className="popup__input popup__input_type_line-two" value={occupation} onChange={handleOccupationChange} name="occupation" type="text" placeholder="Заполните род занятий" minLength="2" maxLength="200" required id="2"/>
            <span className="popup__input-error popup__input-error_place_line2 hidden"></span>
        </PopupWithForm> 
    );
  }

export default EditProfilePopup;