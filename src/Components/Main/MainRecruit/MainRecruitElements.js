import styled from "styled-components";

export const MainRecruitContainer = styled.div`
  background: blue;
  display: flex;
  /* padding: 0 30px; */
  height: 100vh;
  position: relative;
  z-index: 1;

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

export const MainRecruitBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainRecruitWrapper = styled.div`
  z-index: 3;
  display: grid;
  height: 79%;
  width: 100%;
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  /* padding: 20px 24px; */
  justify-content: center;
  align-items: center;
  /* vertical-align: middle; */
`;

export const LaptopImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 20px; */
`;

export const MainRHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 110%;
  /* or 46px */

  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const MainRP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NotoSans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  text-align: center;
  letter-spacing: -0.8px;

  /* systemGrey/600 */

  color: #757575;
`;

export const ButtonWrapper = styled.div`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
