import NavBar from "../NavBar/NavBar.js";
import hwae_3d from "../../../Images/hwae-3d.svg";
import RR from "../../../Images/RR.svg";
import { GlobalFonts } from "../../../fonts/fonts";
import {
  SubHomeBg,
  SubHomeTitle,
  SubHomeTitle2,
  SubHomeBtn,
  SubHomeImg,
  SubHomeRR,
} from "./HomeElement.js";

function Home() {
  return (
    <>
      <GlobalFonts />
      <SubHomeBg>
        <NavBar />
        <SubHomeTitle>
          HWA-E <br />
          2nd Member
          <br /> Recruiting
        </SubHomeTitle>
        <SubHomeTitle2>
          화이의 두번째 화이어를 모집합니다. <br />
          화이에서 함께할 분들은 지원 부탁드립니다!
        </SubHomeTitle2>
        <SubHomeBtn>Read More</SubHomeBtn>
        <SubHomeImg src={hwae_3d}></SubHomeImg>
        <SubHomeRR src={RR}></SubHomeRR>
      </SubHomeBg>
    </>
  );
}

export default Home;
