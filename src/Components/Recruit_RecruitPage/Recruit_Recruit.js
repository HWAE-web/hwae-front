import "./Recruit_Recruit.css";
import { useState } from "react";

function Recruit() {
  let [tab, setTab] = useState(0); // 탭의 상태를 저장해둘 state

  return (
    <div className="recruitBg">
      <div className="recruit">Recruit</div>
      <div
        className={`front ${tab === 0 ? "active" : ""}`}
        onClick={() => {
          setTab(0);
        }}
      >
        Front-end
      </div>
      <div
        className={`back ${tab === 1 ? "active" : ""}`}
        onClick={() => {
          setTab(1);
        }}
      >
        Back-end
      </div>
      <div
        className={`designer ${tab === 2 ? "active" : ""}`}
        onClick={() => {
          setTab(2);
        }}
      >
        Designer
      </div>
      <div className="textbox">
        <TabContent tab={tab} />
      </div>
    </div>
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
  return (
    <>
      <div className="title">Front-end</div>
      <div className="Detail">
        안녕하세요. HWA-E 프론트엔드팀입니다. 저희 팀은 매우 화목하고
        열정적입니다! <br /> 이런식으로 짧게 어필할 수 있는 문장을 삽입하세요.
        분량은 1~2줄입니다.{" "}
      </div>
      <div class="Do">주요 활동</div>
      <div class="DoDetail">
        여러 팀과의 긴밀한 협업을 통해 개발 경험을 설계해요.
        <br />
        리액트를 사용해서 평소 개발하고 싶었던 웹을 제작해요. <br />
        여기에 더 추가해야 함~!
      </div>
      <div className="Who">지원 자격</div>
      <ul className="Ul">
        <li>HTML, CSS, JS</li>
        <li>리액트 기본 아는 사람</li>
        <li>열정걸</li>
      </ul>
      <div className="Special">우대사항</div>
      <ul className="SpecialUl">
        <li>HTML, CSS, JS</li>
        <li>리액트 기본 아는 사람</li>
        <li>열정걸</li>
      </ul>
      <div className="Recruit">지원하기</div>
    </>
  );
}

function BackEnd() {
  return (
    <>
      <div className="title">Back-end</div>
      <div className="Detail">
        안녕하세요. HWA-E 백엔드팀입니다. 저희 팀은 매우 화목하고 열정적입니다!{" "}
        <br /> 이런식으로 짧게 어필할 수 있는 문장을 삽입하세요. 분량은
        1~2줄입니다.{" "}
      </div>
      <div class="Do">주요 활동</div>
      <div class="DoDetail">
        여러 팀과의 긴밀한 협업을 통해 개발 경험을 설계해요.
        <br />
        평소 개발하고 싶었던 앱을 제작해요. <br />
        여기에 더 추가해야 함~!
      </div>
      <div className="Who">지원 자격</div>
      <ul className="Ul">
        <li>HTML, CSS, JS</li>
        <li>리액트 기본 아는 사람</li>
        <li>열정걸</li>
      </ul>
      <div className="Special">우대사항</div>
      <ul className="SpecialUl">
        <li>HTML, CSS, JS</li>
        <li>리액트 기본 아는 사람</li>
        <li>열정걸</li>
      </ul>
      <div className="Recruit">지원하기</div>
    </>
  );
}

function Designer() {
  return (
    <>
      <div className="title">Designer</div>
      <div className="Detail">
        안녕하세요. HWA-E 디자이너팀입니다. <br />
        화이의 디자인을 책임지고 있습니다.
        <br />
        개발팀과 협업하여 프로젝를를 만들어냅니다. 이런식으로 짧게 어필할 수
        있는 문장을 삽입하세요. 분량은 1~2줄입니다.{" "}
      </div>
      <div class="Do">주요 활동</div>
      <div class="DoDetail">
        여러 팀과의 긴밀한 협업을 통해 브랜드 경험을 설계해요.
        <br />
        프로덕트 비주얼 디자인부터 굿즈까지, 그래픽 디자인해요.
        <br />
        브랜드의 목적에 맞는 프로젝트를 스스로 기획하고 빠르게 실행해요.
      </div>
      <div className="Who">지원 자격</div>
      <ul className="Ul">
        <li>관련 경력 5년 이상을 갖추신 분</li>
        <li>IT 업계 디자인 실무 경험이 있으신 분</li>
        <li>브랜드 초기 구축에서 운영까지의 경험이 있으신 분</li>
      </ul>
      <div className="Special">우대사항</div>
      <ul className="SpecialUl">
        <li>모션그래픽, 또는 3D 애니메이션 스킬이 있으신 분</li>
        <li>정확하고 간결한 글쓰기 능력을 갖추신 분</li>
        <li>플랫폼 비즈니스에 대한 높은 관심이 있으신 분</li>
      </ul>
      <div className="Recruit">디자이너 지원하기</div>
    </>
  );
}

export default Recruit;
