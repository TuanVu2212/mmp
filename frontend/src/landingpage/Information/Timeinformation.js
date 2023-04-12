import React from "react";

function Timeinformation({ timeinput, visible = false }) {
  return (
    <>
      <div className={`message-container ${visible ? "show" : "hide"}`}>
        <p>{decodeURI(timeinput)}</p>
      </div>
    </>
  );
}

export default Timeinformation;
