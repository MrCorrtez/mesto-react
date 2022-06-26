function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    } 

    return (
        <li className="elements__element" id={props.card.id}>
            <img onClick={handleClick} className="elements__image" src={props.card.link} alt={props.card.name}/>
            <button type="button" className="elements__deleteButton"></button>
            <div className="elements__info">
                <p className="elements__name">{props.card.name}</p>
                <button type="button" className="elements__like"></button>
            </div>
        </li>
    );
  }

export default Card;