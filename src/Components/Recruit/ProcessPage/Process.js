import "./Process.css";
import calendar from "../../../Images/calendar.svg";
function Process() {
  return (
    <div className="sub-process-bg">
      <p className="sub-process-title">Recruiting Process</p>
      <p className="sub-process-detail">
        HWA-E는 6개월 정도의 기간 동안 디자이너와 개발자가 팀을 이루어
        아이디어를 구체 화하고 프로젝트를 진행합니다. 사업 화보다는 즐겁게
        서비스를 개발해 보는 경험을 얻는 것을 목적으로 하고 있습니다.{" "}
      </p>
      <img src={calendar} alt="calendar" className="sub-process-calendar" />
      <div className="sub-process-first">
        <div className="sub-process-first1">01</div>
        <div className="sub-process-firstTitle">서류 접수</div>
        <div className="sub-process-firstDetail">
          2022. 11. 11. (월) ~ 11. 11. (월)
          <br /> 23:59:59 접수 마감{" "}
        </div>
      </div>
      <div className="sub-process-second">
        <div className="sub-process-second1">02</div>
        <div className="sub-process-secondTitle">서류 결과 발표</div>
        <div className="sub-process-secondDetail">2022. 11. 11. (월) </div>
      </div>
      <div className="sub-process-third">
        <div className="sub-process-third1">03</div>
        <div className="sub-process-thirdTitle">면접</div>
        <div className="sub-process-thirdDetail">
          2022. 11. 11. (월) ~ 11. 11. (월)
        </div>
      </div>
      <div className="sub-process-fourth">
        <div className="sub-process-fourth1">04</div>
        <div className="sub-process-fourthTitle">최종 결과 발표</div>
        <div className="sub-process-fourthDetail">2022. 11. 11. (월) </div>
      </div>
    </div>
  );
}

export default Process;
