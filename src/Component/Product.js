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
    const { productCatShow } = this.props;
    console.log(productCatShow);
    const Cartitems = productCatShow.map((product) => {
      return (
          <Cart key={product.time} data={product}/>
      );
    });
    return (
      <div className="ProductShow">
        <div className="productsCont">
          <span>Product Name</span>
          <hr></hr>
          <div className="showBox">
            <Carousel className="corssal" breakPoints={breakPoints}>
              {Cartitems}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
