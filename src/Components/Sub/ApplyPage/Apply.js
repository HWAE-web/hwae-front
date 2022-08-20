import { GlobalFonts } from "../../../fonts/fonts";
import { Button } from "./ButtonElement";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ApplyBtnWrapper,ContentTitle, ApplyTitleContent,PWTitle, ApplyCol, ApplyContainer, ApplyContent, C1, C2, Column1, Column2, Column3, Column4, NameTitle,PartTitle, EmailDetail, EmailInput, EmailRow, InfoRow, NameInput, Row1, Row2, Row3, Row4,Row5, SubApplyTitle, SubApplyWrapper, TeamList, TeamSelect, TeamSelect1, TextArea, TeamTitle, RowWrap3, PWInput, PWRow, PWcol1, PWcol2, PWDetail, EmailTitle, BlackOut,  } from "./ApplyElement";
import SubPage from "../SubPages/Pages";
import Modal from "./Modal";
import { useSelector } from "react-redux";

function Apply(){
    let [name, setName] = useState("");
    let [team, setTeam] = useState("web");
    let [role, setRole] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [answer_1, setAnswer_1] = useState("");

    var state = useSelector((state) => {
        return state;
      });
    
    // 모달
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = (active) => {
        setIsOpen(active);
    };

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
                                <NameInput placeholder="Name" name="name"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}/>
                            </Column1>
                            <Column2>
                                <TeamTitle name="team">지원팀</TeamTitle>
                                <TeamSelect name="team"
                                    onChange={(e) => {
                                        setTeam(e.target.value);
                                }}>
                                    <TeamList value="web">WEB</TeamList>
                                    <TeamList value="app">APP</TeamList>
                                </TeamSelect>
                            </Column2>
                            <Column3>
                                <PartTitle name="role">지원분야</PartTitle>
                                <TeamSelect1 name="role"
                                    onChange={(e) => {
                                        setRole(e.target.value);
                                }}>
                                    <TeamList value={state.part[0].name}>{state.part[0].name}</TeamList>
                                    <TeamList value={state.part[1].name}>{state.part[1].name}</TeamList>
                                    <TeamList value={state.part[2].name}>{state.part[2].name}</TeamList>
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
                                <EmailInput placeholder="HWAE@ewhain.net" name="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
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
                            <PWInput placeholder="1234" name="password"
                             onChange={(e) => {
                                setPassword(e.target.value);
                        }}/>
                        </RowWrap3>
                    </Row3>
                    <Row4>
                        <ApplyContent>
                            <ContentTitle>지원동기</ContentTitle>
                            <TextArea required="required" name="answer_1"
                                onChange={(e) => {
                                    setAnswer_1(e.target.value);
                                }}/>
                        </ApplyContent>
                    </Row4>
                    <Row5>
                        <ApplyBtnWrapper>
                            <Button onClick={() => {
                                    openModalHandler(true) // '지원하기' 버튼 누르면 모달창 true
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
        <>
        { isOpen && <BodyBlackoutStyle openModalHandler={openModalHandler}/> }
        { isOpen && <Modal openModalHandler={openModalHandler} name={name} team={team} role={role} email={email} password={password} answer_1={answer_1}/>}
        </>
        </>
    )
}

export const BodyBlackoutStyle = ({ openModalHandler }) => {
    return (
      <BlackOut onClick={() => openModalHandler(false)}/>
    );
  };

export default Apply;