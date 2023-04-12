import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { Button } from "reactstrap";
import "./style.css";
import Nameinformation from "./Information/Nameinformation";
import Timeinformation from "./Information/Timeinformation";
import Numberorder from "./Information/Numberorder";
import Phoneorder from "./Information/Phoneorder";
import Orderinformation from "./Information/Orderinformation";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Order(props) {
  const query = useQuery();

  const [name] = useState([
    {
      id: 1,
      food: "SPECIAL OFFER COMBO💥",
      img: "/images/combo1.png",
    },
    {
      id: 2,
      food: "TAIRA GAI - COMBO 3 MÓN",
      img: "/images/combo2.png",
    },
    {
      id: 3,
      food: "MENU MÙA ĐÔNG",
      img: "/images/combo3.png",
    },
  ]);

  const [food1, onClickorder] = useState([]);
  const [userInput, setUserInput] = useState(query.get("name"));
  const [order, setOrder] = useState([]);
  // const [orders, setOrders] = useState(0);
  const [numbers, setNumber] = useState([]);
  const [users, setUsers] = useState([]);
  const [phone, setPhone] = useState([]);
  const [userAddress, setAddress] = useState([]);
  const [showTable, setShowTable] = React.useState(false);
  // const [showOrder, setShowOrder] = React.useState(false);
  const [showInput, setShowInput] = React.useState(false);
  // const [showOrders, setShowOrders] = React.useState(false);

  const bottomRef = useRef();
  // const handleOrder = () => {

  // };
  const handleSend = () => {
    if (numbers.length === 0) {
      setNumber((prev) => [...prev, userInput]);
      setOrder((prev) => [...prev, food1]);
      // setShowOrders(true);
    } else if (users.length === 0) {
      setUsers((prev) => [...prev, userInput]);
    } else if (phone.length === 0) {
      console.log(order);
      setPhone((prev) => [...prev, userInput]);
    } else if (userAddress.length === 0) {
      setAddress((prev) => [...prev, userInput]);
      setShowTable(true);
    }
  };
  const handleChooseNN = (id) => {
    onClickorder((prev) => [...prev, id]);
    setShowInput(true);
    console.log(id);
  };
  const handleChangeInput = (event) => {
    setUserInput(event.target.value);
  };
  useEffect(() => {
    if (numbers.length > 0) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        setUserInput("");
      }, 500);
    }
  }, [numbers]);
  useEffect(() => {
    if (users.length > 0) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        setUserInput("");
      }, 500);
    }
  }, [users]);
  useEffect(() => {
    if (phone.length > 0) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        setUserInput("");
      }, 500);
    }
  }, [phone]);
  useEffect(() => {
    if (userAddress.length > 0) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        setUserInput("");
      }, 500);
    }
  }, [userAddress]);
  const Inputinformation = () => (
    <div id="table-id">
      <div id="input" className="content-container">
        <p class="content">Mời bạn nhập số lượng</p>
      </div>
    </div>
  );
  const ChooseFood = () => (
    <>
      <div class="content-container">
        <p class="content">Mời bạn chọn món</p>
      </div>
      <Swiper
        // pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        {name.map((todo) => (
          <SwiperSlide>
            <div className="carousel-img1 text-center">
              <img src={todo.img} alt="order" className="border" />
              <Button
                className="button-click1"
                key={todo.id}
                onClick={() => handleChooseNN(todo.food)}
              >
                {todo.food}
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showInput ? <Inputinformation /> : null}
      <div ref={contentRef} id="table-id">
        {numbers.map((user, index) => (
          <Numberorder key={index} number={user} visible={true} />
        ))}
      </div>

      {/* {showOrders ? <Inputs /> : null} */}
    </>
  );

  // const Inputs = () => (
  //   <>
  //     <div id="input" className="content-container">
  //       <p class="content">Bạn có muốn chọn thêm món không</p>
  //     </div>
  //     <div className="button-container">
  //       <Button className="button" id="1" onClick={() => handleFoods(1)}>
  //         Có
  //       </Button>
  //       <Button className="button" id="2" onClick={() => handleFoods(0)}>
  //         Không
  //       </Button>
  //     </div>
  //   </>
  // );
  // const handleFoods = (texts) => {
  //   setOrders(texts);
  //   let index = texts;
  //   if (index === 1) {
  //     setShowOrder(true);
  //     console.log(index);
  //     console.log(orders);
  //     return Inputinformation();
  //   } else {
  //     return (
  //       <>
  //         <div id="order-id" className="content-container">
  //           <p class="content">Mời bạn nhập tên</p>
  //         </div>
  //       </>
  //     );
  //   }
  // };
  const contentRef = useRef();
  // const handleOpenOrder = () => {};
  return (
    <>
      <ChooseFood />

      <div ref={contentRef} id="table-id">
        {users.map((user, index) => (
          <Nameinformation key={index} username={user} visible={true} />
        ))}
      </div>
      <div ref={contentRef} id="table-id">
        {phone.map((user, index) => (
          <Phoneorder key={index} phoneinput={user} visible={true} />
        ))}
      </div>
      <div ref={contentRef} id="table-id">
        {userAddress.map((user, index) => (
          <Timeinformation key={index} timeinput={user} visible={true} />
        ))}
      </div>
      {showTable ? (
        <Orderinformation
          username={users}
          phoneinput={phone}
          address={userAddress}
          food={order}
          number={numbers}
          visible={true}
        />
      ) : null}
      <div ref={contentRef} id="name-id"></div>
      <span className="f-hidden" id="f-hidden" ref={bottomRef}></span>
      <div className="input-container">
        <input
          onChange={handleChangeInput}
          value={userInput}
          placeholder="Enter your information"
          className="input"
        />
        <button className="btn-send" onClick={handleSend}>
          <FontAwesomeIcon icon={faPaperPlane} color="white" />
        </button>
      </div>
    </>
  );
}

export default Order;
