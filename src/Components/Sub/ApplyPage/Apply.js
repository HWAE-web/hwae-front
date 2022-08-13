import { GlobalFonts } from "../../../fonts/fonts";
import { Button } from "./ButtonElement";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import { ApplyBtnWrapper, ApplyCol, ApplyContainer, ApplyContent, C1, C2, Column1, Column2, Column3, Column4, ContentTitle, EmailDetail, EmailInput, EmailRow, InfoRow, NameInput, Row1, Row2, Row3, Row4,Row5, SubApplyTitle, SubApplyWrapper, TeamList, TeamSelect, TeamSelect1, TextArea, TeamTitle, RowWrap3, PWInput, PWRow, PWcol1, PWcol2, PWDetail } from "./ApplyElement";
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
                                <TeamTitle name="team">지원팀</TeamTitle>
                                <TeamSelect>
                                    <TeamList value="web">WEB</TeamList>
                                    <TeamList value="app">APP</TeamList>
                                </TeamSelect>
                            </Column2>
                            <Column3>
                                <ContentTitle name="part">지원분야</ContentTitle>
                                <TeamSelect1>
                                    <TeamList value="frontend">Front-End</TeamList>
                                    <TeamList value="backend">Back-End</TeamList>
                                    <TeamList value="designer">Designer</TeamList>
                                </TeamSelect1>
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
                        <RowWrap3>
                            <PWRow>
                                <PWcol1>
                                    <ContentTitle>비밀번호</ContentTitle>
                                </PWcol1>
                                <PWcol2>
                                    <PWDetail>*합격자 조회를 위한 4자리 번호</PWDetail>
                                </PWcol2>
                            </PWRow>
                            <PWInput placeholder="1234"/>
                        </RowWrap3>
                    </Row3>
                    <Row4>
                        <ApplyContent>
                            <ContentTitle>지원동기</ContentTitle>
                            <TextArea cols="10" rows="10" required="required"/>
                        </ApplyContent>
                    </Row4>
                    <Row5>
                        <ApplyBtnWrapper>
                            <Button onClick={() => {
                                axios
                                    .post(
                                    "url" 
                                          )
                                    .then((result) => {
                                    
                                    }); 
                                }}>지원하기</Button>
                        </ApplyBtnWrapper>
                    </Row5>
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