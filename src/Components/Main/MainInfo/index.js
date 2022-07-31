import React from "react";
import { GlobalFonts } from "../../../fonts/fonts";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  About,
  Heading,
  Subtitle,
  Desc,
  ImgWrap,
  Img,
  CheckDesc,
  CheckWrap,
} from "./InfoElements";

const MainInfo = ({
  id,
  imgStart,
  headline,
  description,
  img,
  alt,
  check,
  checkOne,
  checkTwo,
  checkThree,
}) => {
  return (
    <>
      <InfoContainer id={id}>
        <GlobalFonts />
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <About>about</About>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                <Desc>
                  <CheckWrap src={check} alt="check" />
                  <CheckDesc>{checkOne}</CheckDesc>
                </Desc>
                <Desc>
                  <CheckWrap src={check} alt="check" />
                  <CheckDesc>{checkTwo}</CheckDesc>
                </Desc>
                <Desc>
                  <CheckWrap src={check} alt="check" />
                  <CheckDesc>{checkThree}</CheckDesc>
                </Desc>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default MainInfo;
