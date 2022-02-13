import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
class App extends Component {
  state = {
    products: [],
    groupByCategory: {},
  };

  componentDidMount = () => {
    axios.get("https://assessment-edvora.herokuapp.com/").then((res) => {
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
      this.setState({
        products: res.data,
        groupByCategory: groupby("product_name", res.data),
      });
      // console.log(this.state.products);
      // console.log(this.state.groupByCategory);
    });
  };

  render() {
    const { groupByCategory } = this.state;
    const theProduct = Object.keys(groupByCategory).map((cat) => {
      return (
        <div className="BodyContainer" key={cat}>
          <Product productCatShow={groupByCategory[cat]} />
        </div>
      );
    });
    return (
      <div className="App">
        {/* <div className="container"> */}
        <div className="Content">
          <div className="NavBarContainer">
            <Navbar />
          </div>
          <div className="cont">
            <div className="headCont">
              <span>Edvora</span>
            </div>
            <div className="productstitle">
              <span>Products</span>
            </div>
            <div className="product_scroll">{theProduct}</div>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default App;
