import "./Navbar.css";
import FilterBar from "./FilterBar";

function Navbar({ products, onclick }) {
  const handleChangeName = (e) => {
    const largerThanSixty = products.filter((product) => {
      return product.product_name === e;
    });
    products = largerThanSixty;
    onclick(products);
  };
  const handleChangestate = (e) => {
    const largerThanSixty = products.filter((product) => {
      return product.address.state === e;
    });
    products = largerThanSixty;
    onclick(products);
  };
  const handleChangeCity = (e) => {
    const largerThanSixty = products.filter((product) => {
      return product.address.city === e;
    });
    products = largerThanSixty;
    onclick(products);
  };
  return (
    <div className="NavBar">
      <div className="Headercont">
        <h1>Filters</h1>
      </div>
      <hr></hr>
      <div className="FilterBody">
        <FilterBar
          namefilter="Products"
          list={products}
          onClick={handleChangeName}
        />
        <FilterBar
          namefilter="State"
          list={products}
          onClick={handleChangestate}
        />
        <FilterBar
          namefilter="City"
          list={products}
          onClick={handleChangeCity}
        />
      </div>
    </div>
  );
  // }
}

export default Navbar;
