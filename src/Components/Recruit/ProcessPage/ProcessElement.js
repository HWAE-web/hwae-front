import styled from "styled-components";

export const SubProcessContainer = styled.div`
  background: #ffffff;
  color: #ffffff;
  height: 100vh;
  width: 100%;
  display: flex;
  scroll-snap-align: start;

  @media screen and (max-width: 768px) {
    /* padding: 100px 0; */
  }
`;

export const SubProcessBg = styled.div`
  height: 80vh;
  // width: 100wh;
  background: #ffffff;
`;

export const SubProcessWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 80%;
  width: 100%;
  max-width: 1580px;
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  justify-content: center;
  align-items: center;
`;

export const SubProcessRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* align-items: center; */
  grid-template-areas: "col1 col1 col2 col3";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1 col1 col1" "col2 col2 col3 col3"
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  display: flex;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Column3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col3;
`;

export const ColContents1 = styled.div`
  z-index: 3;
  /* max-width: 1200px; */
  /* position: absolute; */
  /* bottom: 400px; */
  /* padding: 0 24px; */
  /* display: flex; */
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0 15px;
  }
`
export const ColContents2 = styled.div`
  z-index: 3;
  /* max-width: 1200px; */
  /* position: absolute; */
  /* bottom: 400px; */
  /* padding: 0 24px; */
  /* display: flex; */
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`
export const ColContents3 = styled.div`
  z-index: 3;
  /* max-width: 1200px; */
  /* position: absolute; */
  /* bottom: 400px; */
  /* padding: 0 24px; */
  /* display: flex; */
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`
export const SubProcessMainTitle = styled.div`
  max-width: 613px;
  margin: 40px 0 30px 20px;

  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 120%;
  /* or 73px */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  /* 헤드라인 */

  color: #333333;

  @media screen and (max-width: 768px) {
    margin: 0 0 30px 20px;
    font-size: 50px;
    text-align: center;
  }
`;
export const SubProcessMainDetail = styled.div`
  max-width: 505px;
  margin: 40px 0 190px 21px;

  font-family: "NotoSans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
  /* or 156% */

  letter-spacing: -0.008em;

  /* 본문 */

  color: #666666;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    text-align: center;
    margin: 0;
  }
`;

export const CalendarWrap = styled.div`
  z-index: 5;
  max-width: 555px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const Calendar = styled.img`
  
  width: 80%;
  // margin: 0 100px 0 0;

  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
`;
// 모바일에서는 캘린더 이미지 없앰

export const SubProcessTextBox = styled.div`
  max-width: 345px;
  margin: 0;
  margin-left: 10px;
  background: #ffffff;
  /* 연한 그림자 */

  box-shadow: 0px 7px 22px rgba(20, 20, 43, 0.05);
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    max-width: 300px;
    margin-left: 0;
  }
`;


export const TitleWrap = styled.div`
  padding-top: 10%;
  margin: 0;
`

export const SubProcessTitle = styled.div`

  max-width: 89px;
  margin-right: 0px;
  margin-left: 40px;
  margin-bottom: 70px;
  font-family: "Raleway Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 96px;

  /* or 137% */
  font-feature-settings: "pnum" on, "lnum" on;

  /* red */
  color: #e02f36;
  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin-bottom: 30px;
    margin-left: 30px;
  }
`;

export const SubProcessTitle1 = styled.div`
  
  max-width: 177px;
  margin-left: 40px;
  margin-bottom: 20px;
  margin-right: 0px;

  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  
  letter-spacing: -0.8px;

  /* 헤드라인 */

  color: #333333;
  @media screen and (max-width: 768px) {
    font-size: 23px;
    margin-left: 30px;
  }
`;

export const SubProcessDetail = styled.div`
  
  max-width: 271px;
  margin-left: 40px;
  margin-right: 40px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  /* or 27px */

  letter-spacing: -0.8px;
  text-transform: capitalize;

  /* Text/Body Text */

  color: #666666;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-left: 30px;
  }
`;

export const DetailWrap= styled.div`
  padding-bottom: 15%;
  margin: 0;
`
export const TextBoxDiv = styled.div`
  padding-bottom: 10%;
`
export const TextBoxDiv1 = styled.div`
  padding-bottom: 25%;
`