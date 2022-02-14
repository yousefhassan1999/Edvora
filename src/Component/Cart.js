import React, { Component } from "react";
import "./Cart.css";

class Cart extends Component {
  render() {
    /** Get Product Item From Props . */
    const {data}=this.props;
    return (
      /** Start Cart Product */
      <div className="CartBox">
        <div className="product">
          <div className="imgcontainer">
            <img
              src={data.image}
              alt=""
            />
          </div>
          <div className="productname"><p> {data.product_name}</p> </div>
          <div className="productbrand"><p> {data.brand_name} </p></div>
          <div className="productprice"><p> $ {data.price}</p></div>
          <div className="productlocation"><p>  {data.address.city}</p></div>
          <div className="productdate"><p> Date:{data.date}</p></div>
          <div className="productdescription"><p> {data.discription} </p></div>
        </div>
      </div>
       /** End Cart Product */
    );
  }
}

export default Cart;
