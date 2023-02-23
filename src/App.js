import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get(
        "https://63f1076a5b7cf4107e2bb756.mockapi.io/cart"
      );

      const favoritesResponse = await axios.get(
        "https://63f4a3023f99f5855db3e9d1.mockapi.io/favorites"
      );
      const itemsResponse = await axios.get(
        "https://63f1076a5b7cf4107e2bb756.mockapi.io/items"
      );
      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://63f1076a5b7cf4107e2bb756.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://63f1076a5b7cf4107e2bb756.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onAddToFavorites = async (obj) => {
    console.log(obj);
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://63f4a3023f99f5855db3e9d1.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://63f4a3023f99f5855db3e9d1.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Couldn't add to the favorites");
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63f1076a5b7cf4107e2bb756.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));

    console.log(id);
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Cart
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorites={onAddToFavorites} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
