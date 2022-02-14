import "./FilterBar.css";

function FilterBar({ namefilter, list, onClick }) {
  /** Handle Filter Click. */
  let handleClick = (index) => {
    onClick(index);
  };
  /** Needed Filter Variable. */
  let mapped;
  let filtered;

  /** Check What Type Of Options Is Reqauired. */
  if (namefilter === "Products") {
    mapped = list.map((obj) => obj.product_name);
    filtered = mapped.filter(
      (product_name, index) => mapped.indexOf(product_name) === index
    );
  } else if (namefilter === "State") {
    mapped = list.map((obj) => obj.address.state);
    filtered = mapped.filter((state, index) => mapped.indexOf(state) === index);
  } else {
    mapped = list.map((obj) => obj.address.city);
    filtered = mapped.filter((city, index) => mapped.indexOf(city) === index);
  }

  /** Add Cancle Option. */
  filtered = filtered.concat("Cancle");

  return (
    /** Start Drop Down Menu */
    <div className="Dropdown">
      <div className="DropDown-select">
        <span className="select">{namefilter}</span>
        <div className="arrowcont">
          <span className="arrow"></span>
        </div>
      </div>
       {/* Mapping to show Filter Options.  */}
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
    /** End Drop Down Menu */
  );
  // }
}

export default FilterBar;
