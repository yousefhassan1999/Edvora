import React, { Component } from "react";
import "./Cart.css";

class Cart extends Component {
  render() {
    return (
      <div className="CartBox">
        <div className="product">
          <div className="imgcontainer">
            <img
              src="https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png"
              alt=""
            />
          </div>
          <div className="productname">product Name</div>
          <div className="productbrand">product brand</div>
          <div className="productprice">$ product price</div>
          <div className="productlocation"> product location</div>
          <div className="productdate"><p> Date:2021-08-10T19:35:16.069Z</p></div>
          <div className="productdescription"><p> product description </p></div>
        </div>
      </div>
    );
  }
}

export default Cart;
