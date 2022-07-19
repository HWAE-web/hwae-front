import "./Recruit_Process.css";

function Process() {
  return (
    <div className="processBg">
      <p className="RP">Recruiting Process</p>
      <p className="intro">
        HWA-E는 6개월 정도의 기간 동안 디자이너와 개발자가 팀을 이루어
        아이디어를 구체 화하고 프로젝트를 진행합니다. 사업 화보다는 즐겁게
        서비스를 개발해 보는 경험을 얻는 것을 목적으로 하고 있습니다.{" "}
      </p>
      <div className="calendar" />
      <div className="first">
        <div className="first1">01</div>
        <div className="firstTitle">서류 접수</div>
        <div className="firstDetail">
          2022. 11. 11. (월) ~ 11. 11. (월)
          <br /> 23:59:59 접수 마감{" "}
        </div>
      </div>
      <div className="second">
        <div className="second1">02</div>
        <div className="secondTitle">서류 결과 발표</div>
        <div className="secondDetail">2022. 11. 11. (월) </div>
      </div>
      <div className="third">
        <div className="third1">03</div>
        <div className="thirdTitle">면접</div>
        <div className="thirdDetail">2022. 11. 11. (월) ~ 11. 11. (월)</div>
      </div>
      <div className="fourth">
        <div className="fourth1">04</div>
        <div className="fourthTitle">최종 결과 발표</div>
        <div className="fourthDetail">2022. 11. 11. (월) </div>
      </div>
    </div>
  );
}

export default Process;
