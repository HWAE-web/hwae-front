import "./FAQ.css";
import { useState } from "react";
import All_data from "./All_data.js";
import Web_data from "./Web_data";
import App_data from "./App_data";
import plus from "../../../Images/plus.svg";
import minus from "../../../Images/minus.svg";
import { GlobalFonts } from "../../../fonts/fonts";

import { Column1, Column2, Div, FAQContents, FAQListRow, Plus, PlusWrap, Qrow, QuestionCol, QuestionWrap, Row1, Row2, Row3, Row4, Row5, Row6, SubFAQAll, SubFAQApp, SubFAQContainer, SubFAQQuestion, SubFAQQuestion0, SubFAQRow, SubFAQTextBox, SubFAQTitle, SubFAQWeb, SubFAQWrapper, C1, C2, SubFAQAnswer, TextBoxDiv} from "./FAQElement";

function FAQ() {
  let [tab, setTab] = useState(0); // 탭의 상태를 저장해둘 state

  return (
    <>
    <GlobalFonts/>
    <SubFAQContainer>
      <SubFAQWrapper>
        <SubFAQRow>
          <Column1>
            <FAQContents>
            <SubFAQTitle>FAQ</SubFAQTitle>
            <FAQListRow>
              <SubFAQAll tab={tab} onClick={() => {
                setTab(0);
              }}>ALL</SubFAQAll>
              <SubFAQWeb tab={tab} onClick={() => {
                  setTab(1);}}>WEB</SubFAQWeb>
              <SubFAQApp tab={tab} onClick={() => {
                  setTab(2);}}>APP</SubFAQApp>
            </FAQListRow>
            </FAQContents>
          </Column1>
          <Column2>
            <SubFAQTextBox>
              <TabContent tab={tab}/>
            </SubFAQTextBox>
         </Column2>
        </SubFAQRow>
      </SubFAQWrapper>
    </SubFAQContainer>
    </>
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
            <QuestionWrap>
              <QuestionCol>
                <Row1>
                <TextBoxDiv/>
                  <Qrow>
                    <C1>
                      <SubFAQQuestion more={more[0]}>
                        {AllData[0].question}
                      </SubFAQQuestion>
                      <SubFAQAnswer more={more[0]}>
                        {AllData[0].answer}
                      </SubFAQAnswer>
                    </C1>
                    <C2>
                      <PlusWrap onClick={() => {
                          more[0] ? outMouseClick(0) : isMouseClick(0);
                        }}
                        more={more[0]}>
                        <Plus src={more[0] === true ? minus : plus} />
                      </PlusWrap>  
                    </C2>
                  </Qrow>
                  <Div/>                
                </Row1>
                <Row2>
                <Qrow>
                    <C1>
                      <SubFAQQuestion more={more[1]}>
                        {AllData[1].question}
                      </SubFAQQuestion>
                      <SubFAQAnswer more={more[1]}>
                        {AllData[1].answer}
                      </SubFAQAnswer>
                    </C1>
                    <C2>
                      <PlusWrap onClick={() => {
                          more[1] ? outMouseClick(1) : isMouseClick(1);
                        }}
                        more={more[1]}>
                        <Plus src={more[1] === true ? minus : plus}
                        />
                      </PlusWrap>  
                    </C2>
                  </Qrow>
                  <Div/>
                </Row2>
                <Row3>
                <Qrow>
                    <C1>
                      <SubFAQQuestion more={more[2]}>
                        {AllData[2].question}
                      </SubFAQQuestion>
                      <SubFAQAnswer more={more[2]}>
                        {AllData[2].answer}
                      </SubFAQAnswer>
                    </C1>
                    <C2>
                      <PlusWrap onClick={() => {
                          more[2] ? outMouseClick(2) : isMouseClick(2);
                        }}
                        more={more[2]}>
                        <Plus src={more[2] === true ? minus : plus}
                        />
                      </PlusWrap>  
                    </C2>
                  </Qrow>
                  <Div/>
                </Row3>
                <Row4>
                <Qrow>
                    <C1>
                      <SubFAQQuestion more={more[3]}>
                        {AllData[3].question}
                      </SubFAQQuestion>
                      <SubFAQAnswer more={more[3]}>
                        {AllData[3].answer}
                      </SubFAQAnswer>
                    </C1>
                    <C2>
                      <PlusWrap onClick={() => {
                          more[3] ? outMouseClick(3) : isMouseClick(3);
                        }}
                        more={more[3]}>
                        <Plus src={more[3] === true ? minus : plus}
                        />
                      </PlusWrap>  
                    </C2>
                  </Qrow>
                  <Div/>
                </Row4>
                <Row5>
                <Qrow>
                    <C1>
                      <SubFAQQuestion more={more[4]}>
                        {AllData[4].question}
                      </SubFAQQuestion>
                      <SubFAQAnswer more={more[4]}>
                        {AllData[4].answer}
                      </SubFAQAnswer>
                    </C1>
                    <C2>
                      <PlusWrap onClick={() => {
                          more[4] ? outMouseClick(4) : isMouseClick(4);
                        }}
                        more={more[4]}>
                        <Plus src={more[4] === true ? minus : plus}
                        />
                      </PlusWrap>  
                    </C2>
                  </Qrow>
                  <Div/>
                </Row5>
                <Row6>
                <Qrow>
                    <C1>
                      <SubFAQQuestion more={more[5]}>
                        {AllData[5].question}
                      </SubFAQQuestion>
                      <SubFAQAnswer more={more[5]}>
                        {AllData[5].answer}
                      </SubFAQAnswer>
                    </C1>
                    <C2>
                      <PlusWrap onClick={() => {
                          more[5] ? outMouseClick(5) : isMouseClick(5);
                        }}
                        more={more[5]}>
                        <Plus src={more[5] === true ? minus : plus}
                        />
                      </PlusWrap>  
                    </C2>
                  </Qrow>
                  <TextBoxDiv/>
                </Row6>
            </QuestionCol>
          </QuestionWrap>
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
    <QuestionWrap>
    <QuestionCol>
      <Row1>
        <Qrow>
          <C1>
            <TextBoxDiv/>
            <SubFAQQuestion more={more[0]}>
              {WebData[0].question}
            </SubFAQQuestion>
            <SubFAQAnswer more={more[0]}>
              {WebData[0].answer}
            </SubFAQAnswer>
          </C1>
          <C2>
            <PlusWrap onClick={() => {
                more[0] ? outMouseClick(0) : isMouseClick(0);
              }}
              more={more[0]}>
              <Plus src={more[0] === true ? minus : plus} />
            </PlusWrap>  
          </C2>
        </Qrow>
        <Div/>                
      </Row1>
      <Row2>
      <Qrow>
          <C1>
            <SubFAQQuestion more={more[1]}>
              {WebData[1].question}
            </SubFAQQuestion>
            <SubFAQAnswer more={more[1]}>
              {WebData[1].answer}
            </SubFAQAnswer>
          </C1>
          <C2>
            <PlusWrap onClick={() => {
                more[1] ? outMouseClick(1) : isMouseClick(1);
              }}
              more={more[1]}>
              <Plus src={more[1] === true ? minus : plus}
              />
            </PlusWrap>  
          </C2>
        </Qrow>
        <Div/>
      </Row2>
      <Row3>
      <Qrow>
          <C1>
            <SubFAQQuestion more={more[2]}>
              {WebData[2].question}
            </SubFAQQuestion>
            <SubFAQAnswer more={more[2]}>
              {WebData[2].answer}
            </SubFAQAnswer>
          </C1>
          <C2>
            <PlusWrap onClick={() => {
                more[2] ? outMouseClick(2) : isMouseClick(2);
              }}
              more={more[2]}>
              <Plus src={more[2] === true ? minus : plus}
              />
            </PlusWrap>  
          </C2>
        </Qrow>
        <Div/>
      </Row3>
      <Row4>
      <Qrow>
          <C1>
            <SubFAQQuestion more={more[3]}>
              {WebData[3].question}
            </SubFAQQuestion>
            <SubFAQAnswer more={more[3]}>
              {WebData[3].answer}
            </SubFAQAnswer>
          </C1>
          <C2>
            <PlusWrap onClick={() => {
                more[3] ? outMouseClick(3) : isMouseClick(3);
              }}
              more={more[3]}>
              <Plus src={more[3] === true ? minus : plus}
              />
            </PlusWrap>  
          </C2>
        </Qrow>
        <Div/>
      </Row4>
      <Row5>
      <Qrow>
          <C1>
            <SubFAQQuestion more={more[4]}>
              {WebData[4].question}
            </SubFAQQuestion>
            <SubFAQAnswer more={more[4]}>
              {WebData[4].answer}
            </SubFAQAnswer>
          </C1>
          <C2>
            <PlusWrap onClick={() => {
                more[4] ? outMouseClick(4) : isMouseClick(4);
              }}
              more={more[4]}>
              <Plus src={more[4] === true ? minus : plus}
              />
            </PlusWrap>  
          </C2>
        </Qrow>
        <Div/>
      </Row5>
      <Row6>
      <Qrow>
          <C1>
            <SubFAQQuestion more={more[5]}>
              {WebData[5].question}
            </SubFAQQuestion>
            <SubFAQAnswer more={more[5]}>
              {WebData[5].answer}
            </SubFAQAnswer>
          </C1>
          <C2>
            <PlusWrap onClick={() => {
                more[5] ? outMouseClick(5) : isMouseClick(5);
              }}
              more={more[5]}>
              <Plus src={more[5] === true ? minus : plus}
              />
            </PlusWrap>  
          </C2>
        </Qrow>
        <TextBoxDiv/>
      </Row6>
  </QuestionCol>
</QuestionWrap>
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
    <QuestionWrap>
    <QuestionCol>
      <Row1>
        <Qrow>
          <C1>
            <TextBoxDiv/>
            <SubFAQQuestion more={more[0]}>
              {AppData[0].question}
            </SubFAQQuestion>
            <SubFAQAnswer more={more[0]}>
              {AppData[0].answer}
            </SubFAQAnswer>
          </C1>
          <C2>
            <PlusWrap onClick={() => {
                more[0] ? outMouseClick(0) : isMouseClick(0);
              }}
              more={more[0]}>
              <Plus src={more[0] === true ? minus : plus} />
            </PlusWrap>  
          </C2>
        </Qrow>
        <Div/>                
      </Row1>
      <Row2>
      <Qrow>
          <C1>
            <SubFAQQuestion more={more[1]}>
              {AppData[1].question}
            </SubFAQQuestion>
            <SubFAQAnswer more={more[1]}>
              {AppData[1].answer}
            </SubFAQAnswer>
          </C1>
          <C2>
            <PlusWrap onClick={() => {
                more[1] ? outMouseClick(1) : isMouseClick(1);
              }}
              more={more[1]}>
              <Plus src={more[1] === true ? minus : plus}
              />
            </PlusWrap>  
          </C2>
        </Qrow>
        <Div/>
      </Row2>
      <Row3>
      <Qrow>
          <C1>
            <SubFAQQuestion more={more[2]}>
              {AppData[2].question}
            </SubFAQQuestion>
            <SubFAQAnswer more={more[2]}>
              {AppData[2].answer}
            </SubFAQAnswer>
          </C1>
          <C2>
            <PlusWrap onClick={() => {
                more[2] ? outMouseClick(2) : isMouseClick(2);
              }}
              more={more[2]}>
              <Plus src={more[2] === true ? minus : plus}
              />
            </PlusWrap>  
          </C2>
        </Qrow>
        <Div/>
      </Row3>
      <Row4>
      <Qrow>
          <C1>
            <SubFAQQuestion more={more[3]}>
              {AppData[3].question}
            </SubFAQQuestion>
            <SubFAQAnswer more={more[3]}>
              {AppData[3].answer}
            </SubFAQAnswer>
          </C1>
          <C2>
            <PlusWrap onClick={() => {
                more[3] ? outMouseClick(3) : isMouseClick(3);
              }}
              more={more[3]}>
              <Plus src={more[3] === true ? minus : plus}
              />
            </PlusWrap>  
          </C2>
        </Qrow>
        <Div/>
      </Row4>
      <Row5>
      <Qrow>
          <C1>
            <SubFAQQuestion more={more[4]}>
              {AppData[4].question}
            </SubFAQQuestion>
            <SubFAQAnswer more={more[4]}>
              {AppData[4].answer}
            </SubFAQAnswer>
          </C1>
          <C2>
            <PlusWrap onClick={() => {
                more[4] ? outMouseClick(4) : isMouseClick(4);
              }}
              more={more[4]}>
              <Plus src={more[4] === true ? minus : plus}
              />
            </PlusWrap>  
          </C2>
        </Qrow>
        <Div/>
      </Row5>
      <Row6>
      <Qrow>
          <C1>
            <SubFAQQuestion more={more[5]}>
              {AppData[5].question}
            </SubFAQQuestion>
            <SubFAQAnswer more={more[5]}>
              {AppData[5].answer}
            </SubFAQAnswer>
          </C1>
          <C2>
            <PlusWrap onClick={() => {
                more[5] ? outMouseClick(5) : isMouseClick(5);
              }}
              more={more[5]}>
              <Plus src={more[5] === true ? minus : plus}
              />
            </PlusWrap>  
          </C2>
        </Qrow>
        <TextBoxDiv/>
      </Row6>
  </QuestionCol>
</QuestionWrap>
  );
}
export default FAQ;
