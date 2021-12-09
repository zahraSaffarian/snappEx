import React from "react";
export default function Loading({ show }) {
  return (
    <>
      {show &&
        <div className="loading-container">
          <div>
            <div className="loader">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
              <div className="bar4"></div>
              <div className="bar5"></div>
              <div className="bar6"></div>
            </div>
            <div className="py-4 loader-color">لطفا کمی صبر کنید.</div>
          </div>
        </div>
      }
    </>
  );
}
