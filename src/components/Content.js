import React from 'react';

import avatar from '../images/avatar.jpg'

import Card from './Card';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Content(props) {
  
  const currentUser = React.useContext(CurrentUserContext);

  return (
      <div className="content">

        <section className="profile">
          <img className="profile__avatar" src={avatar} alt="Картинка профайла"/>
          <div className="profile__info">
            <div className="profile__info-line">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button onClick={props.onEditProfile} type="button" className="profile__editButton"></button>
            </div>
            <p className="profile__occupation">{currentUser.occupation}</p>
          </div>
          <button onClick={props.onAddPlace} type="button" className="profile__addButton"></button>
        </section>

        <section>
          <ul className="elements">
            {props.cards.map((card) => (
              <Card card={card} key={card.id} onCardClick={props.onCardClick} onCardDelete={props.onCardDelete} isLiked={false}/>
            ))}
          </ul>
        </section>

      </div>          
  );
}

export default Content;