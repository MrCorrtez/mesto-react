import React from 'react';

import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
      setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
      e.preventDefault();

      props.onAddPlace({
        name: name,
        link: link
      });
  }

  return (
      <PopupWithForm formSelector="type_new-item" title="Новое место" submitTitle="Создать" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
        <input className="popup__input popup__input_type_line-one" value={name} onChange={handleNameChange} name="name" type="text" placeholder="Название"  minLength="2" maxLength="30" required id="1"/>
        <span className="popup__input-error popup__input-error_place_line1 hidden"></span>
        <input className="popup__input popup__input_type_line-two" value={link} onChange={handleLinkChange} name="link" type="url" placeholder="Ссылка на картинку" required id="2"/>
        <span className="popup__input-error popup__input-error_place_line2 hidden"></span>
      </PopupWithForm> 
  );
}

export default AddPlacePopup;