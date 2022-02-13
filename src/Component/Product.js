import React, { Component } from "react";
import "./product.css";
import Cart from "./Cart";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
class Product extends Component {
  render() {
    return (
      <div className="ProductShow">
        <div className="productsCont">
          <span>Product Name</span>
          <hr></hr>
          <div className="showBox">
            <Carousel className="corssal" breakPoints={breakPoints}>
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
