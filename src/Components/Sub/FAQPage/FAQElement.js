import styled from "styled-components";

export const SubFAQContainer = styled.div`
  background: #fafafa;
  display: flex;
  height: 100vh;
  position: relative;
  z-index: 1;
  scroll-snap-align: start;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
  }
`;

export const SubFAQWrapper = styled.div`
  display: grid;
  z-index: 3;
  height: 100%;
  width: 100%;
  max-width: 1650px;
  margin: 35px 30px 0 30px;
  @media screen and (max-width: 768px) {
    margin: 0px 30px 0 30px;
  }
`;
export const SubFAQRow = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas: "col1 col1 col2 col2 col2 col2 col2 col2 col2 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1 col1 col1 col1 col1 col1 col1 col1 col1" "col2 col2 col2 col2 col2 col2 col2 col2 col2 col2";
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const FAQContents = styled.div`
  z-index: 3;
  max-width: 1200px;

  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    height: 40px;
    margin-bottom: 130px;
  }
`;
export const SubFAQTitle = styled.div`
  max-width: 156px;
  margin: 90px 0 0 40px;
  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.2px;
  text-transform: capitalize;

  color: #333333;
  @media screen and (max-width: 768px) {
    margin: 40px 0 0 0;
    text-align: center;
  }
`;

export const SubFAQTextBox = styled.div`
  max-width: 1366px;
  margin: 120px 0 0px 50px;

  background: rgba(255, 255, 255, 0.79);

  box-shadow: 0px 7px 22px rgba(20, 20, 43, 0.05);
  border-radius: 18px;

  @media screen and (max-width: 768px) {
    margin: 10px 0 0 0;
  }
`;

export const FAQListRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* align-items: center; */
  grid-template-areas: "row1 row1 row1" "row2 row2 row2" "row3 row3 row3";

  @media screen and (max-width: 768px) {
    grid-template-areas: "row1 row2 row3";
  }
`;

export const SubFAQAll = styled.div`
  grid-area: row1;
  max-width: ${({ tab }) => (tab === 0 ? 90 : 88)}px;
  margin: 70px 0 20px 50px;

  font-family: "Roboto Medium";
  font-style: normal;

  font-weight: ${({ tab }) => (tab === 0 ? 600 : 500)};
  font-size: 22px;
  line-height: 150%;
  /* identical to box height, or 30px */

  color: ${({ tab }) => (tab === 0 ? "#E02F36" : "#666666")};

  &:hover {
    max-width: 90px;

    font-family: "Roboto Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 150%;

    color: #e02f36;
  }

  @media screen and (max-width: 768px) {
    margin: 40px 40px 0px 30px;
  }
`;

export const SubFAQWeb = styled.div`
  grid-area: row2;
  max-width: ${({ tab }) => (tab === 1 ? 90 : 88)}px;
  margin: 10px 0 20px 50px;

  font-family: "Roboto Medium";
  font-style: normal;
  font-weight: ${({ tab }) => (tab === 1 ? 600 : 500)};
  font-size: 22px;
  line-height: 150%;

  color: ${({ tab }) => (tab === 1 ? "#E02F36" : "#666666")};

  &:hover {
    max-width: 90px;

    font-family: "Roboto Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 150%;

    color: #e02f36;
  }

  @media screen and (max-width: 768px) {
    margin: 40px 40px 0px 30px;
  }
`;

export const SubFAQApp = styled.div`
  grid-area: row3;
  max-width: ${({ tab }) => (tab === 2 ? 90 : 88)}px;
  margin: 10px 0 0px 50px;

  font-family: "Roboto Medium";
  font-style: normal;
  font-weight: ${({ tab }) => (tab === 2 ? 600 : 500)};
  font-size: 22px;
  line-height: 150%;

  color: ${({ tab }) => (tab === 2 ? "#E02F36" : "#666666")};

  &:hover {
    max-width: 90px;

    font-family: "Roboto Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 150%;

    color: #e02f36;
  }
  @media screen and (max-width: 768px) {
    margin: 40px 40px 0px 30px;
  }
`;

export const QuestionWrap = styled.div`
  display: grid;
  z-index: 3;
  height: 100%;
  width: 100%;
  max-width: 1366px;
  margin: 10px 30px 10px 30px;
  @media screen and (max-width: 768px) {
    margin: 0;
    max-width: 800px;
  }
`;

export const QuestionCol = styled.div`
  display: grid;
  grid-template-rows: 115px 115px 115px 115px 115px 115px;
  grid-template-areas: "row1" "row2" "row3" "row4" "row5" "row6";
  @media screen and (max-width: 768px) {
    grid-template-rows: 100px 100px 100px 100px 100px 100px;
  }
`;

export const Row1 = styled.div`
  margin-bottom: 5px;
  grid-area: row1;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const Row2 = styled.div`
  margin-bottom: 5px;
  grid-area: row2;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const Row3 = styled.div`
  margin-bottom: 5px;
  grid-area: row3;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const Row4 = styled.div`
  margin-bottom: 5px;
  grid-area: row4;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const Row5 = styled.div`
  margin-bottom: 5px;
  grid-area: row5;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const Row6 = styled.div`
  margin-bottom: 5px;
  grid-area: row6;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
export const SubFAQQuestion = styled.div`
  display: grid;
  max-width: 453px;
  margin: ${({ more }) =>
    more === true ? "27px 30px 0px 100px" : "43px 30px 0px 100px"};
  font-family: "NotoSans Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;

  letter-spacing: -0.008em;

  color: ${({ more }) => (more === true ? "#e02f36" : "#666666")};

  @media screen and (max-width: 768px) {
    max-width: 500px;
    font-size: 18px;
    margin: ${({ more })=>
      more === true ? "14px 0px 0px 40px" : "27px 0px 0px 50px"};
  }
`;

export const SubFAQAnswer = styled.div`
  display: ${({ more }) => (more === true ? "" : "none")};
  margin: ${({ more }) => (more === true ? "10px 20px 0px 100px" : "0")};

  max-width: 878px;
  font-family: "NotoSans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 27px;
  letter-spacing: -0.008em;

  color: #999999;

  @media screen and (max-width: 768px) {
    max-width: 500px;
    margin: ${({ more }) =>
      more === true ? "5px 0px 0px 40px" : "0"};
  }
`;

export const Div = styled.div`
  max-width: 1060px;
  margin: ${({ more }) =>
    more === true ? "22px 100px 0px 70px" : "42px 100px 0 70px"};

  border: 0.1px solid #d9dbe9;

  @media screen and (max-width: 768px) {
    max-width: 800px;
    margin: ${({ more }) =>
    more === true ? "18px 20px 0px 20px" : "35px 20px 0 20px"};
  }
`;
export const Qrow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "c1 c2";
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-areas: "c1 c1 c1 c1 c1 c1 c1 c1 c1 c2 c2";
  }
`;

export const C1 = styled.div`
  margin: 0;
  grid-area: c1;
  @media screen and (max-width: 768px) {
    margin: 10px 10px 0 10px;
  }
`;
export const C2 = styled.div`
  margin: 0;
  grid-area: c2;
  @media screen and (max-width: 768px) {

}
`;

export const PlusWrap = styled.div`
  z-index: 5;
  max-width: 30px;
  height: 100%;
  margin: ${({ more }) =>
    more === true ? "43px 100px 20px 450px" : "50px 100px 0px 450px"};
  @media screen and (max-width: 768px) {
    margin: ${({ more }) =>
    more === true ? "37px 100px 0px 00px" : "43px 100px 0px 0px"};  }
`;

export const Plus = styled.img`
  max-width: 17.5px;
  margin: 0 10 0px 100px;
`;
