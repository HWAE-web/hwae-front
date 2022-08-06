import { GlobalFonts } from "../../../fonts/fonts";
import calendar from "../../../Images/calendar.svg";
import {
  SubProcessBg,
  SubProcessMainTitle,
  SubProcessMainDetail,
  SubProcessTextBox,
  SubProcessTitle,
  SubProcessTitle1,
  SubProcessDetail,
  SubProcessWrapper,
  SubProcessContainer,
  SubProcessRow,
  Column1,
  Column2,
  Column3,
  ColContents1,
  Calendar,
  CalendarWrap,
  ColContents2,
  ColContents3,
  TitleWrap,
  DetailWrap,
  TextBoxDiv,
  TextBoxDiv1
} from "./ProcessElement.js";

const Process = ({
  id,
  headline,
  description,
  img,
  alt,
  first,
  firstDetail,
  second,
  secondDetail,
  third,
  thirdDetail,
  fourth,
  fourthDetail
}) => {
  return (
    <>
    <GlobalFonts />
    <SubProcessContainer id={id}>
      <SubProcessWrapper>
        <SubProcessBg>
          <SubProcessRow>
            <Column1>
              <ColContents1>
                <SubProcessMainTitle>{headline}</SubProcessMainTitle>
                <SubProcessMainDetail>{description}</SubProcessMainDetail>
                <CalendarWrap>
                  <Calendar src={img} alt={alt}/>
                </CalendarWrap>
              </ColContents1>
            </Column1>
            <Column2>
              <ColContents2>
              <TextBoxDiv/>
                <SubProcessTextBox>
                  <TitleWrap>
                    <SubProcessTitle>01</SubProcessTitle>
                  </TitleWrap>
                  <SubProcessTitle1>{first}</SubProcessTitle1>
                  <DetailWrap>
                  <SubProcessDetail>{firstDetail}</SubProcessDetail>
                  </DetailWrap>
                </SubProcessTextBox>
                <TextBoxDiv/>
                <SubProcessTextBox>
                  <TitleWrap>
                    <SubProcessTitle>03</SubProcessTitle>
                  </TitleWrap>
                  <SubProcessTitle1>{third}</SubProcessTitle1>
                  <DetailWrap>
                  <SubProcessDetail>{thirdDetail}</SubProcessDetail>
                  </DetailWrap>
                </SubProcessTextBox>
              </ColContents2>
            </Column2>
            <Column3>
            <ColContents3>
              <TextBoxDiv1/>
              <SubProcessTextBox>
                  <TitleWrap>
                    <SubProcessTitle>02</SubProcessTitle>
                  </TitleWrap>
                  <SubProcessTitle1>{second}</SubProcessTitle1>
                  <DetailWrap>
                  <SubProcessDetail>{secondDetail}</SubProcessDetail>
                  </DetailWrap>
                </SubProcessTextBox>
                <TextBoxDiv/>
                <SubProcessTextBox>
                  <TitleWrap>
                    <SubProcessTitle>04</SubProcessTitle>
                  </TitleWrap>
                  <SubProcessTitle1>{fourth}</SubProcessTitle1>
                  <DetailWrap>
                  <SubProcessDetail>{fourthDetail}</SubProcessDetail>
                  </DetailWrap>
                </SubProcessTextBox>
            </ColContents3>
            </Column3>        
          </SubProcessRow>
        </SubProcessBg>
      </SubProcessWrapper>
    </SubProcessContainer>
    </>
  );
}

export default Process;
