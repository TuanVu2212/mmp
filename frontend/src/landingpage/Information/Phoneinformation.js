import React from "react";

function Phoneinfromation({ phoneinput, visible = false }) {
  return (
    <>
      <div className={`message-container ${visible ? "show" : "hide"}`}>
        <p>{decodeURI(phoneinput)}</p>
      </div>

      <div id="input" className="content-container">
        <p class="content">Chọn thời gian đặt bàn</p>
      </div>
    </>
  );
}

export default Phoneinfromation;
