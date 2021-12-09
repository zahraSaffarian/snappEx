import React, { useEffect, useState } from "react";
import { getListService } from "../service/apiService";
import Loading from "../component/Loading";
import ProductList from "../component/product/productList";
import CategoryList from "../component/category/CategoryList";
import Header from "../component/layout/Header";
import FilterHeader from "../component/filter/FilterHeader";

function Main() {
  const [list, setList] = useState([]);
  const [categories, setCategoriest] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const getList = async () => {
    const result = await getListService();
    console.log("hi");
    console.log(result.data);
    setList(result.data.product_variations);
    setCategoriest(result.data.categories);
    setFilterList(result.data.meta.filter.results);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <Header />
      <FilterHeader fillter={filterList} />

      <div className="container">
        <div>
          <CategoryList categories={categories} />
        </div>
        <div></div>
        <ProductList list={list} />
      </div>
    </>
  );
}

export default Main;
