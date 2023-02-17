export function Cart() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Cart <img className="removeBtn cu-p" src="/img/x.svg" alt="Remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage: "url(/img/sneakers/Nike_Blazer_Mid_Suede.jpg)",
              }}
              className="cartItemImg"
            ></div>
            <div className="mr-25 flex">
              <p className="mb-5">Men's Shoes Nike Blazer Mid Suede</p>
              <b>299$</b>
            </div>
            <img className="removeBtn cu-p" src="/img/x.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage: "url(/img/sneakers/1.jpg)",
              }}
              className="cartItemImg"
            ></div>
            <div className="mr-25 flex">
              <p className="mb-5">Men's Shoes Nike Air Max 270</p>
              <b>239$</b>
            </div>
            <img className="removeBtn cu-p" src="/img/x.svg" alt="Remove" />
          </div>
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
