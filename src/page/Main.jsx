import React, { useEffect, useState } from "react";
import { getListService } from "../service/apiService";
import Loading from "../component/Loading";
import ProductList from "../component/product/productList";
import CategoryList from "../component/category/CategoryList";
import Header from "../component/layout/Header";
import FilterHeader from "../component/filter/FilterHeader";
import Pagination from "../component/Pagination";
import Sort from "../component/sort/Sort";
function Main() {
  const [list, setList] = useState([]);
  const [categories, setCategoriest] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState([]);
  const [isSortShow, setIsSortShow] = useState(0);
  const getList = async (page) => {
    setLoading(true);
    const result = await getListService(page);
    console.log(result.data);
    setList(result.data.product_variations);
    setCategoriest(result.data.categories);
    setFilterList(result.data.meta);
    setSort(result.data.meta.sort.results);
    setLoading(false);
  };
  const pagingHandler = (newIndex) => {
    console.log("pagingHandler" + newIndex);
    setIndex(newIndex);
  };
  useEffect(() => {
    getList(index);
  }, [index]);

  const HandellSort = () => {
    setIndex(0);
  };

  return (
    <>
      <Loading show={loading} />
      <Sort sortlist={sort} sortShow={isSortShow} onSortSubmit={HandellSort} />
      <Header />
      <FilterHeader
        clickSort={() => {
          setIsSortShow((perv) => perv + 1);
        }}
        fillter={filterList}
      />
      <div className="container">
        <div className="row">
          <CategoryList categories={categories} />

          <ProductList list={list} />
          <Pagination onChange={pagingHandler} />
        </div>
      </div>
    </>
  );
}

export default Main;
