export function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked2.svg" alt="Unliked" />
      </div>
      <img
        width={133}
        height={112}
        src="/img/sneakers/Nike_Blazer_Mid_Suede.jpg"
        alt="Sneakers"
      />
      <h5>Men's Shoes Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-colum">
          <spa>Price:</spa>
          <b>299$</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}
export default Card;
