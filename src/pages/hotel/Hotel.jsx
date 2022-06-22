import "./Hotel.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295898328.jpg?k=03b728a775946acdd3ba1658a444fedc8a237fa599c476c35f3a48ba7a7e32c5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/295911085.jpg?k=4b99bbe95796adf318864825594bb6bbfcdb2d9a5b527d655b10562000cfab28&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/295898554.jpg?k=cf7075d1812a47623ce12ad9c27d27f2c7f1590db51d2c3631702ac936e3d708&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/347850233.jpg?k=71181cc33ac4623d3db990f7f0435924b8821927c5c1ccadf3d12b17809c9f19&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Đặt trước hoặc đặt ngay!</button>
          <h1 className="hotelTitle">Hoàng Lâm Dalat Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>20A Đường Vạn Hạnh, Đà Lạt, Việt Nam</span>
          </div>
          <span className="hotelDistance">
            Vị trí tuyệt vời – cách Vườn hoa Đà Lạt 1,3 km
          </span>
          <span className="hotelPriceHighlight">
            Chỗ nghỉ này có lễ tân 24 giờ, bếp chung và dịch vụ thu đổi ngoại tệ
            cho khách.
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Tọa lạc tại thành phố Đà Lạt</h1>
              <p className="hotelDesc">
                Cách Vườn hoa Đà Lạt 1,3 km, Hoàng Lâm Dalat Hotel cung cấp chỗ
                nghỉ với nhà hàng, chỗ đỗ xe riêng miễn phí, sảnh khách chung và
                khu vườn. Khách sạn 3 sao này cung cấp WiFi miễn phí, dịch vụ
                phòng và dịch vụ tiền sảnh. Chỗ nghỉ này có lễ tân 24 giờ, bếp
                chung và dịch vụ thu đổi ngoại tệ cho khách. Mỗi phòng nghỉ tại
                Hoang Lam Dalat Hotel đều có bàn làm việc, sân trong nhìn ra khu
                vườn, phòng tắm riêng, TV màn hình phẳng, ga trải giường và khăn
                tắm. Tất cả các phòng đều được bố trí ấm đun nước và khu vực ghế
                ngồi. Một số phòng có ban công trong khi những phòng còn lại cho
                tầm nhìn ra quang cảnh thành phố. Chỗ nghỉ có sân hiên. Đi bộ
                đường dài và đi xe đạp là các hoạt động được ưa chuộng trong khu
                vực trong khi Hoàng Lâm Dalat Hotel cũng cung cấp dịch vụ cho
                thuê xe hơi. Khách sạn nằm cách Hồ Xuân Hương 2,4 km và Quảng
                trường Lâm Viên 2,6 km. Sân bay gần nhất là sbay Liên Khương,
                nằm trong bán kính 25 km từ Hoàng Lâm Dalat Hotel. Các cặp đôi
                đặc biệt thích địa điểm này — họ cho điểm 9,5 cho kỳ nghỉ dành
                cho 2 người.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Điểm nổi bật của chỗ nghỉ</h1>
              <span>
                Địa điểm hàng đầu: Được khách gần đây đánh giá cao (9,3 điểm)
              </span>
              <h2>
                <b>VND 700.000</b> (9 đêm)
              </h2>
              <button>Đặt trước hoặc đặt ngay!</button>
            </div>
          </div>
        </div>
        <MailList type = "MailV2" />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
