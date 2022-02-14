import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
class App extends Component {
  state = {
    prev_products:[],
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
        prev_products:res.data,
        products: res.data,
        groupByCategory: groupby("product_name", res.data),
      });
    });
  };
  navbarhandler = (e) => {
    if(e.length===0){
      e=this.state.prev_products;
    }
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
      products:e,
      groupByCategory: groupbyFilter("product_name", e),
    })
  }
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
        <div className="Content">
          <div className="NavBarContainer">
            <Navbar products={this.state.products} onclick={this.navbarhandler}/>
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
      </div>
      /*End app*/
    );
  }
}

export default App;
