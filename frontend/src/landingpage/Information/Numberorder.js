import React from "react";

function Numberorder({ number, visible = false }) {
  return (
    <>
      <div className={`message-container ${visible ? "table-id" : "hide"}`}>
        <p>{decodeURI(number)}</p>
      </div>
      <div id="order-id" className="content-container">
        <p class="content">Mời bạn nhập tên</p>
      </div>
    </>
  );
}

export default Numberorder;
