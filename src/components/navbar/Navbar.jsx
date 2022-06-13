import "./navbar.scss";
import { useNavigate, Link } from "react-router-dom";
// import Login from "../../pages/login/Login";
// import Login from "../pages/login/Login";
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
          <button className="navButton">
            <Link className="navButton_link" to="/login">
              Đăng ký
            </Link>
          </button>
          {/* <div>
            <Link to={login}>Đăng ký</Link>
          </div> */}
          <button className="navButton">Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
