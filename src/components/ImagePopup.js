function ImagePopup(props) {
  return (
    <div className={`popup img-popup ${props.card ? `popup_opened` : ""}`}>
      <div className="popup__container img-popup__figure">
        <img src={props.card.link} alt="" className="img-popup__img" />
        <p className="img-popup__caption">{props.card.name}</p>
        <button
          className="popup__close img-popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
