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
  SubHomeWrapper,
  HomeContents,
  HomeBtnWrapper,
  HomeImgWrap,
  Col2Wrap
} from "./HomeElement.js";
import { Button } from "../../Main/MainHero/ButtonElemets";

function Home(imgStart) {
  return (
    <>
      <GlobalFonts />
      <SubHomeContainer>
        <SubHomeWrapper>
        <SubHomeRow imgStart={imgStart}>
          <Column1>
            <HomeContents>
            <SubHomeTitle>
              HWA-E <br />
              2nd Member
              <br /> Recruiting
            </SubHomeTitle>
            <SubHomeTitle2>
              화이의 두번째 화이어를 모집합니다. <br />
              화이에서 함께할 분들은 지원 부탁드립니다!
            </SubHomeTitle2>
            <HomeBtnWrapper>
            <Button
                      to="signup"
                      // onMouseEnter={onHover}
                      // onMouseLeave={onHover}
                      // primary="true"
                      // dark="true"
                    >
                      Read More
                    </Button>
            </HomeBtnWrapper>
            </HomeContents>
          </Column1>
          <Column2>
          <Col2Wrap>
          <HomeImgWrap>
            <SubHomeImg src={hwae_3d}/>
            </HomeImgWrap>
            </Col2Wrap>
          </Column2>
        </SubHomeRow>
        <SubHomeRR src={RR}></SubHomeRR>

        </SubHomeWrapper>
      </SubHomeContainer>
    </>
  );
}

export default Home;
