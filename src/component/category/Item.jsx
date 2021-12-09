import React from "react";

function Item({ item }) {
  return (
    <div className="item-container">
      <div>{item.title}</div>

      <div className="img-container">
        <img src={item.image} alt={item.title} />
      </div>
    </div>
  );
}

export default Item;
