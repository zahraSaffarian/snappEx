import React, { useEffect, useState } from "react";
import ProductList from "../component/product/productList";
import { getListService } from "../service/apiService";

function Main() {
  const [list, setList] = useState([]);
  const [categories, setCategoriest] = useState([]);
  const getList = async () => {
    const result = await getListService();
    console.log("hi");
    console.log(result.data);
    setList(result.data.product_variations);
    setCategoriest(result.data.categories);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      categories...
      <div>
        {categories.length}
        {categories.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
      List...
      <ProductList list={list} />
    </div>
  );
}

export default Main;
