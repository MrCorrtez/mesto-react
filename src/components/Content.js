import avatar from '../images/avatar.jpg'

function Content() {
    return (
        <div className="content">

          <section className="profile">
            <img className="profile__avatar" src={avatar} alt="Картинка профайла"/>
            <div className="profile__info">
              <div className="profile__info-line">
                <h1 className="profile__name"></h1>
                <button type="button" className="profile__editButton"></button>
              </div>
              <p className="profile__occupation"></p>
            </div>
            <button type="button" className="profile__addButton"></button>
          </section>

          <section>
            <ul className="elements">
            </ul>
          </section>

        </div>          
    );
  }

export default Content;