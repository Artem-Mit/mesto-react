import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userId, setUserId] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getProfileInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setUserId(userData._id);
      })
      .catch((err) => console.log(err.message));
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={userAvatar}
            alt="Аватар профиля"
            className="profile__avatar"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__profession">{userDescription}</p>
          <button
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="photos" aria-label="Фотографии мест">
        {cards.map(({ _id, ...card }) => (
          <Card
            key={_id}
            {...card}
            myId={userId}
            onCardClick={props.onImgPopup}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
