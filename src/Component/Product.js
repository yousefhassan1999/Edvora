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
    /** Get The Product List From Props. */
    const { productCatShow } = this.props;

    /** Loop On Product List And Add Cart To Box */
    const Cartitems = productCatShow.map((product) => {
      return (
          <Cart key={product.time} data={product}/>
      );
    });

    return (
      /** Start Products Showing */
      <div className="ProductShow">
        {/*Start Product Box Container. */}
        <div className="productsCont">
          <span>{this.props.category}</span>
          <hr></hr>
          {/*Start Product Category Box Container. */}
          <div className="showBox">
            <Carousel className="corssal" breakPoints={breakPoints}>
              {Cartitems}
            </Carousel>
          </div>
          {/*End Product Category Box Container. */}
        </div>
        {/*End Product Box Container. */}
      </div>
      /** End Products Showing */
    );
  }
}

export default Product;
