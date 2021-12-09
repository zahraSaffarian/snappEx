import React from "react";
import Item from "./Item";

function CategoryList({ categories }) {
  return (
    <div className="category-container">
      {categories.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CategoryList;
