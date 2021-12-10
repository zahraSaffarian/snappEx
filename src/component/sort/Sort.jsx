import React, { useEffect, useState } from "react";
import FullPage from "../FullPage";

function Sort({ sortlist, sortShow }) {
  const [sortDefault, setSortDefault] = useState();
  useEffect(() => {
    //setSortDefault();
  }, []);
  return (
    <FullPage>
      sort
      {sortlist.map((item) => (
        // <Item key={item.id} item={item} />
        <div key={item.name}>{item.translation}</div>
      ))}
    </FullPage>
  );
}

export default Sort;
