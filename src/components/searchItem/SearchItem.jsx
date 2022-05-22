import "./searchItem.scss";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Căn hộ Phố Tower</h1>
        <span className="siDistance">Cách trung tâm 500m</span>
        <span className="siTaxiOp">Taxi sân bay miễn phí</span>
        <span className="siSubtitle">Căn hộ dạng Studio có Máy lạnh</span>
        <span className="siFeatures">
          Toàn bộ studio • 1 phòng tắm • 21m² 1 giường đầy đủ
        </span>
        <span className="siCancelOp">Hủy miễn phí </span>
        <span className="siCancelOpSubtitle">
          Bạn có thể hủy sau, vì vậy hãy chốt giá ưu đãi này ngay hôm nay!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Tuyệt vời </span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">VND 9.100.000</span>
          <span className="siTaxOp">Bao gồm thuế và phí</span>
          <button className="siCheckButton">Xem trạng thái</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
