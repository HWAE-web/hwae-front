import styled from "styled-components";

export const ApplyContainer = styled.div`
    background: #fafafa;
    display: flex;
    height: 100vh;
`;

export const SubApplyWrapper = styled.div`
    display: grid;
    z-index: 3;
    height: 100%;
    width: 100%;
    // max-width: 1600px;
    margin: 35px 30px 0 30px;
    @media screen and (max-width: 768px) {
        // margin: 0px 30px 0 30px;
    }
`;

export const ApplyCol = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas: "row1" "row2" "row3" "row4" "row4" "row4" "row5" "row5"; 

  @media screen and (max-width: 768px) {
    // grid-template-areas: "";
  }
`;

export const Row1 = styled.div`
    grid-area: row1;
    @media screen and (max-width: 768px) {
        align-items: center; 
    }
`;

export const Row2 = styled.div`
    grid-area: row2;
    @media screen and (max-width: 768px) {
    
    }
`;

export const Row3 = styled.div`
    grid-area: row3;
    @media screen and (max-width: 768px) {
    
    }
`;

export const RowWrap3 = styled.div`
    margin: 0 1000px 0 250px;
    @media screen and (max-width: 768px) {
        
    }
`
export const Row4 = styled.div`
    grid-area: row4;
    @media screen and (max-width: 768px) {
    
    }
`;

export const Row5 = styled.div`
    grid-area: row5;
    @media screen and (max-width: 768px) {
    
    }
`;
export const SubApplyTitle = styled.div`
    max-width: 156px;
    margin: 15px 0 0 140px;
    font-family: "Roboto Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 56px;
    letter-spacing: 0.2px;
    text-transform: capitalize;
 
    color: #333333;

    @media screen and (max-width: 768px) {
      margin: 40px 0 0 0;
      text-align: center;
    }
`;
export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center; 
  margin: 0 250px 0 250px;

  grid-template-areas: "col1 col2 col3 col4 col4";
  @media screen and (max-width: 768px) {
    // grid-template-areas: "";
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  @media screen and (max-width: 768px) {
    padding: 0;
 }
`;

export const Column2 = styled.div`
  grid-area: col2;
  @media screen and (max-width: 768px) {
    padding: 0;
 }
`;
export const Column3 = styled.div`
  grid-area: col3;
  @media screen and (max-width: 768px) {
    padding: 0;
 }
`;

export const Column4 = styled.div`
  grid-area: col4;
  @media screen and (max-width: 768px) {
    padding: 0;
 }
`;

export const ApplyContent = styled.div`
 display: grid;
 align-items: center; 
 margin: 0 250px 0 250px;
 @media screen and (max-width: 768px) {
    // padding: 0;
 }
`

export const ApplyBtnWrapper = styled.div`
height: 40px;
display: flex;

margin: 40px 500px 0 500px;
align-items: center;
justify-content: center;
@media screen and (max-width: 768px) {
    // margin: 90px 0 50px 10px;
}
`;

export const ContentTitle = styled.div`
    max-width: 70px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin: 0 0 0 50px;
    display: flex;

    letter-spacing: 0.008em;

    color: #333333;
`
export const TeamTitle = styled.div`
    max-width: 70px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin: 0 0 0 90px;
    display: flex;

    letter-spacing: 0.008em;

    color: #333333;
`
export const NameInput = styled.input`
    max-width: 248.21px;
    max-height: 60px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    line-height: 18px;

    padding: 10px 30px 10px 15px;

    margin: 18px 0 0 50px;
    background: #FFFFFF;
    border-radius: 8px;
    border: none;

    &:focus{
        outline: none;
    }
`
export const PWRow = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center; 

    grid-template-areas: "pw1 pw1 pw2 pw2 pw2 pw2 pw2";
    @media screen and (max-width: 768px) {
     // grid-template-areas: "";
    }
`

export const PWcol1 = styled.div`
    grid-area: pw1;
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`

export const PWcol2 = styled.div`
    grid-area: pw2;
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`

export const PWInput = styled.input`
    max-width: 80px;
    max-height: 60px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    line-height: 18px;

    padding: 10px 30px 10px 15px;

    margin: 18px 0 0 50px;
    background: #FFFFFF;
    border-radius: 8px;
    border: none;

    &:focus{
        outline: none;
    }
`
export const PWDetail = styled.div`
    max-width: 253px;
    
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.008em;

    margin: 3px 0 0 0;

    color: #999999;
`
export const TeamSelect = styled.select`
    max-width: 300px;

    padding: 10px 30px 10px 15px;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    margin: 18px 0px 0 90px;

    background: #FFFFFF;
    border-radius: 8px;
    border: none;
    &:focus{
        outline: none;
    }
`

export const TeamSelect1 = styled.select`
    padding: 10px 30px 10px 15px;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    margin: 18px 0px 0 50px;

    background: #FFFFFF;
    border-radius: 8px;
    border: none;
    &:focus{
        outline: none;
    }
`
export const TeamList = styled.option`
    background: #FFFFFF;
    border-radius: 8px;
    border: none;
    margin: 18px 0px 0 50px;

`
export const EmailInput = styled.input`
    max-width: 800px;
    max-height: 60px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;

    padding: 10px 185px 10px 15px;

    margin: 18px 0 0 50px;
    background: #FFFFFF;
    border-radius: 8px;
    border: none;

    &:focus{
        outline: none;
    }
`

export const EmailRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center; 

  grid-template-areas: "c1 c1 c2 c2 c2 c2 c2";
  @media screen and (max-width: 768px) {
    // grid-template-areas: "";
  }
`;

export const C1 = styled.div`
  grid-area: c1;
  @media screen and (max-width: 768px) {
    padding: 0;
 }
`;

export const C2 = styled.div`
  grid-area: c2;
  @media screen and (max-width: 768px) {
    padding: 0;
 }
`;

export const EmailDetail = styled.div`
    max-width: 253px;
    
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.008em;

    margin: 5px 0 0 3px;

    color: #999999;
`

export const TextArea = styled.textarea`
    max-width: 1090px;
    margin: 18px 0 0 50px;

    background: #FFFFFF;
    border-radius: 8px;
    border: none;
    resize: none;

    padding: 30px;
    font-family: 'NotoSans Regular';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: -0.008em;

    color: #333333;

    &:focus{
        outline: none;
    }
`
