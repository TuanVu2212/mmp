import React from "react";
import "./style.css";

function CustomModal({ username, visible = false }) {
  return (
    <div className={`message-container ${visible ? "show" : "hide"}`}>
      <p>Chúc mừng sinh nhật {decodeURI(username) || "bạn"}</p>
    </div>
  );
}

export default CustomModal;
