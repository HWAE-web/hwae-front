import "./Home.css";
import NavBar from "../NavBar/NavBar.js";
import hwae_3d from "../../../Images/hwae-3d.svg";
import RR from "../../../Images/RR.svg";

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
      <img src={hwae_3d} alt="hwae_3d" className="sub-home-img"></img>
      <img src={RR} alt="RR" className="sub-home-RR"></img>
    </div>
  );
}

export default Home;
