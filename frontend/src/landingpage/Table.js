import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { Button } from "reactstrap";
import "./style.css";
import Nameinformation from "./Information/Nameinformation";
import Phoneinfromation from "./Information/Phoneinformation";
import Timeinformation from "./Information/Timeinformation";
import Tableinformation from "./Information/Tableinformation";
import { DateTimePicker } from "@progress/kendo-react-dateinputs";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Table(props) {
  const query = useQuery();

  const [name] = useState([
    {
      id: 1,
      address:
        "Sushi Hokkaido Sachi - CN NGUYỄN TRÃI 🏡 139 A-B Nguyễn Trãi, P. Bến Thành, Q1, TP HCM",
      img: "/images/Nguyen_Trai.png",
    },
    {
      id: 2,
      address:
        "Sushi Hokkaido Sachi - CN NGUYỄN ĐÌNH CHIỂU 🏡 172H - 172Q Nguyễn Đình Chiểu, P. 6, Q3, TP HCM",
      img: "/images/Nguyen_Dinh_Chieu.png",
    },
    {
      id: 3,
      address:
        "Sushi Hokkaido Sachi - CN VINCOM ĐỒNG KHỞI 🏡 B3-07 Vincom Đồng Khởi, 72 Lê Thánh Tôn, P. Bến Nghé, Q1, TP HCM",
      img: "/images/Vincom_Center_Đong_Khoi.png",
    },
    {
      id: 4,
      address:
        "Sushi Hokkaido Sachi - CN ĐÔNG DU🏡 40 – 42 Đông Du, P. Bến Nghé, Q1, TP HCM",
      img: "/images/CN_Dong_Du.png",
    },
    {
      id: 5,
      address:
        "Sushi Hokkaido Sachi - CN PASTEUR 🏡 180 Pasteur, P. Bến Nghé, Q1, TP HCM",
      img: "/images/Pasteur.png",
    },
    {
      id: 6,
      address:
        "Sushi Hokkaido Sachi - CN CRESCENT MALL 🏡 GF - 28, 29B Crescent Mall, 101 Tôn Dật Tiên, P. Tân Phú, Q7.",
      img: "/images/Crescent_Mall.png",
    },
    {
      id: 7,
      address:
        "Sushi Hokkaido Sachi - CN SAIGON CENTRE🏡 L5 - 17 Saigon Centre, 65 Lê Lợi, P. Bến Nghé, Q1, TP HCM",
      img: "/images/Saigon_Center.png",
    },
    {
      id: 8,
      address:
        "Sushi Hokkaido Sachi - CN PHAN XÍCH LONG 🏡 163 Phan Xích Long, P. 2, Q. Phú Nhuận, TP HCM",
      img: "/images/Phan_Xich_Long.png",
    },
  ]);

  const [tables, onClicktable] = useState([]);
  const [size, setSize] = useState([]);
  const [userInput, setUserInput] = useState(query.get("name"));
  const [users, setUsers] = useState([]);
  const [phone, setPhone] = useState([]);
  const [usertime, setTime] = useState([]);
  const [showInputs, setShowInputs] = React.useState(false);
  const [showTable, setShowTable] = React.useState(false);
  const [showInput, setShowInput] = React.useState(false);

  const bottomRef = useRef();
  const handleSend = () => {
    if (users.length === 0) {
      setUsers((prev) => [...prev, userInput]);
      // console.log(users);
    } else if (phone.length === 0) {
      setPhone((prev) => [...prev, userInput]);
      // console.log(users);
    } else if (usertime.length === 0) {
      setTime((prev) => [...prev, userInput]);
      setShowTable(true);
    }
  };
  const onChangeTime = (event) => {
    if (usertime.length === 0) {
      setTime((prev) => [...prev, event.target.value]);
      setShowTable(true);
    }
  };
  const handleChooseNN = (id) => {
    onClicktable(id);
    setShowInputs(true);
    // console.log(tables, id);
  };
  const handleSendsize = (id) => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
    setSize(id);
    setShowInput(true);
    // console.log(size, id);
  };
  const handleChangeInput = (event) => {
    setUserInput(event.target.value);
  };
  useEffect(() => {
    if (tables.length > 0) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        setUserInput("");
      }, 500);
    }
  }, [tables]);
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
  const Inputs = () => (
    <>
      <div id="input" className="content-container">
        <p class="content">Mời bạn chọn loại bàn</p>
      </div>
      <div id="size" className="button-container">
        <Button className="button" id="1" onClick={() => handleSendsize("2-4")}>
          2-4
        </Button>
        <Button
          className="button"
          id="s2"
          onClick={() => handleSendsize("5-10")}
        >
          5-10
        </Button>
        <Button
          className="button"
          id="s3"
          onClick={() => handleSendsize("trên 10")}
        >
          Trên 10
        </Button>
      </div>
    </>
  );
  const Inputinformation = () => (
    <div id="table-id">
      <div className="message-container show">
        <p>{size}</p>
      </div>
      <div id="input" className="content-container">
        <p class="content">Mời bạn nhập tên</p>
      </div>
    </div>
  );
  const contentRef = useRef();
  // const handleOpenOrder = () => {};
  return (
    <>
      <div class="content-container">
        <p class="content">Mời bạn chọn nhà hàng</p>
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
                onClick={() => handleChooseNN(todo.address)}
              >
                Đặt bàn
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showInputs ? <Inputs /> : null}
      {showInput ? <Inputinformation /> : null}

      <div ref={contentRef} id="table-id">
        {users.map((user, index) => (
          <Nameinformation key={index} username={user} visible={true} />
        ))}
      </div>
      <div ref={contentRef} id="table-id">
        {phone.map((user, index) => (
          <>
            <Phoneinfromation key={index} phoneinput={user} visible={true} />
            <DateTimePicker id="datetimepicker" onChange={onChangeTime} />
          </>
        ))}
      </div>
      <div ref={contentRef} id="table-id">
        {usertime.map((user, index) => (
          <Timeinformation key={index} timeinput={user} visible={true} />
        ))}
      </div>
      {showTable ? (
        <Tableinformation
          table={tables}
          size={size}
          username={users}
          phoneinput={phone}
          timeinput={usertime}
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

export default Table;
