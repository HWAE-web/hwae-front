import styled from "styled-components";

export const SubHomeContainer = styled.div`
  background: #f8f8fa;
  display: flex;
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

export const SubHomeRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
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

export const SubHomeTitle = styled.div`
  position: absolute;
  // width: 699px;
  // height: 348px;
  //   left: 185px;
  //   top: 225px;
  width: 55vw;
  height: 27vw;
  left: 13vw;
  top: 18vh;
  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 105%;
  margin: 0;

  color: #333333;
  // @media screen and (max-width: 1000px) {
  //   font-size: 80px;
  //   width: 70vw;
  //   height: 20vw;
  //   left: 14vw;
  //   top: 10vh;
  // }
  @media screen and (max-width: 768px) {
    font-size: 75px;
    width: 70vw;
    height: 20vw;
    left: 18vw;
    top: 12vh;
  }
`;
export const SubHomeTitle2 = styled.div`
  position: absolute;
  // width: 457px;
  // height: 72px;
  // left: 190px;
  // top: 573px;
  width: 35.703125vw;
  height: 7px;
  left: 13.2vw;
  top: 55vh;

  font-family: "Noto Sans Regular";
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

export const SubHomeBtn = styled.div`
  position: absolute;
  // width: 144px;
  // height: 48px;
  // left: 191px;
  // top: 680px;
  width: 8vw;
  height: 2.5vw;
  left: 13.3vw;
  top: 65vh;
  background: #ff2d46;
  box-shadow: 0px 2.80141px 11.2057px rgba(255, 45, 70, 0.2);
  border-radius: 52.293px;

  font-family: "Poppins SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 13px;
    width: 15vw;
    height: 5vw;
    left: 70vw;
    top: 41vh;
  }
`;

export const SubHomeImg = styled.img`
  position: absolute;
  // width: 1160px;
  // height: 845px;
  // left: 785px;
  // top: 57px;
  width: 90.625vw;
  height: 40vw;
  left: 27vw;
  top: 4vh;
  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 80vw;
    left: 6vw;
    top: 38vh;
  }
`;
export const SubHomeRR = styled.img`
  position: absolute;
  // width: 40px;
  // height: 40px;
  // left: 940px;
  // top: 959px;
  width: 2vww;
  height: 2vw;
  left: 50vw;
  top: 90vh;

  @media screen and (max-width: 768px) {
    width: 4vw;
    height: 4vw;
    left: 50vw;
    top: 94vh;
  }
`;
