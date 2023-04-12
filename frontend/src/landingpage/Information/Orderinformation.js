import React from "react";

function Orderinformation({
  username,
  phoneinput,
  address,
  food,
  number,
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
            <p>Tên: {decodeURI(username)}</p>
            <p>SĐT: {decodeURI(phoneinput)}</p>
            <p>Địa chỉ: {decodeURI(address)}</p>
            <p>
              Danh sách chọn món:
              <p className="food_number">
                <div className="food_number_detail">
                  {number.map((todo) => (
                    <p>x{todo} -</p>
                  ))}
                </div>
                <div className="food_number_detail">
                  {food.map((todo) => (
                    <p>- {todo}</p>
                  ))}
                </div>
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orderinformation;
