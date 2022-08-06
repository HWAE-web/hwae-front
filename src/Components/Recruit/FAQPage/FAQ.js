import "./FAQ.css";
import { useState } from "react";
import All_data from "./All_data.js";
import Web_data from "./Web_data";
import App_data from "./App_data";
import plus from "../../../Images/plus.svg";
import minus from "../../../Images/minus.svg";
import { GlobalFonts } from "../../../fonts/fonts";

import { SubFAQAll, SubFAQApp, SubFAQContainer, SubFAQTextBox, SubFAQTitle, SubFAQWeb, SubFAQWrapper} from "./FAQElement";

function FAQ() {
  let [tab, setTab] = useState(0); // 탭의 상태를 저장해둘 state

  return (
    <SubFAQContainer>
      <GlobalFonts/>
      <SubFAQWrapper>
        <SubFAQTitle>FAQ</SubFAQTitle>
        <SubFAQAll tab={tab} onClick={() => {
          setTab(0);
        }}>ALL</SubFAQAll>
        <SubFAQWeb tab={tab} onClick={() => {
            setTab(1);}}>WEB</SubFAQWeb>
        <SubFAQApp tab={tab} onClick={() => {
            setTab(2);}}>APP</SubFAQApp>
        <SubFAQTextBox>
          <TabContent tab={tab}/>
        </SubFAQTextBox>
      </SubFAQWrapper>
    </SubFAQContainer>
  );
}
function TabContent(props) {
  return (
    <div>
      {
        [
          <>
            <AllFAQ />
          </>,
          <>
            <WEBFAQ />
          </>,
          <>
            <APPFAQ />
          </>,
        ][props.tab]
      }
    </div>
  );
}

function AllFAQ(props) {
  let [AllData, setAllData] = useState(All_data); // data는 data.js에 있음
  let [more, setMore] = useState([false, false, false, false, false, false]);

  function outMouseClick(index) {
    let newMore = [...more];
    newMore[index] = false;
    setMore(newMore);
  }
  function isMouseClick(index) {
    let newMore = [...more];
    newMore[index] = true;
    setMore(newMore);
  }
  return (
    <>
      {AllData.map(function (a, i) {
        return (
          <div key={i}>
            <div
              className={`sub-FAQ-question${i} ${
                more[i] === true ? "active" : ""
              }`}
            >
              {AllData[i].question}
            </div>
            <img
              src={more[i] === true ? minus : plus}
              alt="btn"
              className={`plus${i} ${more[i] === true ? "active" : ""}`}
              onClick={() => {
                more[i] ? outMouseClick(i) : isMouseClick(i);
              }}
            />
            <div
              className={`sub-FAQ-answer${i} ${
                more[i] === true ? "active" : ""
              }`}
            >
              {AllData[i].answer}
            </div>
            <span className={`div${i}`} />
          </div>
        );
      })}
    </>
  );
}

function WEBFAQ(props) {
  let [WebData, setWebData] = useState(Web_data);
  let [more, setMore] = useState([false, false, false, false, false, false]);

  function outMouseClick(index) {
    let newMore = [...more];
    newMore[index] = false;
    setMore(newMore);
  }
  function isMouseClick(index) {
    let newMore = [...more];
    newMore[index] = true;
    setMore(newMore);
  }
  return (
    <div className="sub-FAQ-textArea">
      {WebData.map(function (a, i) {
        return (
          <div key={i}>
            <div
              className={`sub-FAQ-question${i} ${
                more[i] === true ? "active" : ""
              }`}
            >
              {WebData[i].question}
            </div>
            <img
              src={more[i] === true ? minus : plus}
              alt="btn"
              className={`plus${i} ${more[i] === true ? "active" : ""}`}
              onClick={() => {
                more[i] ? outMouseClick(i) : isMouseClick(i);
              }}
            />
            <div
              className={`sub-FAQ-answer${i} ${
                more[i] === true ? "active" : ""
              }`}
            >
              {WebData[i].answer}
            </div>
            <span className={`div${i}`} />
          </div>
        );
      })}
    </div>
  );
}

function APPFAQ(props) {
  let [AppData, setAppData] = useState(App_data);
  let [more, setMore] = useState([false, false, false, false, false, false]);

  function outMouseClick(index) {
    let newMore = [...more];
    newMore[index] = false;
    setMore(newMore);
  }
  function isMouseClick(index) {
    let newMore = [...more];
    newMore[index] = true;
    setMore(newMore);
  }
  return (
    <div className="sub-FAQ-textArea">
      {AppData.map(function (a, i) {
        return (
          <div key={i}>
            <div
              className={`sub-FAQ-question${i} ${
                more[i] === true ? "active" : ""
              }`}
            >
              {AppData[i].question}
            </div>
            <img
              src={more[i] === true ? minus : plus}
              alt="btn"
              className={`plus${i} ${more[i] === true ? "active" : ""}`}
              onClick={() => {
                more[i] ? outMouseClick(i) : isMouseClick(i);
              }}
            />
            <div
              className={`sub-FAQ-answer${i} ${
                more[i] === true ? "active" : ""
              }`}
            >
              {AppData[i].answer}
            </div>
            <span className={`div${i}`} />
          </div>
        );
      })}
    </div>
  );
}
export default FAQ;
