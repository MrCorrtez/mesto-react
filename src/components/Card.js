import React from 'react';

function Card(props) {

    const [isLiked, setLike] = React.useState(props.isLiked);

    function handleClick() {
        props.onCardClick(props.card);
    }
    
    function handleLikeClick() {
        setLike(!isLiked);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return (
        <li className="elements__element" id={props.card.id}>
            <img onClick={handleClick} className="elements__image" src={props.card.link} alt={props.card.name}/>
            <button type="button" onClick={handleDeleteClick} className="elements__deleteButton"></button>
            <div className="elements__info">
                <p className="elements__name">{props.card.name}</p>
                <button type="button" onClick={handleLikeClick} className={`elements__like${isLiked ? ' elements__like_active' : ''}`}></button>
            </div>
        </li>
    );
  }

export default Card;