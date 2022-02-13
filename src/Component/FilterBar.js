import React, { Component } from "react";
import "./FilterBar.css";

class FilterBar extends Component {
  state = {
    name: "test",
    prod: ["test1", "test2"],
  };

  render() {
    return (
      <div className="Dropdown">
        <div className="DropDown-select">
          <span className="select">{this.state.name}</span>
          <div className="arrowcont">
            <span className="arrow"></span>
          </div>
        </div>
        <div className="dropdown-list">
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
            <div className="dropdown-list-item">pepst</div>
        </div>
      </div>
    );
  }
}

export default FilterBar;
