import styled from "styled-components";
import { Link } from "react-scroll";

export const SubHomeContainer = styled.div`
  background: #f8f8fa;
  display: grid;

  padding: 0 30px;
  height: 100vh;
  // width: 100vw;

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

export const SubHomeWrapper = styled.div`
  display: grid;
  /* display: flex; */
  z-index: 1;
  height: 100%;
  width: 93%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5%;
  margin-bottom: auto;
`;

export const SubHomeRow = styled.div`
  
  display: grid;
  // grid-template-columns: repeat(10, 1fr);
  // /* align-items: center; */
  // grid-template-areas: "col1 col1 col1 col1 col2 col2 col2 col2 col2 col2";
  grid-template-columns: 1fr, 1fr;
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1 col1 col1 col1 col1 col1 col1 col1 col1" "col2 col2 col2 col2 col2 col2 col2 col2 col2 col2";
  }

  
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  
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
`;

export const SubHomeTitle = styled.div`
  max-width: 572px;
  margin-top: 150px;
  margin-left: 10px;
  margin-bottom: 30px;
  maring-right: 0;
  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 86px;
  line-height: 105%;
  
  color: #333333;

  @media screen and (max-width: 768px) {
    font-size: 75px;
    text-align: center;
  }
`;
export const SubHomeTitle2 = styled.div`

  max-width: 400px;
  margin-bottom: 40px;
  margin-left: 10px;


  font-family: "NotoSans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  letter-spacing: -0.008em;
  color: #666666;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 70vw;
    height: 20vw;
    left: 19vw;
    top: 40vh;
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
  max-width:1000px;
  height: 70%;

  @media screen and (max-width: 768px) {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SubHomeImg = styled.img`
  width: 110%
  // algin-items: center;
  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 80vw;
    left: 6vw;
    top: 38vh;
  }
`;
export const SubHomeRR = styled.img`
  // position: absolute;
  // width: 40px;
  // height: 40px;
  // left: 940px;
  // top: 959px;
  width: 2vww;
  height: 2vw;
  left: 50vw;
  top: 90vh;

  @media screen and (max-width: 768px) {
    // width: 4vw;
    // height: 4vw;
    // left: 50vw;
    // top: 94vh;
    visibility: hidden;
  }
`;
