import "./FilterBar.css";

function FilterBar({ namefilter, list, onClick }) {

  let handleClick = (index) => {
    onClick(index);
  };
  if (namefilter === "Products") {
    let mapped = list.map((obj) => obj.product_name);
    mapped=mapped.concat( "Cancle");
    let filtered = mapped.filter(
      (product_name, index) => mapped.indexOf(product_name) === index
    );
    return (
      <div className="Dropdown">
        <div className="DropDown-select">
          <span className="select">{namefilter}</span>
          <div className="arrowcont">
            <span className="arrow"></span>
          </div>
        </div>
  
        <div className="dropdown-list">
          {filtered.map((index) => (
            <div
              key={index}
              className="dropdown-list-item"
              onClick={() => handleClick(index)}
            >
              {index}
            </div>
          ))}
        </div>
      </div>
    );
  } else if (namefilter === "State") {
    const mapped = list.map((obj) => obj.address.state);
    const filtered = mapped.filter((state, index) => mapped.indexOf(state) === index);
    return (
      <div className="Dropdown">
        <div className="DropDown-select">
          <span className="select">{namefilter}</span>
          <div className="arrowcont">
            <span className="arrow"></span>
          </div>
        </div>
  
        <div className="dropdown-list">
          {filtered.map((index) => (
            <div
              key={index}
              className="dropdown-list-item"
              onClick={() => handleClick(index)}
            >
              {index}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    const mapped = list.map((obj) => obj.address.city);
    const filtered = mapped.filter((city, index) => mapped.indexOf(city) === index);
    return (
      <div className="Dropdown">
        <div className="DropDown-select">
          <span className="select">{namefilter}</span>
          <div className="arrowcont">
            <span className="arrow"></span>
          </div>
        </div>
  
        <div className="dropdown-list">
          {filtered.map((index) => (
            <div
              key={index}
              className="dropdown-list-item"
              onClick={() => handleClick(index)}
            >
              {index}
            </div>
          ))}
        </div>
      </div>
    );
  }

  
  // }
}

export default FilterBar;
