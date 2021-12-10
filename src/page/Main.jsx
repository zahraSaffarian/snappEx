import React, { useEffect, useState } from "react";
import { getListService } from "../service/apiService";
import Loading from "../component/Loading";
import ProductList from "../component/product/productList";
import CategoryList from "../component/category/CategoryList";
import Header from "../component/layout/Header";
import FilterHeader from "../component/filter/FilterHeader";
import Pagination from "../component/Pagination";

function Main() {
  const [list, setList] = useState([]);
  const [categories, setCategoriest] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [index, setIndex] = useState(0);

  const getList = async (page) => {
    const result = await getListService(page);
    console.log(result.data);
    setList(result.data.product_variations);
    setCategoriest(result.data.categories);
    setFilterList(result.data.meta.filter.results);
  };
  const pagingHandler = (newIndex) => {
    console.log("pagingHandler" + newIndex);
    setIndex(newIndex);
  };
  useEffect(() => {
    getList(index);
  }, [index]);
  return (
    <>
      <Header />
      <FilterHeader fillter={filterList} />
      <div className="container">
        <CategoryList categories={categories} />

        <ProductList list={list} />
        <Pagination onChange={pagingHandler} />
        <div></div>
      </div>
    </>
  );
}

export default Main;
