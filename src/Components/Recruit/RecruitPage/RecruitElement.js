import styled from "styled-components";

export const SubRecruitContainer = styled.div`
  display: flex;
  background: #fafafa;
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
  overflow: hidden;
  scroll-snap-align: start;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
`;
export const SubRecruitWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1650px;
  margin: 35px 30px 0 30px;
`;

export const SubRecruitRow = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  /* align-items: center; */
  grid-template-areas: "col1 col1 col2 col2 col2 col2 col2 col2 col2 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1 col1 col1 col1 col1 col1 col1 col1 col1" "col2 col2 col2 col2 col2 col2 col2 col2 col2 col2";
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0;
  grid-area: col2;
`;

export const RecruitContents = styled.div`
  z-index: 3;
  max-width: 1200px;
  /* position: absolute; */
  /* bottom: 400px; */
  /* padding: 0 24px; */
  /* display: flex; */
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
export const SubRecruitTitle = styled.div`
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

export const SubRecruitTextBox = styled.div`
  max-width: 1366px;
  margin: 150px 0 0px 50px;
  background: rgba(255, 255, 255, 0.79);

  box-shadow: 0px 7px 22px rgba(20, 20, 43, 0.05);
  border-radius: 18px;

  @media screen and (max-width: 768px) {
    margin: 30px 0 0 0;
  }
`;

export const RecruitTitleWrap = styled.div`
  display: grid;
`;

export const RecruitListRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* align-items: center; */
  grid-template-areas: "row1 row1 row1" "row2 row2 row2" "row3 row3 row3";

  @media screen and (max-width: 768px) {
    grid-template-areas: "row1 row2 row3";
  }
`;
export const SubRecruitFront = styled.div`
  grid-area: row1;
  max-width: ${({ tab }) => (tab === 0 ? 90 : 88)}px;
  margin: 70px 0 20px 50px;

  font-family: "Roboto Medium";
  font-style: normal;

  font-weight: ${({ tab }) => (tab === 0 ? 600 : 500)};
  font-size: 20px;
  line-height: 150%;
  /* identical to box height, or 30px */

  color: ${({ tab }) => (tab === 0 ? "#e02f36" : "#666666")};

  &:hover {
    max-width: 90px;

    font-family: "Roboto Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 30px */

    color: #e02f36;
  }
  @media screen and (max-width: 768px) {
    margin: 40px 40px 0 30px;
  }
`;

export const SubRecruitBack = styled.div`
  grid-area: row2;
  max-width: ${({ tab }) => (tab === 1 ? 90 : 88)}px;
  margin: 10px 0 20px 50px;

  font-family: "Roboto Medium";
  font-style: normal;
  font-weight: ${({ tab }) => (tab === 1 ? 600 : 500)};
  font-size: 20px;
  line-height: 150%;

  color: ${({ tab }) => (tab === 1 ? "#e02f36" : "#666666")};

  &:hover {
    max-width: 90px;

    font-family: "Roboto Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 30px */

    color: #e02f36;
  }
  @media screen and (max-width: 768px) {
    margin: 40px 40px 0 30px;
  }
`;

export const SubRecruitDesigner = styled.div`
  grid-area: row3;
  max-width: ${({ tab }) => (tab === 2 ? 90 : 88)}px;
  margin: 10px 0 0px 50px;

  font-family: "Roboto Medium";
  font-style: normal;
  font-weight: ${({ tab }) => (tab === 2 ? 600 : 500)};
  font-size: 20px;
  line-height: 150%;

  color: ${({ tab }) => (tab === 2 ? "#e02f36" : "#666666")};

  &:hover {
    max-width: 90px;

    font-family: "Roboto Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 30px */

    color: #e02f36;
  }
  @media screen and (max-width: 768px) {
    margin: 40px 40px 0px 30px;
  }
`;

export const SubRecruitTBRow = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  /* align-items: center; */
  grid-template-areas: "c1 c1 c1 c1 c2 c2 c2 c3 c3 c3";

  @media screen and (max-width: 768px) {
    grid-template-areas: "";
  }
`;
export const C1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: c1;
`;
export const C2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: c2;
`;
export const C3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: c3;
`;

export const SubRecruitTitle2 = styled.div`
  max-width: 656px;
  margin: 50px 0 20px 50px;
  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;

  color: #e02f36;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    margin: 30px 0 20px 30px;
  }
`;

export const SubRecruitDetail = styled.div`
  max-width: 656px;
  margin: 0 0 150px 50px;

  font-family: "NotoSans Bold";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;

  letter-spacing: -0.008em;

  color: #666666;

  @media screen and (max-width: 768px) {
    font-size: 13px;
    margin: 0px 0 50px 30px;
  }
`;

export const SubRecruitDo = styled.div`
  max-width: 108.58px;
  margin: 0 20px 20px 35px;

  font-family: "NotoSans Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;

  color: #e02f36;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin: 0px 0 20px 15px;
  }
`;
export const SubRecruitDoDetail = styled.div`
  max-width: 453px;
  margin: 0 10px 20px 35px;

  font-family: "NotoSans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.008em;

  color: #333333;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 0px 0 20px 15px;
  }
`;

export const SubRecruitWho = styled.div`
  max-width: 111.25px;
  margin: 0 20px 20px 50px;

  font-family: "NotoSans Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;

  color: #e02f36;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin: 0px 0 20px 15px;
  }
`;
export const SubRecruitList = styled.ul`
  max-width: 380.86;
  margin: 0 20px 20px 30px;

  font-family: "NotoSans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.008em;

  color: #333333;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 0px 0 20px -10px;
  }
`;
export const SubRecruitSpecial = styled.div`
  max-width: 128px;
  margin: 0 20px 20px 35px;

  font-family: "NotoSans Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;

  color: #e02f36;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin: 0px 0 20px 15px;
  }
`;
export const SubRecruitList2 = styled.ul`
  max-width: 380px;
  margin: 0 20px 20px 10px;

  font-family: "Noto Sans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.008em;

  color: #333333;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 0px 0 20px -10px;
  }
`;

export const RecruitBtnWrapper = styled.div`
  height: 40px;
  display: flex;

  margin: 90px 0 70px 30px;

  @media screen and (max-width: 768px) {
    margin: 90px 0 50px 10px;
  }
`;
