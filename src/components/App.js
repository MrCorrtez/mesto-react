import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfileVisibility] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaseVisibility] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  
  function handleEditProfileClick() {

    setEditProfileVisibility(true);    

  }

  function handleAddPlaceClick() {

    setAddPlaseVisibility(true);    
    
  }

  function closeAllPopups() {
    setEditProfileVisibility(false);
    setAddPlaseVisibility(false);
    setSelectedCard({});
  }

  function handleApiError(err) {
    setSelectedCard({link: "https://xn--443-5cd3cgu2f.xn--p1ai/wp-content/uploads/error.jpg", name: err.message});    
  }
  
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>  
      <Header />
      <Content onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onApiError={handleApiError} onCardClick={handleCardClick}/>
      <Footer />       

      <PopupWithForm formSelector="type_profile" title="Редактировать профиль" submitTitle="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__input_type_line-one" name="name" type="text" placeholder="Заполните имя" minLength="2" maxLength="40" required id="1"/>
        <span className="popup__input-error popup__input-error_place_line1 hidden"></span>
        <input className="popup__input popup__input_type_line-two" name="occupation" type="text" placeholder="Заполните род занятий" minLength="2" maxLength="200" required id="2"/>
        <span className="popup__input-error popup__input-error_place_line2 hidden"></span>
      </PopupWithForm> 

      <PopupWithForm formSelector="type_new-item" title="Новое место" submitTitle="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input className="popup__input popup__input_type_line-one" name="name" type="text" placeholder="Название"  minLength="2" maxLength="30" required id="1"/>
        <span className="popup__input-error popup__input-error_place_line1 hidden"></span>
        <input className="popup__input popup__input_type_line-two" name="link" type="url" placeholder="Ссылка на картинку" required id="2"/>
        <span className="popup__input-error popup__input-error_place_line2 hidden"></span>
      </PopupWithForm> 

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>                  
    </>
  );
}

export default App;
