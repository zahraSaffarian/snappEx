import React, { useEffect, useState } from "react";
import FullPage from "../FullPage";

function Sort({ sortlist, sortShow, onSortSubmit }) {
  const [sortDefault, setSortDefault] = useState();
  const [showPopUp, setShowPopUp] = useState();
  useEffect(() => {
    setShowPopUp(sortShow);
  }, [sortShow]);

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setSortDefault(event.target.value);
  };
  const onSortSubmitClick = () => {
    onSortSubmit(sortDefault);
  };
  return (
    <FullPage titel={"مرتب سازی"} IsShow={sortShow}>
      <form>
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
          <button onClick={onSortSubmitClick} className="btn btn-gray">
            اعمال
          </button>
        </div>
      </form>
    </FullPage>
  );
}

export default Sort;
