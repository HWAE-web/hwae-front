import styled from "styled-components";

export const SubFAQContainer = styled.div`
    background: #fafafa;
    display: flex;
    /* padding: 0 30px; */
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
`

export const SubFAQWrapper = styled.div`
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
`

export const SubFAQTitle = styled.div`
    position: absolute;
    width: 5.438rem;
    height: 4rem;
    left: 11.938rem;
    top: 6.75rem;

    font-family: 'Roboto Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4rem;
    /* identical to box height, or 133% */

    font-feature-settings: 'pnum' on, 'lnum' on;

    color: #333333;
`

export const SubFAQTextBox = styled.div`
    position: absolute;
    left: 23.91%;
    right: 5.14%;
    top: 21.39%;
    bottom: 5.76%;

    background: #FFFFFF;

    box-shadow: 0px 7px 22px rgba(20, 20, 43, 0.1);
    border-radius: 18px;
`
export const SubFAQAll = styled.div`
    position: absolute;
    width: 88px;
    height: 30px;
    left: 191px;
    top: 275px;

    font-family: 'Roboto Medium';
    font-style: normal;

    font-weight: ${({tab}) => (tab === 0 ? 600 : 500)};
    font-size: 22px;
    line-height: 150%;
    /* identical to box height, or 30px */


    color: ${({tab}) => (tab === 0 ? "#E02F36": "#666666")};
    
    &:hover {
        position: absolute;
        width: 88px;
        height: 30px;
        left: 191px;
        top: 275px;
      
        font-family: 'Roboto Bold';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 150%;
              
        color: #E02F36;
    }
`

export const SubFAQWeb = styled.div`
    position: absolute;
    width: 88px;
    height: 30px;
    left: 191px;
    top: 353px;

    font-family: 'Roboto Medium';
    font-style: normal;
    font-weight: ${({tab}) => (tab === 1 ? 600 : 500)};
    font-size: 22px;
    line-height: 150%;
    
    color: ${({tab}) => (tab === 1 ? "#E02F36": "#666666")};

    &:hover {
        position: absolute;
        width: 88px;
        height: 30px;
        left: 191px;
        top: 353px;
      
        font-family: 'Roboto Bold';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 150%;
  
        color: #E02F36;
    }
`

export const SubFAQApp = styled.div`
    position: absolute;
    width: 85px;
    height: 30px;
    left: 191px;
    top: 431px;

    font-family: 'Roboto Medium';
    font-style: normal;
    font-weight: ${({tab}) => (tab === 2 ? 600 : 500)};
    font-size: 22px;
    line-height: 150%;
    
    color: ${({tab}) => (tab === 2 ? "#E02F36": "#666666")};

    &:hover {
        position: absolute;
        width: 85px;
        height: 30px;
        left: 191px;
        top: 431px;
      
        font-family: 'Roboto Bold';
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 150%;
        
        color: #E02F36;
    }
`
// 이거 반복되는 스타일이라 반응형 바꿀 때 하나만 쓰면 될듯
export const SubFAQQuestion0 = styled.div`
    position: absolute;
    left: 215px;
    right: 693.27px;
    top: 93px;
    bottom: 664.11px;

    /* font-family: 'Spoqa Han Sans Neo Bold'; */
    font-family: 'Noto Sans Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    letter-spacing: -0.008em;
   
    color: #333333;
`
// + 버튼 눌렀을 때 (visible) 그 반대는 hidden
export const SubFAQAnswer0 = styled.div` 
    position: absolute;
    visibility: visible;
    left: 215px;
    right: 269.35px;
    top: 112.1px;
    bottom: 635.49px;

    /* font-family: 'Spoqa Han Sans Neo Regular'; */
    font-family: 'Noto Sans Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
    /* or 150% */

    letter-spacing: -0.008em;

    /* 소제목 */

    color: #999999;
`
export const SubFAQQuestion1 = styled.div`
    position: absolute;
    left: 215px;
    right: 693.27px;
    top: 207px;
    bottom: 550.11px;

    /* font-family: 'Spoqa Han Sans Neo Bold'; */
    font-family: 'Noto Sans Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    letter-spacing: -0.008em;

    color: #333333;
`
// + 버튼 눌렀을 때 (visible) 그 반대는 hidden
export const SubFAQAnswer1 = styled.div`
    position: absolute;
    visibility: visible;
    left: 215px;
    right: 269.35px;
    top: 225px;
    bottom: 518.59px;

    /* font-family: 'Spoqa Han Sans Neo Regular'; */
    font-family: 'Noto Sans Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;

    letter-spacing: -0.008em;

    color: #999999;
`

export const SubFAQQuestion2 = styled.div`
    position: absolute;
    left: 215px;
    right: 693.27px;
    top: 318.14px;
    bottom: 438.97px;

    /* font-family: 'Spoqa Han Sans Neo Bold'; */
    font-family: 'Noto Sans Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    letter-spacing: -0.008em;

    color: #333333;
`
// + 버튼 눌렀을 때 (visible) 그 반대는 hidden
export const SubFAQAnswer2 = styled.div`
    position: absolute;
    visibility: visible;
    left: 215px;
    right: 269.35px;
    top: 339px;
    bottom: 386.59px;
  
    /* font-family: 'Spoqa Han Sans Neo Regular'; */
    font-family: 'Noto Sans Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;

    letter-spacing: -0.008em;
  
    color: #999999;
`
export const SubFAQQuestion3 = styled.div`
    position: absolute;
    left: 215px;
    right: 693.27px;
    top: 429.21px;
    bottom: 327.9px;

    /* font-family: 'Spoqa Han Sans Neo Bold'; */
    font-family: 'Noto Sans Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    letter-spacing: -0.008em;

    color: #333333;
`
// + 버튼 눌렀을 때 (visible) 그 반대는 hidden
export const SubFAQAnswer3 = styled.div`
    position: absolute;
    visibility: visible;
    left: 215px;
    right: 269.35px;
    top: 453px;
    bottom: 266.59px;
  
    /* font-family: 'Spoqa Han Sans Neo Regular'; */
    font-family: 'Noto Sans Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
    /* or 150% */
  
    letter-spacing: -0.008em;
  
    /* 소제목 */
  
    color: #999999;
`
export const SubFAQQuestion4 = styled.div`
    position: absolute;
    left: 215px;
    right: 693.27px;
    top: 543.28px;
    bottom: 213.83px;
  
    /* font-family: 'Spoqa Han Sans Neo Bold'; */
    font-family: 'Noto Sans Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  
    letter-spacing: -0.008em;
  
    color: #333333;
`

// + 버튼 눌렀을 때 (visible) 그 반대는 hidden
export const SubFAQAnswer4 = styled.div`
    position: absolute;
    visibility: visible;
    left: 215px;
    right: 269.35px;
    top: 566px;
    bottom: 163.59px;
  
    /* font-family: 'Spoqa Han Sans Neo Regular'; */
    font-family: 'Noto Sans Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
    /* or 150% */
  
    letter-spacing: -0.008em;
  
    /* 소제목 */
  
    color: #999999;
`

export const SubFAQQuestion5 = styled.div`
    position: absolute;
    left: 215px;
    right: 693.27px;
    top: 657.35px;
    bottom: 99.75px;
  
    /* font-family: 'Spoqa Han Sans Neo Bold'; */
    font-family: 'Noto Sans Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  
    letter-spacing: -0.008em;
  
    color: #333333;
`

// + 버튼 눌렀을 때 (visible) 그 반대는 hidden
export const SubFAQAnswer5 = styled.div`
    position: absolute;
    visibility: visible;
    left: 215px;
    right: 269.35px;
    top: 677px;
    bottom: 48.59px;
  
    /* font-family: 'Spoqa Han Sans Neo Regular'; */
    font-family: 'Noto Sans Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
    /* or 150% */
  
    letter-spacing: -0.008em;
  
    /* 소제목 */
  
    color: #999999;
`
export const div0 = styled.div`
    position: absolute;
    left: 175px;
    right: 125.33px;
    top: 162px;
    bottom: 624.74px;

    border: 0.1px solid #D9DBE9;
`

export const div1 = styled.div`
    position: absolute;
    left: 175px;
    right: 125.33px;
    top: 273.81px;
    bottom: 512.93px;

    border: 0.1px solid #D9DBE9;
`

export const div2 = styled.div`
    position: absolute;
    left: 175px;
    right: 125.33px;
    top: 385.63px;
    bottom: 401.11px;

    border: 0.1px solid #D9DBE9;
`
export const div3 = styled.div`
    position: absolute;
    left: 175px;
    right: 125.33px;
    top: 497.44px;
    bottom: 289.3px;

    border: 0.1px solid #D9DBE9;
`

export const div4 = styled.div`
    position: absolute;
    left: 175px;
    right: 125.33px;
    top: 609.26px;
    bottom: 177.48px;

    border: 0.1px solid #D9DBE9;
`

// plus는 아직 안 했음!