import React, { useEffect, useState } from "react";

function FilterHeader({ fillter, clickSort }) {
  const showSortHandel = () => {
    clickSort();
  };
  return (
    <div className="filter-container">
      <div className="search col-6">
        <span className="icon-search fa-md" />
      </div>
      <div className="col-6 left-side">
        <button
          onClick={showSortHandel}
          className="btn icon-text-btn success-text"
        >
          <span className="ml-1 icon-hak">
            <span className="icon-arrow-up icon right" />
            <span className="icon-arrow-down icon left" />
          </span>
          ارزانترین
        </button>
        <button className="btn icon-text-btn">
          <span className="icon-sliders fa-md ml-1" />
          فیلتر
        </button>
      </div>

      {/* {fillter.map((item) => (
        // <Item key={item.id} item={item} />
        <div key={item.name}>{item.translation}</div>
      ))} */}
    </div>
  );
}

export default FilterHeader;
