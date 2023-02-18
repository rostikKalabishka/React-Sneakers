import { useState } from "react";
import cardStyles from "./Card.module.scss";

console.log(cardStyles);

export function Card({ title, price, imgUrl, onClickFavorite, onClickPlus }) {
  const [isAdded, setIsAdded] = useState(false);
  const handleClickPlus = () => {
    onClickPlus({ title, price, imgUrl });
    setIsAdded(!isAdded);
  };
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.favorite} onClick={onClickFavorite}>
        <img
          src="/img/heart-unliked2.svg"
          alt="Unliked"
          // onClick={props.onClickFavorite}
        />
      </div>
      <img width={133} height={112} src={imgUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-colum">
          <spa>Price: </spa>
          <b> {price}$ </b>
        </div>

        <img
          className={cardStyles.plus}
          onClick={handleClickPlus}
          src={isAdded ? "/img/like.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}
export default Card;
