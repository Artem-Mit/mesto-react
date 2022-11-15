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
  const [selectedCard, setSelectedCard] = useState(false);

  function handleCardClick(props) {
    setSelectedCard(props);
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
    setSelectedCard(false);
  }

  useEffect(() => {
    const handleEsc = (evt) => {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

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
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        name="add"
        isOpen={isAddPlacePopupOpen}
        title="Новое место"
        onClose={closeAllPopups}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        title="Обновить аватар"
        onClose={closeAllPopups}
        children={
          <>
            <input
              type="url"
              className="popup__input"
              id="avatarLinkInput"
              name="avatarLinkInput"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__error avatarLinkInput-error"></span>
          </>
        }
      />
    </>
  );
}

export default App;
