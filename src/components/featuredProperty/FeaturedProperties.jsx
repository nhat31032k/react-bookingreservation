import "./FeaturedProperties.scss";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/339532965.webp?k=e993afcfba8e65a58e30b79b2f46d17a5128b76ea60fd8b724df0508441b9e8f&o=&s=1"
          alt=""
          className="fpImg"
        />
        <div className="fpDesc">
          <span className="fpName">Nobu Hotel London Portman Square</span>
          <span className="fpCity"> Luân Đôn</span>
          <span className="fpPrice">Gía từ VND 9.012.059</span>
          <div className="fpRating">
            <button>9.0</button>
            <span>Tuyệt vời</span>
          </div>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/343917485.webp?k=564e9f4a43d2895308d25bc22cfac0ac62aec24b4a7404b44f508fd4cf36b0f4&o=&s=1"
          alt=""
          className="fpImg"
        />
        <div className="fpDesc">
          <span className="fpName">One Hundred Shoreditch</span>
          <span className="fpCity"> Luân Đôn</span>
          <span className="fpPrice">Gía từ VND 9.012.059</span>
          <div className="fpRating">
            <button>9.0</button>
            <span>Tuyệt vời</span>
          </div>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/137972248.webp?k=3a97941c60f197d63813f184280417410134666aa396b95894a7b26d708ec695&o=&s=1"
          alt=""
          className="fpImg"
        />
        <div className="fpDesc">
          <span className="fpName">Juzz Holiday Lets</span>
          <span className="fpCity"> Luân Đôn</span>
          <span className="fpPrice">Gía từ VND 9.012.059</span>
          <div className="fpRating">
            <button>9.0</button>
            <span>Tuyệt vời</span>
          </div>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/86639018.webp?k=427be6f124f04bd59a95d99f8f88ae68aa9848decb857b75d0021f5202086a4d&o=&s=1"
          alt=""
          className="fpImg"
        />
        <div className="fpDesc">
          <span className="fpName">
            Montcalm Royal London House-City of London
          </span>
          <span className="fpCity"> Luân Đôn</span>
          <span className="fpPrice">Gía từ VND 9.012.059</span>
          <div className="fpRating">
            <button>9.0</button>
            <span>Tuyệt vời</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
