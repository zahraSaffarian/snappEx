import React, { useEffect, useState } from "react";

function Pagination({ onChange }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("---> " + index);
    onChange(index);
  }, [index]);
  return (
    <div className="pagination-container center-container">
      <button
        onClick={() => {
          setIndex((prev) => --prev);
        }}
        className="icon-chevron-right btn"
        title="فبلی"
        disabled={index < 1}
      ></button>
      <button className="btn">{index + 1}</button>
      <button
        onClick={() => {
          setIndex((prev) => ++prev);
        }}
        className="icon-chevron-left btn"
        title="بعدی"
      ></button>
    </div>
  );
}

export default Pagination;
