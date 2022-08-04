import hwae_3d from "../../../Images/hwae-3d.svg";
import RR from "../../../Images/RR.svg";
import { GlobalFonts } from "../../../fonts/fonts";
import {
  SubHomeTitle,
  SubHomeTitle2,
  SubHomeBtn,
  SubHomeImg,
  SubHomeRR,
  SubHomeContainer,
  SubHomeRow,
  Column1,
  Column2,
} from "./HomeElement.js";

function Home(imgStart) {
  return (
    <>
      <GlobalFonts />
      <SubHomeContainer>
        <SubHomeRow imgStart={imgStart}>
          <Column1>
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
          </Column1>
          <Column2>
            <SubHomeImg src={hwae_3d}></SubHomeImg>
            <SubHomeRR src={RR}></SubHomeRR>
          </Column2>
        </SubHomeRow>
      </SubHomeContainer>
    </>
  );
}

export default Home;
