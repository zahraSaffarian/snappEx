import React, { useEffect, useState } from "react";
import Item from "./Item";

function ProductList({ list }) {
  return (
    <div className="row">
      {list.map((item) => (
        <div key={item.id} className="col-6  col-md-4 col-lg-3">
          <Item item={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
