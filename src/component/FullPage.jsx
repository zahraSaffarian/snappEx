import React from "react";

function FullPage({ children, titel }) {
  return (
    <div className="full-page-container">
      <div className="header">
        <div className="titel">{titel}</div>
        <button className="btn icon-btn-hover icon-x click fa-lg base-text" />
      </div>
      <div className="body">{children}</div>
    </div>
  );
}

export default FullPage;
