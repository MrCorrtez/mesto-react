import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';

import cardsApi from '../utils/api';

function Main(props) {

  const [isEditProfilePopupOpen, setEditProfileVisibility] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceVisibility] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCardsList] = React.useState([]);

  const isOpen = isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard.link;

  React.useEffect(() => {
    cardsApi.getCards()
      .then(items => {
        setCardsList(items);
      })
      .catch(err => handleApiError(err))
  },[]); 


  React.useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if(isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen])

  function handleEditProfileClick() {

    setEditProfileVisibility(true);    

  }

  function handleAddPlaceClick() {

    setAddPlaceVisibility(true);    
    
  }

  function handleAddPlace(card) {
    cardsApi.addCard('name=' + encodeURIComponent(card.name) + '&link=' + encodeURIComponent(card.link))
      .then(id => {
        const newCard = {id: Number(id), 
                        name: card.name,
                        link: card.link};
        setCardsList([newCard, ...cards]);
        
      })
      .catch(err => handleApiError(err))
    closeAllPopups();
  }

  function handleCardDelete(card) {
    cardsApi.deleteCard(card.id)
      .then(() => {
        setCardsList(cards.filter(c => c.id !== card.id));
      })
      .catch(err => handleApiError(err))
  }

  function handleApiError(err) {
    setSelectedCard({link: "https://xn--443-5cd3cgu2f.xn--p1ai/wp-content/uploads/error.jpg", name: err.message});    
  }
  
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(user) {
    props.onUpdateUser(user);
    closeAllPopups();
  }  

  function closeAllPopups() {
    setEditProfileVisibility(false);
    setAddPlaceVisibility(false);
    setSelectedCard({});
  }

  return (
      <>
          <Header currentMode='main' />
          <Content cards={cards} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onApiError={handleApiError} onCardClick={handleCardClick} onCardDelete={handleCardDelete}/>
          <Footer />       

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/> 

          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace}/> 
          
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>          
      </>
  );
}

export default Main;