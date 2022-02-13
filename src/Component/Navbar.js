import React, { Component } from "react";
import "./Navbar.css";
import FilterBar from "./FilterBar";
class Navbar extends Component {
    render() {
      return (
        <div className="NavBar">
          <div className="Headercont">
            <h1>
              Filters
            </h1>
          </div>
          <hr></hr>
          <div className="FilterBody"> 
            <FilterBar />
          </div>
        </div>
      );
    }
  }
  
  export default Navbar;
