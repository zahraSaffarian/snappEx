import React, { useEffect, useState } from "react";

function FilterHeader({ fillter }) {
  return (
    <div className="filter-container">
      <div className="search col-6">
        <span className="icon-search fa-md" />
      </div>
      <div className="col-6 left-side">
        <b className="click success-text">
          <span className="ml-1 icon-hak">
            <span className="icon-arrow-up icon right" />
            <span className="icon-arrow-down icon left" />
          </span>
          ارزانترین
        </b>
        <b className="click">
          <span className="icon-sliders fa-md ml-1" />
          فیلتر
        </b>
      </div>

      {/* {fillter.map((item) => (
        // <Item key={item.id} item={item} />
        <div key={item.name}>{item.translation}</div>
      ))} */}
    </div>
  );
}

export default FilterHeader;
