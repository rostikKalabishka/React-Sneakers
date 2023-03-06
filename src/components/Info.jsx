import React, { useContext } from "react";
import AppContext from "../context";

const Info = ({ title, img, description }) => {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={120} src={img} alt="emptyCart" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        Go back
      </button>
    </div>
  );
};

export default Info;
