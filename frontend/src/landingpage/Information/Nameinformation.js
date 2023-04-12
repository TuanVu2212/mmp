import React from "react";

function Nameinformation({ username, visible = false }) {
  return (
    <>
      <div className={`message-container ${visible ? "table-id" : "hide"}`}>
        <p>{decodeURI(username)}</p>
      </div>
      <div id="order-id" className="content-container">
        <p class="content">Mời bạn nhập Số điện thoại</p>
      </div>
    </>
  );
}

export default Nameinformation;
