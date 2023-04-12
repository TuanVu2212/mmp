import React from "react";

function Phoneorder({ phoneinput, visible = false }) {
  return (
    <>
      <div className={`message-container ${visible ? "show" : "hide"}`}>
        <p>{decodeURI(phoneinput)}</p>
      </div>

      <div id="input" className="content-container">
        <p class="content">Nhập địa chỉ nhận hàng</p>
      </div>
    </>
  );
}

export default Phoneorder;
