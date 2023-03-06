import axios from "axios";
import { useContext, useState } from "react";

import { useCart } from "../../hooks/useCart";
import Info from "../Info";

import styles from "./Cart.module.scss";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function Cart({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://63f4a3023f99f5855db3e9d1.mockapi.io/orders",
        { items: cartItems }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];

        await axios.delete(
          "https://63f1076a5b7cf4107e2bb756.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Failed to create an order");
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
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
          <div className="d-flex flex-column flex">
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
                  <b>{totalPrice}$</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>{Math.round(totalPrice * 0.05)}$</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                {" "}
                Place order
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Order placed!" : "Empty cart"}
            description={
              isOrderComplete
                ? `Your order # ${orderId} will soon be transferred to courier delivery`
                : "Add at least one pair of sneakers to order"
            }
            img={isOrderComplete ? "/img/blank.jpg" : "/img/empty-cart.png"}
          />
        )}
      </div>
    </div>
  );
}
export default Cart;
