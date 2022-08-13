import { GlobalFonts } from "../../../fonts/fonts";
import { Button } from "./ButtonElement";
import { Routes, Route, useNavigate } from "react-router-dom";

import { ApplyBtnWrapper, ApplyCol, ApplyContainer, ApplyContent, C1, C2, Column1, Column2, Column3, Column4, ContentTitle, EmailDetail, EmailInput, EmailRow, InfoRow, NameInput, Row1, Row2, Row3, Row4, SubApplyTitle, SubApplyWrapper, TextArea } from "./ApplyElement";
import SubPage from "../SubPages/Pages";
function Apply(){
    return(
        <>
        <GlobalFonts/>
        <ApplyContainer>
            <SubApplyWrapper>
                <ApplyCol>
                    <Row1>
                        <SubApplyTitle>Apply</SubApplyTitle>
                    </Row1>
                    <Row2>
                        <InfoRow>
                            <Column1>
                                <ContentTitle>이름</ContentTitle>
                                <NameInput placeholder="Name"/>
                            </Column1>
                            <Column2>
                                <ContentTitle>지원팀</ContentTitle>
                                <NameInput placeholder="Web"/>
                            </Column2>
                            <Column3>
                                <ContentTitle>지원분야</ContentTitle>
                                <NameInput placeholder="Designer"/>
                            </Column3>
                            <Column4>
                                <EmailRow>
                                  <C1>
                                    <ContentTitle>E-mail</ContentTitle>
                                  </C1>
                                  <C2>
                                    <EmailDetail>*이화인 메일만 접수 가능합니다.</EmailDetail>
                                  </C2>
                                </EmailRow>
                                <EmailInput placeholder="HWAE@ewhain.net"/>
                            </Column4>
                        </InfoRow>
                    </Row2>
                    <Row3>
                        <ApplyContent>
                            <ContentTitle>지원동기</ContentTitle>
                            <TextArea cols="10" rows="10" required="required"/>
                        </ApplyContent>
                    </Row3>
                    <Row4>
                        <ApplyBtnWrapper>
                            <Button>지원하기</Button>
                        </ApplyBtnWrapper>
                    </Row4>
                </ApplyCol>
            </SubApplyWrapper>
        </ApplyContainer>
        <Routes>
            <Route path="/sub" element={<SubPage/>}/>
            <Route path="/apply" element={<Apply/>}/>
        </Routes>
        </>
    )
}

export default Apply;