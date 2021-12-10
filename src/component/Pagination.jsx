import React, { useEffect, useState } from "react";

function Pagination({ onChange }) {
  const [index, setIndex] = useState(0);
  const handelClick = (val) => {
    setIndex((prev) => prev + val);
  };
  useEffect(() => {
    onChange(index);
  }, [index]);
  return (
    <div className="pagination-container center-container">
      <button
        onClick={() => {
          handelClick(-1);
        }}
        className="icon-chevron-right fa-lg btn"
        title="فبلی"
        disabled={index < 1}
      ></button>
      <button className="btn">{index + 1}</button>
      <button
        onClick={() => {
          handelClick(1);
        }}
        className="icon-chevron-left fa-lg btn"
        title="بعدی"
      ></button>
    </div>
  );
}

export default Pagination;
