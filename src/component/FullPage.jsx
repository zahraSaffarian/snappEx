import React, { useEffect, useState } from "react";

function FullPage({ children, titel, IsShow }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(IsShow);
  }, [IsShow]);
  useEffect(() => {
    console.log("hello");
  }, [show]);
  return (
    <>
      {show && (
        <div className="full-page-container">
          <div className="header">
            <div className="titel">{titel}</div>
            <button
              onClick={() => {
                setShow(false);
              }}
              className="btn icon-btn-hover icon-x click fa-lg base-text"
            />
          </div>
          <div className="body">{children}</div>
        </div>
      )}
    </>
  );
}

export default FullPage;
