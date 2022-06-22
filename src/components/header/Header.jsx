import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { airConditon as fa-air-conditioner } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import {
  faBed,
  faCalendarDays,
  faEarthOceania,
  faMap,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { useNavigate, Link } from "react-router-dom";
// chuyển ngày thành kiểu chuổi
import { format } from "date-fns";
import useClickOutSide from "../../hooks/useClickOutSide";

const Header = ({ type }) => {
  // trgger đóng mở form
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const ref = useRef()
  useClickOutSide(ref, () => setOpenOptions(false));
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  //viết sự kiện tăng giảm
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  //sử dụng hook navigate để chuyển trang
  const navigate = useNavigate();
  //viết sự kiệntìm kiếm khi tìm kiếm gồm điểm đến ,nagỳ ,ngày nhận phòng
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div
        //nếu type là list thì mới hiển thị thêm class là list Mode
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Lưu Trú</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Đặt vé máy bay</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Thuê Xe</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faEarthOceania} />
            <span>Địa điểm tham quan</span>
          </div>
        </div>
        {/* check điề kiện để ẩn thanh seacrh bar */}
        {type !== "list" && (
          <div>
            <div className="headerWrap">
              <h1 className="headerTitle">
                A lifetime os discounts ? It's Genius.
              </h1>
              <p className="headerDesc">
                Nhận phần thưởng cho chuyến du lịch của bạn - mở khóa khoản tiết
                kiệm tức thì từ 10% trở lên với tài khoản Sunnybooking miễn phí
              </p>
              <button className="headerButton">
                {/* click vào đăng nhập thì chuyan63 sang đăng nhập đăng ký thì chuyển sang đăng ký  */}
                <Link className="headerLink" to="/login">
                  Đăng nhập
                </Link>
                <span> / </span>
                <Link className="headerLink" to="/register">
                  Đăng ký
                </Link>
                {/* Đăng nhập / Đăng kí */}
              </button>
            </div>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="enter your destination"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                  // ref={inputRef}
                />
              </div>
              <div className="headerSearchItem" ref={ref}  >
                
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                {/* format lại theo kiểu ngày tháng năm */}
                {/* do trên ngày là 1 obj nên chúng ta sẽ chọ vào phần tử đầu tiên của obj */}
                <span  
                  
                  onClick={() => setOpenDate(!openDate)}  
                  className="headerSearchText"
                >
                  {`Từ ${format(date[0].startDate, "dd/MM/yyyy")} Đến ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}
                  {/* {console.log(date[0])} */}
                </span>
                {
                  // nếu có thể thì sẽ hiện ra nút chọn ngày
                  openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  )
                }
              </div>
              <div className="headerSearchItem"  ref={ref}>
                <FontAwesomeIcon icon={faPerson} className="headerIcon"  />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} Người lớn - ${options.children} Trẻ em - ${options.room} Phòng`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          //stop actionclick when amount < 1
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          // nút giảm
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          // nút tăng
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">room </span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerButton" onClick={handleSearch}>
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
