import { GlobalFonts } from "../../../fonts/fonts";
import calendar from "../../../Images/calendar.svg";
import {
  SubProcessBg,
  SubProcessMainTitle,
  SubProcessMainDetail,
  SubProcessFirst,
  SubProcessSecond,
  SubProcessThird,
  SubProcessFourth,
  SubProcessTitle,
  SubProcessTitle1,
  SubProcessDetail,
  SubProcessCalendar,
  SubProcessWrapper,
  SubProcessContainer,
} from "./ProcessElement.js";
function Process() {
  return (
    <SubProcessContainer>
      <SubProcessWrapper>
        <SubProcessBg>
          <GlobalFonts />
          <SubProcessMainTitle>Recruiting Process</SubProcessMainTitle>
          <SubProcessMainDetail>
            HWA-E는 6개월 정도의 기간 동안 디자이너와 개발자가 팀을 이루어
            아이디어를 구체 화하고 프로젝트를 진행합니다. 사업 화보다는 즐겁게
            서비스를 개발해 보는 경험을 얻는 것을 목적으로 하고 있습니다.
          </SubProcessMainDetail>
          <SubProcessCalendar src={calendar} alt="calendar" />
          <SubProcessFirst>
            <SubProcessTitle>01</SubProcessTitle>
            <SubProcessTitle1>서류 접수</SubProcessTitle1>
            <SubProcessDetail>
              2022. 11. 11. (월) ~ 11. 11. (월)
              <br /> 23:59:59 접수 마감
            </SubProcessDetail>
          </SubProcessFirst>
          <SubProcessSecond>
            <SubProcessTitle>02</SubProcessTitle>
            <SubProcessTitle1>서류 결과 발표</SubProcessTitle1>
            <SubProcessDetail>2022. 11. 11. (월)</SubProcessDetail>
          </SubProcessSecond>
          <SubProcessThird>
            <SubProcessTitle>03</SubProcessTitle>
            <SubProcessTitle1>면접</SubProcessTitle1>
            <SubProcessDetail>
              {" "}
              2022. 11. 11. (월) ~ 11. 11. (월)
            </SubProcessDetail>
          </SubProcessThird>
          <SubProcessFourth>
            <SubProcessTitle>04</SubProcessTitle>
            <SubProcessTitle1>최종 화이어 발표</SubProcessTitle1>
            <SubProcessDetail> 2022. 11. 11. (월)</SubProcessDetail>
          </SubProcessFourth>
        </SubProcessBg>
      </SubProcessWrapper>
    </SubProcessContainer>
  );
}

export default Process;
