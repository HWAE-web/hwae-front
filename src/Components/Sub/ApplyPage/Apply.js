import { GlobalFonts } from "../../../fonts/fonts";
import { Button } from "./ButtonElement";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ApplyBtnWrapper,ContentTitle, ApplyTitleContent,PWTitle, ApplyCol, ApplyContainer, ApplyContent, C1, C2, Column1, Column2, Column3, Column4, NameTitle,PartTitle, EmailDetail, EmailInput, EmailRow, InfoRow, NameInput, Row1, Row2, Row3, Row4,Row5, SubApplyTitle, SubApplyWrapper, TeamList, TeamSelect, TeamSelect1, TextArea, TeamTitle, RowWrap3, PWInput, PWRow, PWcol1, PWcol2, PWDetail, EmailTitle,  } from "./ApplyElement";
import SubPage from "../SubPages/Pages";
function Apply(){
    let [name, setName] = useState("");
    let [team, setTeam] = useState("web");
    let [part, setPart] = useState("frontend");
    let [mail, setMail] = useState("");
    let [password, setPassword] = useState("");
    
    return(
        <>
        <GlobalFonts/>
        <ApplyContainer>
            <SubApplyWrapper>
                    <ApplyCol>
                    <Row1>
                        <ApplyTitleContent>
                        <SubApplyTitle>Apply</SubApplyTitle>
                        </ApplyTitleContent>
                    </Row1>
                    <Row2>
                        <InfoRow>
                            <Column1>
                                <NameTitle>이름</NameTitle>
                                <NameInput placeholder="Name" 
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}/>
                            </Column1>
                            <Column2>
                                <TeamTitle name="team">지원팀</TeamTitle>
                                <TeamSelect handleChange={(e) => {
                                        setTeam(e.target.value);
                                }}>
                                    <TeamList value="web">WEB</TeamList>
                                    <TeamList value="app">APP</TeamList>
                                </TeamSelect>
                            </Column2>
                            <Column3>
                                <PartTitle name="part">지원분야</PartTitle>
                                <TeamSelect1 onChange={(e) => {
                                        setPart(e.target.value);
                                }}>
                                    <TeamList value="frontend">Front-End</TeamList>
                                    <TeamList value="backend">Back-End</TeamList>
                                    <TeamList value="designer">Designer</TeamList>
                                </TeamSelect1>
                            </Column3>
                            <Column4>
                                <EmailRow>
                                  <C1>
                                    <EmailTitle>E-mail</EmailTitle>
                                  </C1>
                                  <C2>
                                    <EmailDetail>*이화인 메일만 접수 가능합니다.</EmailDetail>
                                  </C2>
                                </EmailRow>
                                <EmailInput placeholder="HWAE@ewhain.net"
                                    onChange={(e) => {
                                        setMail(e.target.value);
                                }}/>
                            </Column4>
                        </InfoRow>
                    </Row2>
                    <Row3>
                        <RowWrap3>
                            <PWRow>
                                <PWcol1>
                                    <PWTitle>비밀번호</PWTitle>
                                </PWcol1>
                                <PWcol2>
                                    <PWDetail>*합격자 조회를 위한 4자리 번호</PWDetail>
                                </PWcol2>
                            </PWRow>
                            <PWInput placeholder="1234"
                             onChange={(e) => {
                                setPassword(e.target.value);
                        }}/>
                        </RowWrap3>
                    </Row3>
                    <Row4>
                        <ApplyContent>
                            <ContentTitle>지원동기</ContentTitle>
                            <TextArea required="required"/>
                        </ApplyContent>
                    </Row4>
                    <Row5>
                        <ApplyBtnWrapper>
                            <Button onClick={() => {
                                // axios.post(
                                //     "url",
                                //     {name, team, part, mail, password}
                                //     )
                                console.log(name, team, part, mail, password)
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