import "./Recruit_Home.css";
import NavBar from "../Recruit_NavBar/Recruit_NavBar.js";

function Home() {
  return (
    <div className="homeBg">
      <NavBar />
      <p className="hwaeintro">
        HWA-E <br />
        2nd Member
        <br /> Recruiting
      </p>
      <p className="intro2">
        화이의 두번째 화이어를 모집합니다. <br />
        화이에서 함께할 분들은 지원 부탁드립니다!
      </p>
      <div className="button">Read More</div>
      <div className="hwaeimg" />
      <div className="RR" />
    </div>
  );
}

export default Home;
