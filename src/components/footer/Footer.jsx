import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Quốc gia</li>
          <li className="fListItem">Khu vực</li>
          <li className="fListItem">Thành phố</li>
          <li className="fListItem">Quận</li>
          <li className="fListItem">Sân bay</li>
          <li className="fListItem">Khách sạn</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Nhà ở </li>
          <li className="fListItem">chung cư </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Thiệt thự</li>
          <li className="fListItem">Ký túc xá</li>
          <li className="fListItem">Nha Khách</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Những nơi độc đáo để ở </li>
          <li className="fListItem">Nhận xét</li>
          <li className="fListItem">Các bài báo về du lịch</li>
          <li className="fListItem">Cộng đồng du lịch </li>
          <li className="fListItem">Giao dịch theo mùa và kỳ nghỉ </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Thuê ô tô </li>
          <li className="fListItem">Tìm chuyến bay</li>
          <li className="fListItem">Đặt trước cửa sông</li>
          <li className="fListItem">Đại lý du lịch </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Dịch vụ khách hàng</li>
          <li className="fListItem">Trợ giúp của Đối tác</li>
          <li className="fListItem">Nghề nghiệp</li>
          <li className="fListItem">Sự bền vững</li>
          <li className="fListItem">Trung tâm báo chí</li>
          <li className="fListItem">Trung tâm tài nguyên an toàn</li>
          <li className="fListItem">Quan hệ đầu tư</li>
          <li className="fListItem">Điều khoản và điều kiện</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Sunnybooking.</div>
    </div>
  );
};

export default Footer;
