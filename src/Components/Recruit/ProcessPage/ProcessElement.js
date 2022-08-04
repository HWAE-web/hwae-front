import styled from "styled-components";
export const SubProcessContainer = styled.div`
  background: #ffffff;
  color: #ffffff;
  height: 100vh;
  // width: 100wh;
  scroll-snap-align: start;

  @media screen and (max-width: 768px) {
    /* padding: 100px 0; */
  }
`;
export const SubProcessBg = styled.div`
  height: 100vh;
  width: 100wh;
  background: #ffffff;
`;

export const SubProcessWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1580px;
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  /* padding: 0 24px; */
  justify-content: center;
  align-items: center;
`;
export const SubProcessMainTitle = styled.div`
  /* Recruiting Process */
  position: absolute;
  // width: 613px;
  // height: 73px;
  // left: 186.88px;
  // top: 237.75px;
  width: 47.89vw;
  height: 6vw;
  left: 9.6vw;
  top: 15vh;
  margin: 0;

  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 61px;
  line-height: 120%;
  /* or 73px */

  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  text-transform: capitalize;

  /* 헤드라인 */

  color: #333333;

  @media screen and (max-width: 768px) {
    font-size: 47px;
    width: 70vw;
    height: 6vw;
    left: 9.6vw;
    top: 13vh;
  }
`;
export const SubProcessMainDetail = styled.div`
  position: absolute;
  // width: 505px;
  // height: 154px;
  // left: 187px;
  // top: 361px;
  margin: 0;
  width: 29vw;
  height: 8vw;
  left: 9.9vw;
  top: 28vh;
  /* 18/28 */

  font-family: "Noto Sans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
  /* or 156% */

  letter-spacing: -0.008em;

  /* 본문 */

  color: #666666;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    width: 82vw;
    height: 6vw;
    left: 10vw;
    top: 20vh;
  }
`;

export const SubProcessCalendar = styled.img`
  position: absolute;
  // width: 392.5px;
  // height: 307.5px;
  // left: 84.5px;
  // top: 609.5px;
  width: 20vw;
  height: 20vw;
  left: 5vw;
  top: 50vh;

  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
`;
// 모바일에서는 캘린더 이미지 없앰
export const SubProcessTitle = styled.div`
  position: absolute;
  // width: 89px;
  // height: 66px;
  // left: 43.5px;
  // top: 42.75px;
  width: 50vw;
  height: 10vw;
  left: 2vw;
  top: 5vh;
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
    font-size: 60px;
    width: 50vw;
    height: 6vw;
    left: 4vw;
    top: 2vh;
  }
`;

export const SubProcessTitle1 = styled.div`
  position: absolute;
  // width: 177px;
  // height: 35.75px;
  // left: 43.5px;
  // top: 223px;
  width: 50vw;
  height: 10vw;
  left: 2vw;
  top: 15vh;

  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  letter-spacing: -0.8px;

  /* 헤드라인 */

  color: #333333;
  @media screen and (max-width: 768px) {
    font-size: 25px;
    width: 50vw;
    height: 6vw;
    left: 4vw;
    top: 16vh;
  }
`;
export const SubProcessDetail = styled.div`
  position: absolute;
  // width: 271.07px;
  // height: 47.25px;
  // left: 43.5px;
  // top: 276.75px;
  width: 50vw;
  height: 10vw;
  left: 2vw;
  top: 30vh;

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
    width: 50vw;
    height: 6vw;
    left: 4vw;
    top: 23vh;
  }
`;
export const SubProcessFirst = styled.div`
  /* Rectangle 4279 */
  position: absolute;
  // width: 345px;
  // height: 397px;
  // left: 930.5px;
  // top: 113.25px;
  width: 18vw;
  height: 20vw;
  left: 48.2vw;
  top: 14.5vh;
  margin: 0;
  background: #ffffff;
  /* 연한 그림자 */

  box-shadow: 0px 7px 22px rgba(20, 20, 43, 0.05);
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    width: 32vw;
    height: 36vw;
    left: 16vw;
    top: 29vh;
  }
`;
export const SubProcessSecond = styled.div`
  /* Rectangle 4279 */
  position: absolute;
  // width: 345px;
  // height: 397px;
  // left: 1311.5px;
  // top: 191.5px;
  width: 18vw;
  height: 20vw;
  left: 68vw;
  top: 23vh;
  /* 화이트 */
  margin: 0;

  background: #ffffff;
  box-shadow: 0px 7px 22px rgba(20, 20, 43, 0.05);
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    width: 32vw;
    height: 36vw;
    left: 52vw;
    top: 30vh;
  }
`;
export const SubProcessThird = styled.div`
  /* Rectangle 4279 */
  position: absolute;
  // width: 345px;
  // height: 397px;
  // left: 930.5px;
  // top: 544px;
  width: 18vw;
  height: 20vw;
  left: 48.2vw;
  top: 62vh;
  /* 화이트 */
  margin: 0;

  background: #ffffff;
  box-shadow: 0px 7px 22px rgba(20, 20, 43, 0.05);
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    width: 32vw;
    height: 36vw;
    left: 20vw;
    top: 64vh;
  }
`;
export const SubProcessFourth = styled.div`
  /* Rectangle 4279 */
  position: absolute;
  // width: 345px;
  // height: 397px;
  // left: 1311.5px;
  // top: 622.25px;
  width: 18vw;
  height: 20vw;
  left: 68vw;
  top: 70.5vh;
  /* 화이트 */
  margin: 0;
  background: #ffffff;
  box-shadow: 0px 7px 22px rgba(20, 20, 43, 0.05);
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    width: 32vw;
    height: 36vw;
    left: 56vw;
    top: 66vh;
  }
`;
