import React from "react";

function Item({ item }) {
  return (
    <div>
      <img src={item.images[0].imageSrc} alt={item.title} />
      <div>{item.title}</div>
      <div>
        <b>{item.price}</b>
        تومان
      </div>
    </div>
  );
}

export default Item;
