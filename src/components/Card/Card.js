import cardStyles from "./Card.module.scss";

console.log(cardStyles);

export function Card(props) {
  const onClickButton = () => {
    alert(props.title);
  };
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.favorite}>
        <img src="/img/heart-unliked2.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-colum">
          <spa>Price: </spa>
          <b>{props.price} </b>
        </div>
        <button className="button" onClick={() => onClickButton()}>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
