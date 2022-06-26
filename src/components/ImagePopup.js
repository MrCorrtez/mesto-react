function ImagePopup(props) {
    return (
        <section className={`popup ${(Object.keys(props.card).length === 0) ? 'hidden' : 'visible'}`}>
            <form className={`popup__big-card ${(Object.keys(props.card).length === 0) ? 'hidden' : 'visible'}`}>
                <img className="popup__image" src={props.card.link} alt={props.card.name}/>
                <button onClick={props.onClose} type="button" className="exitButton"></button>
                <p className="popup__caption">{props.card.name}</p>
            </form>      
        </section>
    );
  }

export default ImagePopup;