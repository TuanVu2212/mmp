import React from "react";

function Tableinformation({
  table,
  size,
  username,
  phoneinput,
  timeinput,
  visible = false,
}) {
  const handleRandom = () => {
    const rand = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5);

    return rand;
  };
  return (
    <>
      <div id="order-id" className="content-container">
        <div class="content_bill">
          <div>
            <p>Mã khách hàng: {handleRandom()}</p>
            <p>Nhà hàng: {decodeURI(table)}</p>
            <p>Tên: {decodeURI(username)}</p>
            <p>SĐT: {decodeURI(phoneinput)}</p>
            <p>Thời gian: {decodeURI(timeinput)}</p>
            <p>Size: {decodeURI(size)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tableinformation;
