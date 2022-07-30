import styled from "styled-components";

export const SubRecruitBg = styled.div`
  /* 회색배경 */
  position: absolute;
  width: 1920px;
  height: 1080px;
  left: 0px;
  top: 0px;

  background: #fafafa;
`;
export const SubRecruitTitle = styled.div`
  /* Recruit */
  position: absolute;
  width: 156px;
  height: 56px;
  left: 191px;
  top: 108px;

  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.2px;
  text-transform: capitalize;

  /* 헤드라인 */

  color: #333333;
`;
export const SubRecruitTextBox = styled.div`
  /* 텍스트 박스 */
  position: absolute;
  left: 23.68%;
  right: 5.16%;
  top: 21.48%;
  bottom: 10.93%;

  background: rgba(255, 255, 255, 0.79);
  /* 연한 그림자 */

  box-shadow: 0px 7px 22px rgba(20, 20, 43, 0.05);
  border-radius: 18px;
`;
export const SubRecruitFront = styled.div`
  position: absolute;
  width: ${({ tab }) => (tab === 0 ? 90 : 88)}px;
  height: 30px;
  left: 191px;
  top: 275px;

  font-family: "Roboto Medium";
  font-style: normal;
  font-weight: ${({ tab }) => (tab === 0 ? 600 : 500)};
  font-size: 20px;
  line-height: 150%;
  /* identical to box height, or 30px */

  color: ${({ tab }) => (tab === 0 ? "#e02f36" : "#666666")};

  &:hover {
    position: absolute;
    width: 90px;
    height: 30px;
    left: 191px;
    top: 275px;

    font-family: "Roboto Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 30px */

    color: #e02f36;
  }
`;

export const SubRecruitBack = styled.div`
  position: absolute;
  width: ${({ tab }) => (tab === 1 ? 90 : 88)}px;
  height: 30px;
  left: 191px;
  top: 353px;

  font-family: "Roboto Medium";
  font-style: normal;
  font-weight: ${({ tab }) => (tab === 1 ? 600 : 500)};
  font-size: 20px;
  line-height: 150%;

  color: ${({ tab }) => (tab === 1 ? "#e02f36" : "#666666")};

  &:hover {
    position: absolute;
    width: 90px;
    height: 30px;
    left: 191px;
    top: 353px;

    font-family: "Roboto Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 30px */

    color: #e02f36;
  }
`;

export const SubRecruitDesigner = styled.div`
  position: absolute;
  width: ${({ tab }) => (tab === 2 ? 90 : 88)}px;
  height: 30px;
  left: 191px;
  top: 431px;

  font-family: "Roboto Medium";
  font-style: normal;
  font-weight: ${({ tab }) => (tab === 2 ? 600 : 500)};
  font-size: 20px;
  line-height: 150%;

  color: ${({ tab }) => (tab === 2 ? "#e02f36" : "#666666")};

  &:hover {
    position: absolute;
    width: 90px;
    height: 30px;
    left: 191px;
    top: 431px;

    font-family: "Roboto Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    /* identical to box height, or 30px */

    color: #e02f36;
  }
`;

export const SubRecruitTitle2 = styled.div`
  position: absolute;
  width: 656px;
  height: 58px;
  left: 70.29px;
  top: 51px;

  font-family: "Roboto Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;

  color: #e02f36;
`;

export const SubRecruitDetail = styled.div`
  position: absolute;
  width: 656px;
  height: 66px;
  left: 69.83px;
  top: 123px;

  font-family: "Noto Sans Bold";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;

  letter-spacing: -0.008em;

  color: #666666;
`;
export const SubRecruitDo = styled.div`
  position: absolute;
  width: 108.58px;
  height: 31px;
  left: 69.83px;
  top: 311.05px;

  font-family: "Noto Sans Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;

  color: #e02f36;
`;
export const SubRecruitDoDetail = styled.div`
  position: absolute;
  width: 453.33px;
  height: 102.89px;
  left: 69.97px;
  top: 372.05px;

  font-family: "Noto Sans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.008em;

  color: #333333;
`;
export const SubRecruitWho = styled.div`
  position: absolute;
  width: 111.25px;
  height: 36px;
  left: 547.07px;
  top: 311.05px;

  font-family: "Noto Sans Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;

  color: #e02f36;
`;
export const SubRecruitList = styled.ul`
  position: absolute;
  width: 380.86px;
  height: 69.14px;
  left: 530.52px;
  top: 353.05px;
  font-family: "Noto Sans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.008em;

  color: #333333;
`;
export const SubRecruitSpecial = styled.div`
  position: absolute;
  width: 127.92px;
  height: 31px;
  left: 954.14px;
  top: 311.05px;

  font-family: "Noto Sans Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;

  color: #e02f36;
`;
export const SubRecruitList2 = styled.ul`
  position: absolute;
  width: 380.86px;
  height: 69.14px;
  left: 939.14px;
  top: 353.05px;
  font-family: "Noto Sans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: -0.008em;

  color: #333333;
`;
export const SubRecruitBtn = styled.div`
  position: absolute;
  left: 69.39px;
  top: 559.67px;
  width: 170px;
  height: 48px;

  background: #ff2d46;
  box-shadow: 0px 2.80141px 11.2057px rgba(255, 45, 70, 0.2);
  border-radius: 52.293px;

  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: 800px;
  font-size: 17px;
  line-height: 17px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
`;
