function PopupWithForm(props) {
  return (
    <div className={`popup ${props.name}-popup ${props.isOpen ? `popup_opened` : '' }`}>
      <form
        action="#"
        className="popup__container profile-popup__container popup__form"
        name={`${props.name}`}
        noValidate
      >
        <h2 className="popup__title">{props.title}</h2>
        <fieldset className="popup__fieldset">
        {props.children}
        </fieldset>
        <button
          className="popup__button popup__button_disabled"
          type="submit"
          disabled={true}
        >
          Сохранить
        </button>
        <button
          className="popup__close profile-popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
      </form>
    </div>
  );
}

export default PopupWithForm
