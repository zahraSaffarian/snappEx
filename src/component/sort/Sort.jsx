import React, { useEffect, useState } from "react";
import FullPage from "../FullPage";

function Sort({ sortlist, sortShow }) {
  const [sortDefault, setSortDefault] = useState();
  useEffect(() => {
    //setSortDefault();
  }, []);
  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <FullPage titel={"مرتب سازی"}>
      <ul className="list-Form" onChange={onChangeHandler}>
        {sortlist.map((item) => (
          // <Item key={item.id} item={item} />
          <li key={item.name}>
            <input
              className="redio-style"
              type="radio"
              id={item.name}
              name="fav_language"
              value={item.name}
            />
            <label className="input-redio" htmlFor={item.name}>
              {" "}
              {item.translation}
            </label>
          </li>
        ))}
      </ul>
      <div className="footer">
        <button className="btn btn-outline-dark">حذف همه</button>
        <button className="btn btn-gray">اعمال</button>
      </div>
    </FullPage>
  );
}

export default Sort;
