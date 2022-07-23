import "./Home.css";
import NavBar from "../NavBar/NavBar.js";

function Home() {
  return (
    <div className="sub-home-bg">
      <NavBar />
      <p className="sub-home-title">
        HWA-E <br />
        2nd Member
        <br /> Recruiting
      </p>
      <p className="sub-home-title2">
        화이의 두번째 화이어를 모집합니다. <br />
        화이에서 함께할 분들은 지원 부탁드립니다!
      </p>
      <div className="sub-home-button">Read More</div>
      <div className="sub-home-img" />
      <div className="sub-home-RR" />
    </div>
  );
}

export default Home;
