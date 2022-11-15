import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });

  function handleCardClick(props) {
    setSelectedCard({ name: props.name, link: props.link });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  const isOpen =
    isEditAvatarPopupOpen ||
    isEditProfilePopupOpen ||
    isAddPlacePopupOpen ||
    selectedCard.link;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  return (
    <>
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onImgPopup={handleCardClick}
        />
        <Footer />
      </div>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        name="profile"
        isOpen={isEditProfilePopupOpen}
        title="Редактировать профиль"
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          type="text"
          className="popup__input"
          id="name-input"
          name="person"
          placeholder="Имя"
          pattern=".{2,40}"
          required
        />
        <span className="popup__error name-input-error"></span>
        <input
          type="text"
          className="popup__input"
          id="job-input"
          name="job"
          placeholder="О себе"
          pattern=".{2,200}"
          required
        />
        <span className="popup__error job-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add"
        isOpen={isAddPlacePopupOpen}
        title="Новое место"
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          type="text"
          className="popup__input"
          id="img-input"
          name="name"
          placeholder="Название"
          pattern=".{2,30}"
          required
        />
        <span className="popup__error img-input-error"></span>
        <input
          type="url"
          className="popup__input"
          id="source-input"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error source-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        title="Обновить аватар"
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          type="url"
          className="popup__input"
          id="avatarLinkInput"
          name="avatarLinkInput"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error avatarLinkInput-error"></span>
      </PopupWithForm>
    </>
  );
}

export default App;
