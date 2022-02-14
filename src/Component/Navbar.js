import "./Navbar.css";
import FilterBar from "./FilterBar";

function Navbar({ products, onclick }) {  
  /** all functions filter the product list then return it to the parent. */
  /** Handle Filter By Products */
  const handleChangeName = (e) => {
    const largerThanSixty = products.filter((product) => { 
      return product.product_name === e;
    });
    onclick(largerThanSixty);
  };
  /** Handle Filter By State */
  const handleChangestate = (e) => {
    const largerThanSixty = products.filter((product) => {
      return product.address.state === e;
    });
    onclick(largerThanSixty);
  };
  /** Handle Filter By City */
  const handleChangeCity = (e) => {
    const largerThanSixty = products.filter((product) => {
      return product.address.city === e;
    });
    onclick(largerThanSixty);
  };
  return (
    /** Start NavBar  */
    <div className="NavBar">
      {/* Start NavBar Header */}
      <div className="Headercont">
        <h1>Filters</h1>
      </div>
      <hr></hr>
      {/* End NavBar Header */}
      {/* Start NavBar Body */}
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
      {/* End NavBar Body */}
    </div>
    /** End NavBar  */
  );
  // }
}

export default Navbar;
