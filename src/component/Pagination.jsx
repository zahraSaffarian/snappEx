import React, { useEffect, useContext, useState } from "react";
import BaseContext from "../store/base-context";
function Pagination() {
  const [index, setIndex] = useState(0);
  const baseCtx = useContext(BaseContext);
  useEffect(() => {
    baseCtx.updateFilter(index);
    console.log("---> " + index);
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
