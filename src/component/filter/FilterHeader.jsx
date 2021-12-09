import React from "react";

function FilterHeader({ fillter }) {
  return (
    <div className="filter-container">
      <div>
        <span className="icon-sliders" />
        فیلتر
      </div>
      <div>
        <span className="icon-arrow-up" />
        <span className="icon-arrow-down" />
        ارزانترین
      </div>
      {/* {fillter.map((item) => (
        // <Item key={item.id} item={item} />
        <div key={item.name}>{item.translation}</div>
      ))} */}
    </div>
  );
}

export default FilterHeader;
