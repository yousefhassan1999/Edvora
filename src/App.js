import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
class App extends Component {
  /* Main State Variable.*/
  state = {
    prev_products: [], // History For Cancle Filtering.
    products: [], // The Main List Product.
    groupByCategory: {}, // Group Products Into Categories
  };

  /** Get Products From Url*/
  componentDidMount = () => {
    /** Axios get Products Reqeust. */
    axios.get("https://assessment-edvora.herokuapp.com/").then((res) => {
      /** Group List Function */
      const groupby = (key, arr) =>
        arr.reduce(
          (cache, product) => ({
            ...cache,
            [product[key]]:
              product[key] in cache
                ? cache[product[key]].concat(product)
                : [product],
          }),
          {}
        );
        /** Set State */
      this.setState({
        prev_products: res.data,
        products: res.data,
        groupByCategory: groupby("product_name", res.data),
      });
    });
  };
  /** Handling Filter Operation */
  navbarhandler = (e) => {
    /** In Case Cancle Operation.  */
    if (e.length === 0) {
      e = this.state.prev_products;
    }
    /** Set The Grouping List and The Product List. */
    const groupbyFilter = (key, arr) =>
      arr.reduce(
        (cache, product) => ({
          ...cache,
          [product[key]]:
            product[key] in cache
              ? cache[product[key]].concat(product)
              : [product],
        }),
        {}
      );
    this.setState({
      products: e,
      groupByCategory: groupbyFilter("product_name", e),
    });
  };
  render() {
    const { groupByCategory } = this.state;
    const theProduct = Object.keys(groupByCategory).map((cat) => {
      return (
        <div className="BodyContainer" key={cat}>
          <Product category={cat} productCatShow={groupByCategory[cat]} />
        </div>
      );
    });
    return (
      /*Start app*/
      <div className="App">
        {/* Start App Container */}
        <div className="Content">
          {/* Start NavBar */}
          <div className="NavBarContainer">
            <Navbar
              products={this.state.products}
              onclick={this.navbarhandler}
            />
          </div>
          {/* End NavBar */}
          {/* Start Main Body Container */}
          <div className="cont">
            <div className="headCont">
              <span>Edvora</span>
            </div>
            <div className="productstitle">
              <span>Products</span>
            </div>
            <div className="product_scroll">{theProduct}</div>
          </div>
          {/* End Main Body Container */}
        </div>
        {/* End App Container */}
      </div>
      /*End app*/
    );
  }
}

export default App;
