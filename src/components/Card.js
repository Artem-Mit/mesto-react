function Card(props) {
  function handleClick() {
    props.onCardClick(props);
  }

  return (
    <article className="element">
      <img
        src={props.link}
        alt={props.name}
        className="element__img"
        onClick={handleClick}
      />
      <div className="element__text-area">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-section">
          <button type="button" className="element__like-btn"></button>
          <p className="element__like-counter">{props.likes.length}</p>
        </div>
      </div>
      <button type="button" className="element__delete-btn"></button>
    </article>
  );
}

export default Card;
