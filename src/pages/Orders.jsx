import { useContext, useEffect, useState } from "react";

import Card from "../components/Card/Card";
import axios from "axios";
import AppContext from "../context";

function Orders() {
  const { onAddToFavorites } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://63f4a3023f99f5855db3e9d1.mockapi.io/orders"
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert("Error when requesting an order");
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="content  p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>My orders</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(10)] : orders).map((item, index) => (
          <Card
            key={index}
            onClickFavorite={(obj) => onAddToFavorites(obj)}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
