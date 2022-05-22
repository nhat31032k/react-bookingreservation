import "./navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const link = useNavigate();
  const handleClick = () => {
    // khi nhấn vào sẽ về trang chủ

    link("/");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleClick}>
          Sunnybooking
        </span>
        <div className="navItems">
          <button className="navButton">Đăng kí</button>
          <button className="navButton">Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
