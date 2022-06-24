import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <body className="root">   

      <Header />
      <Content />
      <Footer />       

      <section class="popup hidden">
        <form class="popup__container type_profile hidden" novalidate>
          <p class="popup__heading">Редактировать профиль</p>
          <input class="popup__input popup__input_type_line-one" name="name" type="text" placeholder="Заполните имя" minlength="2" maxlength="40" required id="1"/>
          <span class="popup__input-error popup__input-error_place_line1 hidden"></span>
          <input class="popup__input popup__input_type_line-two" name="occupation" type="text" placeholder="Заполните род занятий" minlength="2" maxlength="200" required id="2"/>
          <span class="popup__input-error popup__input-error_place_line2 hidden"></span>
          <button type="submit" class="popup__saveButton popup__saveButton_error" disabled>Сохранить</button>
          <button type="button" class="exitButton"></button>
        </form>

        <form class="popup__container type_new-item hidden" novalidate>
          <p class="popup__heading">Новое место</p>
          <input class="popup__input popup__input_type_line-one" name="name" type="text" placeholder="Название"  minlength="2" maxlength="30" required id="1"/>
          <span class="popup__input-error popup__input-error_place_line1 hidden"></span>
          <input class="popup__input popup__input_type_line-two" name="link" type="url" placeholder="Ссылка на картинку" required id="2"/>
          <span class="popup__input-error popup__input-error_place_line2 hidden"></span>
          <button type="submit" class="popup__saveButton popup__saveButton_error" disabled>Создать</button>
          <button type="button" class="exitButton"></button>
        </form>

        <form class="popup__big-card hidden">
          <img class="popup__image" src="" alt=""/>
          <button type="button" class="exitButton"></button>
          <p class="popup__caption"></p>
        </form>
      </section>

      <template id="card-template">
        <li class="elements__element" id="">
          <img class="elements__image" src="" alt=""/>
          <button type="button" class="elements__deleteButton"></button>
          <div class="elements__info">
            <p class="elements__name"></p>
            <button type="button" class="elements__like"></button>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
