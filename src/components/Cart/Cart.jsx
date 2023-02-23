export function Cart({ onClose, onRemove, items = [] }) {
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

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
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
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn cu-p"
                    src="/img/x.svg"
                    alt="Remove"
                  />
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
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.png"
              alt="emptyCart"
            />
            <h2>Empty cart</h2>
            <p className="opacity-6">
              Add at least one pair of sneakers to order
            </p>
            <button onClick={onClose} className="greenButton">
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Cart;
