import React, { useEffect, useState } from "react";
import Item from "./Item";

function ProductList({ list }) {
  return (
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3">
        {list.length}
        {list.map((item) => (
          <div key={item.id}>
            {item.title}
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
