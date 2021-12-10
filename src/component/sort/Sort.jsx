import React, { useEffect, useState } from "react";
import FullPage from "../FullPage";

function Sort({ sortlist, sortShow }) {
  const [sortDefault, setSortDefault] = useState();
  const [showPopUp, setShowPopUp] = useState();
  useEffect(() => {
    setShowPopUp(sortShow);
  }, [sortShow]);

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setSortDefault(event.target.value);
  };
  return (
    <FullPage titel={"مرتب سازی"} IsShow={showPopUp}>
      <ul className="list-Form" onChange={onChangeHandler}>
        {sortlist.map((item) => (
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
        <button
          onClick={() => {
            setShowPopUp(false);
          }}
          className="btn btn-outline-dark"
        >
          حذف همه
        </button>
        <button className="btn btn-gray">اعمال</button>
      </div>
    </FullPage>
  );
}

export default Sort;
