export function Cart({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Cart{" "}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/x.svg"
            alt="Remove"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{
                  backgroundImage: `url(${obj.imgUrl})`,
                }}
                className="cartItemImg"
              ></div>
              <div className="mr-25 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}$</b>
              </div>
              <img className="removeBtn cu-p" src="/img/x.svg" alt="Remove" />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>538$</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>26.9$</b>
            </li>
          </ul>
          <button className="greenButton"> Place order</button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
