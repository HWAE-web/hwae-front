import styled from "styled-components";
import { Link } from "react-scroll";

export const SubHomeContainer = styled.div`
  display: flex;
  background: #f8f8fa;
  height: 100vh;
  width: 100%;
`;

export const SubHomeWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 75%;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  justify-content: center;
  align-items: center;
`;

export const SubHomeRow = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  /* align-items: center; */
  grid-template-areas: "col1 col1 col1 col1 col2 col2 col2 col2 col2 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1 col1 col1 col1 col1 col1 col1 col1 col1" "col2 col2 col2 col2 col2 col2 col2 col2 col2 col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Col2Wrap = styled.div`
  max-width: 900px;
  padding-top: 0;
  display: flex;
`;

export const HomeContents = styled.div`
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
  }
`;

export const SubHomeTitle = styled.div`
  max-width: 572px;
  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 86px;
  line-height: 105%;

  color: #333333;

  @media screen and (max-width: 768px) {
    font-size: 60px;
    text-align: center;
  }
`;
export const SubHomeTitle2 = styled.div`
  max-width: 400px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-top: 20px;
  font-family: "NotoSans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  letter-spacing: -0.008em;
  color: #666666;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    text-align: center;
  }
`;

export const HomeBtnWrapper = styled.div`
  height: 44px;
  display: flex;
  /* align-items: center; */
  /* margin-top: 20px; */
  margin-left: 10px;
`;

export const HomeImgWrap = styled.div`
  /* padding-right: 10%; */
  z-index: 5;
  max-width: 800px;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SubHomeImg = styled.img`
  width: 110%; // algin-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const SubHomeRR = styled.img`
  cursor: pointer;
  margin-left: 47%;

  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
`;
