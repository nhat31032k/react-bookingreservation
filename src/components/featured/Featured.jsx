import "./Featured.scss";
import "../mixin/mixin.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/688952.webp?k=94205a05426361f6b2d71280c619b08cd585226f0618adaa01c6d6c380847f65&o="
          alt=""
          className="featuredImage"
        />
        <div className="featuredTitle">
          <h1>Vũng Tàu </h1>
          <h2>716 chỗ Nghỉ</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/688844.webp?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
          alt=""
          className="featuredImage"
        />
        <div className="featuredTitle">
          <h1>Đà Nẵng </h1>
          <h2>800 chỗ Nghỉ</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
          alt=""
          className="featuredImage"
        />
        <div className="featuredTitle">
          <h1>Đà Lạt</h1>
          <h2>1000 chỗ Nghỉ</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
