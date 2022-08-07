function PopupWithForm(props) {

    return (
        <section className={`popup ${props.isOpen ? 'visible' : 'hidden'}`}>
            <form className={`popup__container ${props.formSelector} ${props.isOpen ? 'visible' : 'hidden'}`} onSubmit={props.onSubmit} noValidate>
                <p className="popup__heading">{props.title}</p>
                {props.children}
                <button type="submit" className="popup__saveButton popup__saveButton_error">{props.submitTitle}</button>
                <button onClick={props.onClose} type="button" className="exitButton"></button>
            </form>              
        </section>
    );
  }

export default PopupWithForm;