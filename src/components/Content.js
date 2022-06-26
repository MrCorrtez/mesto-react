import React from 'react';

import avatar from '../images/avatar.jpg'

import cardsApi from '../utils/api';

import Card from './Card';

function Content(props) {
  
  const [cards, setCardsList] = React.useState([]);

  React.useEffect(() => {
    cardsApi.getCards()
      .then(items => {
        setCardsList(items);
      })
      .catch(props.onApiError)
  });

  return (
      <div className="content">

        <section className="profile">
          <img className="profile__avatar" src={avatar} alt="Картинка профайла"/>
          <div className="profile__info">
            <div className="profile__info-line">
              <h1 className="profile__name"></h1>
              <button onClick={props.onEditProfile} type="button" className="profile__editButton"></button>
            </div>
            <p className="profile__occupation"></p>
          </div>
          <button onClick={props.onAddPlace} type="button" className="profile__addButton"></button>
        </section>

        <section>
          <ul className="elements">
            {cards.map((card) => (
              <Card card={card} key={card.id} onCardClick={props.onCardClick}/>
            ))}
          </ul>
        </section>

      </div>          
  );
}

export default Content;