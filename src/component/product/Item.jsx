import React from "react";

function Item({ item }) {
  return (
    <div className="product-wrapper">
      <div className="product-container">
        <div className="img-container">
          <img src={item.images[0].imageSrc} alt={item.title} />
        </div>

        <div className="line">{item.title}</div>
        <div className="line">
          <b>{item.price}</b>
          تومان
        </div>
        <div className="center-container">
          <button className="default btn-outline-default">افزودن</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
