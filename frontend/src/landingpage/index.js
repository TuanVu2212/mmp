import React, { useRef } from "react";
import { Button } from "reactstrap";
import "./style.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Table from "./Table";
import Order from "./Order";
SwiperCore.use([Navigation, Pagination]);

function LandingPage() {
  const bottomRef = useRef();
  // const contentRef = useRef();
  // const [showSize, setSize] = React.useState(false);
  const [showInput, setShowInput] = React.useState(false);
  const [showOrder, setShowOrder] = React.useState(false);

  const handleOpenTable = () => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
    setShowInput(true);
    setShowOrder(false);
  };
  const handleOpenOrder = () => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
    setShowInput(false);
    setShowOrder(true);
  };

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
            <Button className="button-click" onClick={handleOpenOrder}>
              đặt món
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
      {showInput ? <Table /> : null}
      {showOrder ? <Order /> : null}
    </div>
  );
}

export default LandingPage;
