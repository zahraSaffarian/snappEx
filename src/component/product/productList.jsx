import React, { useEffect, useState } from "react";
import Item from "./Item";

function ProductList({ list }) {
  return (
    <div>
      <div>
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
