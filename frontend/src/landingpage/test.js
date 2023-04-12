import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import "./style.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Table from "./Table";
import Tableinformation from "./Information/Tableinformation";
import Phoneinfromation from "./Information/Phoneinformation";
import Sizeinformation from "./Information/Sizeinformation";
import Nameinformation from "./Information/Nameinformation";
SwiperCore.use([Navigation, Pagination]);

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function LandingPage() {
  const query = useQuery();

  const [userInput, setUserInput] = useState(query.get("name"));
  const [users, setUsers] = useState([]);
  const [phone, setPhone] = useState([]);
  const [usertime, setTime] = useState([]);
  const bottomRef = useRef();
  const contentRef = useRef();
  // const [showSize, setSize] = React.useState(false);
  const [showInput, setShowInput] = React.useState(false);
  const [showTable, setShowTable] = React.useState(false);

  const handleOpenTable = () => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
    setShowInput(true);
  };
  const handleSend = () => {
    if (users.length === 0) {
      setUsers((prev) => [...prev, userInput]);
      console.log(users);
    } else if (phone.length === 0) {
      setPhone((prev) => [...prev, userInput]);
    } else if (usertime.length === 0) {
      setTime((prev) => [...prev, userInput]);
      setShowTable(true);
    }
  };
  const handleChangeInput = (event) => {
    setUserInput(event.target.value);
  };
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
    if (usertime.length > 0) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        setUserInput("");
      }, 500);
    }
  }, [usertime]);
  return (
    <div id="container" className="container-fluid center">
      <div className="text-center">
        <div className="card-body">
          <h5 className="card-title">MMP</h5>
          <p className="card-text"></p>
        </div>
      </div>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel-img text-center">
            <img src="./images/table.png" alt="order" className="border" />
            <Button className="button-click" onClick={handleOpenTable}>
              Đặt bàn
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-img text-center">
            <img src="/images/order.png" alt="order" className="border" />
            <Button className="button-click">đặt món</Button>
          </div>
        </SwiperSlide>
      </Swiper>
      {showInput ? <Table /> : null}

      <div ref={contentRef} id="table-id">
        {users.map((user, index) => (
          <Nameinformation key={index} username={user} visible={true} />
        ))}
      </div>
      <div ref={contentRef} id="table-id">
        {phone.map((user, index) => (
          <Phoneinfromation key={index} phoneinput={user} visible={true} />
        ))}
      </div>
      <div ref={contentRef} id="table-id">
        {usertime.map((user, index) => (
          <Sizeinformation key={index} timeinput={user} visible={true} />
        ))}
      </div>
      {showTable ? (
        <Tableinformation
          username={users}
          phoneinput={phone}
          timeinput={usertime}
          visible={true}
        />
      ) : null}

      <span className="f-hidden" id="f-hidden" ref={bottomRef}></span>
      <div className="input-container">
        <input
          onChange={handleChangeInput}
          value={userInput}
          placeholder="Enter your name"
          className="input"
        />
        <button className="btn-send" onClick={handleSend}>
          <FontAwesomeIcon icon={faPaperPlane} color="white" />
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
