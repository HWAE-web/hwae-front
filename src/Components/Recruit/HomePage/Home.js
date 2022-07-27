import NavBar from "../NavBar/NavBar.js";
import hwae_3d from "../../../Images/hwae-3d.svg";
import RR from "../../../Images/RR.svg";
import { GlobalFonts } from "../../../fonts/fonts";
import {
  subHomeBg,
  subHomeTitle,
  subHomeTitle2,
  subHomeBtn,
  subHomeImg,
  subHomeRR,
} from "./HomeElement.js";

function Home() {
  return (
    <>
      <GlobalFonts />
      <subHomeBg>
        <NavBar />
        <subHomeTitle>
          HWA-E <br />
          2nd Member
          <br /> Recruiting
        </subHomeTitle>
        <subHomeTitle2>
          화이의 두번째 화이어를 모집합니다. <br />
          화이에서 함께할 분들은 지원 부탁드립니다!
        </subHomeTitle2>
        <subHomeBtn>Read More</subHomeBtn>
        <subHomeImg src={hwae_3d}></subHomeImg>
        <subHomeRR src={RR}></subHomeRR>
      </subHomeBg>
    </>
  );
}

export default Home;
