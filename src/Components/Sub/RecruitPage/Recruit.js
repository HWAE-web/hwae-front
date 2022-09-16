import { useState, useEffect } from "react";
import { GlobalFonts } from "../../../fonts/fonts";
import { Button } from "./ButtonElement";
import { Routes, Route, useNavigate } from "react-router-dom";
import Apply from "../ApplyPage/Apply";
import SubPage from "../SubPages/Pages";
import { changeBack, changeDesigner, changeFront } from "./store.js";
import { useDispatch } from "react-redux";

import {
  SubRecruitContainer,
  SubRecruitWrapper,
  SubRecruitTitle,
  SubRecruitTextBox,
  SubRecruitFront,
  SubRecruitBack,
  SubRecruitDesigner,
  SubRecruitTitle2,
  SubRecruitDetail,
  SubRecruitTeam,
  SubRecruitTeamDetail,
  SubRecruitList,
  SubRecruitWho,
  SubRecruitRow,
  Column1,
  Column2,
  C1,
  C2,
  SubRecruitTBRow,
  RecruitTitleWrap,
  RecruitBtnWrapper,
  RecruitContents,
  RecruitListRow,
} from "./RecruitElement.js";

function Recruit() {
  let [tab, setTab] = useState(0); // 탭의 상태를 저장해둘 state

  return (
    <>
      <GlobalFonts />
      <SubRecruitContainer id="subRecruit">
        <SubRecruitWrapper>
          <SubRecruitRow>
            <Column1>
              <RecruitContents>
                <SubRecruitTitle>Recruit</SubRecruitTitle>
                <RecruitListRow>
                  <SubRecruitFront
                    tab={tab}
                    onClick={() => {
                      setTab(0);
                    }}
                  >
                    Front-end
                  </SubRecruitFront>
                  <SubRecruitBack
                    tab={tab}
                    onClick={() => {
                      setTab(1);
                    }}
                  >
                    Back-end
                  </SubRecruitBack>
                  <SubRecruitDesigner
                    tab={tab}
                    onClick={() => {
                      setTab(2);
                    }}
                  >
                    Designer
                  </SubRecruitDesigner>
                </RecruitListRow>
              </RecruitContents>
            </Column1>
            <Column2>
              <SubRecruitTextBox>
                <TabContent tab={tab} />
              </SubRecruitTextBox>
            </Column2>
          </SubRecruitRow>
        </SubRecruitWrapper>
      </SubRecruitContainer>
      <Routes>
        <Route path="/sub" element={<SubPage />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </>
  );
}
function TabContent(props) {
  return (
    <div>
      {
        [
          <div>
            <FrontEnd />
          </div>,
          <div>
            <BackEnd />
          </div>,
          <div>
            <Designer />
          </div>,
        ][props.tab]
      }
    </div>
  );
}

function FrontEnd() {
  let navigate = useNavigate(); // 페이지 이동
  let dispatch = useDispatch();

  return (
    <>
      <GlobalFonts />
      <RecruitTitleWrap>
        <SubRecruitTitle2>Front-end</SubRecruitTitle2>
        <SubRecruitDetail>
          HWA-E의 프론트엔드는 WEB팀과 APP팀이 있습니다. <br />
          각 팀의 지원자격 및 우대사항을 잘 확인해 주세요! <br />
          프론트엔드는 디자이너와 함께 와이어프레임 작업에 참여하고, 평소
          개발하고 싶었던 웹/앱을 제작합니다.
        </SubRecruitDetail>
      </RecruitTitleWrap>
      <SubRecruitTBRow>
        <C1>
          <SubRecruitTeam>WEB Team</SubRecruitTeam>
          <SubRecruitTeamDetail>
            여러 팀과의 긴밀한 협업을 통해 개발 경험을 설계해요. 리액트를
            사용해서 평소 개발하고 싶었던 웹을 제작해요. 여기에 더 추가해야 함~!
          </SubRecruitTeamDetail>
          <SubRecruitWho>지원 자격 및 우대사항</SubRecruitWho>
          <SubRecruitList>
            <li>HTML, CSS, JS 관련 지식이 있으신 분</li>
            <li>React를 사용하여 개발하고 싶으신 분</li>
            <li>마감일 잘 지키는 사람</li>
          </SubRecruitList>
        </C1>
        <C2>
          <SubRecruitTeam>APP Team</SubRecruitTeam>
          <SubRecruitTeamDetail>
            여러 팀과의 긴밀한 협업을 통해 개발 경험을 설계해요. 코틀린을
            사용해서 평소 개발하고 싶었던 앱을 제작해요. 여기에 더 추가해야 함~!
          </SubRecruitTeamDetail>
          <SubRecruitWho>지원 자격 및 우대사항</SubRecruitWho>
          <SubRecruitList>
            <li>React Native 관련 지식이 있으신 분</li>
            <li>Kotlin 관련 지식이 있으신 분</li>
            <li>IOS & Android</li>
          </SubRecruitList>
        </C2>
      </SubRecruitTBRow>
      <RecruitBtnWrapper>
        <Button
          onClick={() => {
            navigate("/apply");
            dispatch(changeFront());
          }}
        >
          프론트엔드 지원하기
        </Button>
      </RecruitBtnWrapper>
    </>
  );
}

function BackEnd() {
  let navigate = useNavigate(); // 페이지 이동
  let dispatch = useDispatch();

  return (
    <>
      <GlobalFonts />
      <RecruitTitleWrap>
        <SubRecruitTitle2>Back-end</SubRecruitTitle2>
        <SubRecruitDetail>
          HWA-E의 백엔드는 WEB팀과 APP팀이 있습니다. <br />
          각 팀의 지원자격 및 우대사항을 잘 확인해 주세요! <br />
          백엔드는 두 팀이 함께 하이브리드 프로젝트 개발해 참여합니다.
        </SubRecruitDetail>
      </RecruitTitleWrap>
      <SubRecruitTBRow>
        <C1>
          <SubRecruitTeam>WEB Team</SubRecruitTeam>
          <SubRecruitTeamDetail>
            여러 팀과의 긴밀한 협업을 통해 개발 경험을 설계해요. 스프링를
            사용해서 평소 개발하고 싶었던 웹을 제작해요. 여기에 더 추가해야 함~!
          </SubRecruitTeamDetail>
          <SubRecruitWho>지원 자격 및 우대사항</SubRecruitWho>
          <SubRecruitList>
            <li>HTML, CSS, JS 관련 지식이 있으신 분</li>
            <li>React를 사용하여 개발하고 싶으신 분</li>
            <li>마감일 잘 지키는 사람</li>
          </SubRecruitList>
        </C1>
        <C2>
          <SubRecruitTeam>APP Team</SubRecruitTeam>
          <SubRecruitTeamDetail>
            여러 팀과의 긴밀한 협업을 통해 개발 경험을 설계해요. 스프링 사용해서
            평소 개발하고 싶었던 앱을 제작해요. 여기에 더 추가해야 함~!
          </SubRecruitTeamDetail>
          <SubRecruitWho>지원 자격 및 우대사항</SubRecruitWho>
          <SubRecruitList>
            <li>React Native 관련 지식이 있으신 분</li>
            <li>Kotlin 관련 지식이 있으신 분</li>
            <li>IOS & Android</li>
          </SubRecruitList>
        </C2>
      </SubRecruitTBRow>
      <RecruitBtnWrapper>
        <Button
          onClick={() => {
            navigate("/apply");
            dispatch(changeBack());
          }}
        >
          백엔드 지원하기
        </Button>
      </RecruitBtnWrapper>
    </>
  );
}

function Designer() {
  let navigate = useNavigate(); // 페이지 이동
  let dispatch = useDispatch();

  return (
    <>
      <GlobalFonts />
      <RecruitTitleWrap>
        <SubRecruitTitle2>Designer</SubRecruitTitle2>
        <SubRecruitDetail>
          HWA-E의 디자이너는 WEB팀과 APP팀이 있습니다. <br />
          각 팀의 지원자격 및 우대사항을 잘 확인해 주세요! <br />
          화이의 디자인을 책임지고 있습니다. 개발팀과 협업하여 프로젝를를
          만들어냅니다.
        </SubRecruitDetail>
      </RecruitTitleWrap>
      <SubRecruitTBRow>
        <C1>
          <SubRecruitTeam>WEB Team</SubRecruitTeam>
          <SubRecruitTeamDetail>
            여러 팀과의 긴밀한 협업을 통해 브랜드 경험을 설계해요. 프로덕트
            비주얼 디자인부터 굿즈까지, 그래픽 디자인해요. 
          </SubRecruitTeamDetail>
          <SubRecruitWho>지원 자격 및 우대사항</SubRecruitWho>
          <SubRecruitList>
            <li>관련 경력 5년 이상을 갖추신 분</li>
            <li>IT 업계 디자인 실무 경험이 있으신 분</li>
            <li>브랜드 초기 구축에서 운영까지의 경험이 있으신 분</li>
          </SubRecruitList>
        </C1>
        <C2>
          <SubRecruitTeam>APP Team</SubRecruitTeam>
          <SubRecruitTeamDetail>
            여러 팀과의 긴밀한 협업을 통해 브랜드 경험을 설계해요. 프로덕트
            비주얼 디자인부터 굿즈까지, 그래픽 디자인해요.
          </SubRecruitTeamDetail>
          <SubRecruitWho>지원 자격 및 우대사항</SubRecruitWho>
          <SubRecruitList>
            <li>관련 경력 5년 이상을 갖추신 분</li>
            <li>IT 업계 디자인 실무 경험이 있으신 분</li>
            <li>브랜드 초기 구축에서 운영까지의 경험이 있으신 분</li>
          </SubRecruitList>
        </C2>
      </SubRecruitTBRow>
      <RecruitBtnWrapper>
        <Button
          onClick={() => {
            navigate("/apply");
            dispatch(changeDesigner());
          }}
        >
          디자이너 지원하기
        </Button>
      </RecruitBtnWrapper>
    </>
  );
}

export default Recruit;
