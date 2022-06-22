import "./mailList.scss";

const mailList = ({type}) => {
  return (
    <div className={
      type === "MailV2" ? "mailV2" :"mail"
    }>
      <h1 className="mailTitle">Tiết kiệm thời gian và tiền bạc!</h1>
      <span className="mailDesc">
        Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Đăng chỗ nghỉ của Qúy vị</button>
      </div>
    </div>
  );
};

export default mailList;
