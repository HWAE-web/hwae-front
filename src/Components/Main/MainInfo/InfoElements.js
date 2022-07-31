import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: #fff;
  height: 100vh;

  @media screen and (max-width: 768px) {
    /* padding: 100px 0; */
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1580px;
  margin-right: auto;
  margin-left: auto;
  /* padding: 0 24px; */
  justify-content: center;
`;

export const InfoRow = styled.div`
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

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  /* padding-bottom: 60px; */
`;

export const About = styled.div`
  padding-left: 3px;
  margin-bottom: 5px;
  color: #333333;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  /* margin-bottom: 16px; */
`;

export const Heading = styled.div`
  /* color: black; */
  margin-bottom: 65px;
  font-family: "Roboto Medium";
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #e02f36;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.div`
  max-width: 650px;
  font-family: "NotoSans Regular";
  margin-bottom: 44px;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */

  letter-spacing: -0.008em;
  color: #666666;
`;

export const Desc = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  /* justify-content: center; */
`;

export const CheckDesc = styled.div`
  color: black;
  padding-left: 15px;
  font-family: "NotoSans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;

  /* Paragraph Color */

  color: #6e6e6e;
`;

export const CheckWrap = styled.img`
  display: flex;
`;

export const ImgWrap = styled.div`
  z-index: 5;
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
