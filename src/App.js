import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

const arrayCard = [
  {
    title: "Men's Shoes Nike Blazer Mid Suede",
    price: "299$",
    imgUrl: "/img/sneakers/Nike_Blazer_Mid_Suede.jpg",
  },
  {
    title: "Men's Shoes Nike Air Max 270",
    price: "239$",
    imgUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Men's Shoes  Nike Blazer Mid Suede",
    price: "339$",
    imgUrl: "/img/sneakers/2.png",
  },
  {
    title: "Sneakers Puma X Aka Boku Future Rider",
    price: "249$",
    imgUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Men's Shoes Under Armour Curry 8",
    price: "299$",
    imgUrl: "/img/sneakers/4.jpg",
  },
  {
    title: "Men's Shoes Jordan Air Jordan 11",
    price: "499$",
    imgUrl: "/img/sneakers/5.jpg",
  },
  {
    title: "Men's Shoes Nike LeBron XVIII",
    price: "539$",
    imgUrl: "/img/sneakers/6.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Cart />

      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex ">
          {arrayCard.map((obj) => (
            <Card title={obj.title} price={obj.price} imgUrl={obj.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
