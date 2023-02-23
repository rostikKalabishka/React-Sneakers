import Card from "../components/Card/Card";
function Home({
  items,
  cartItems,
  searchValue,
  onChangeSearchInput,
  onAddToFavorites,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(10)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onClickFavorite={(obj) => onAddToFavorites(obj)}
        onClickPlus={(obj) => onAddToCart(obj)}
        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content  p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue ? `Search request: "${searchValue}"` : "All Sneakers"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
