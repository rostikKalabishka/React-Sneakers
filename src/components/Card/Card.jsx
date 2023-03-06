import { useContext, useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

import cardStyles from "./Card.module.scss";

export function Card({
  id,
  title,
  price,
  imgUrl,
  onClickFavorite,
  onClickPlus,
  favorited = false,
  added,
  loading = false,
}) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  //bad fix
  useEffect(() => {
    setIsAdded(added);
  }, [added]);
  const handleClickFavorite = () => {
    console.log(id);
    onClickFavorite({ id, title, price, imgUrl });
    setIsFavorite(!isFavorite);
  };
  const handleClickPlus = () => {
    onClickPlus({ id, title, price, imgUrl });
    setIsAdded(!isAdded);
  };
  console.log(isAdded);
  return (
    <div className={cardStyles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={160}
          height={265}
          viewBox="0 0 160 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" width="160" height="160" />
          <rect x="0" y="167" rx="5" width="160" height="15" />
          <rect x="0" y="187" rx="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" width="35" height="35" />
        </ContentLoader>
      ) : (
        <>
          <div className={cardStyles.favorite}>
            <img
              onClick={() => handleClickFavorite()}
              src={isFavorite ? "/img/heart.svg" : "/img/heart-unliked2.svg"}
              alt="Unliked"
            />
          </div>
          <img width="100%" height={135} src={imgUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price: </span>
              <b> {price}$ </b>
            </div>

            {onClickPlus && (
              <img
                className={cardStyles.plus}
                onClick={handleClickPlus}
                src={isAdded ? "/img/like.svg" : "/img/btn-plus.svg"}
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
