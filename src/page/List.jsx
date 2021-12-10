import React, { useEffect, useState } from "react";
import Item from "../component/Item";
import { getListService } from "../service/apiService";
function List() {
  const [list, setList] = useState([]);
  const [categories, setCategoriest] = useState([]);
  const getList = async () => {
    const result = await getListService();
    console.log("hi");
    console.log(result.data.product_variations);
    setList(result.data.product_variations);
    setCategoriest(result.data.categories);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      List...
      <div>
        {list.length}
        {list.map((item) => (
             <div>{item.title}</div>;
        )
         
        )}
        <Item />
      </div>
    </div>
  );
}

export default List;
