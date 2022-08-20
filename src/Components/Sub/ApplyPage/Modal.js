import { GlobalFonts } from "../../../fonts/fonts";
import { BtnWrap, ModalContainer, ModalContent1, ModalContent2, XBtn } from "./ModalElement";
import { Button2 } from "./ButtonElement2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import x from "../../../Images/x.svg";

const Modal = ( {openModalHandler, name, team, role, email, password, answer_1} ) => {
    let navigate = useNavigate();    
    
    return(
        <>
        <GlobalFonts/>
        <ModalContainer>
            <XBtn src={x} onClick={() => openModalHandler(false)}/>
            <ModalContent1>지원서를 제출하시겠습니까?</ModalContent1>
            <ModalContent2>제출 후에는 수정 및 재제출이 불가능합니다.</ModalContent2>
            <BtnWrap>
                <Button2 onClick={() => 
                    {navigate("/sub"); 
                        axios.post(
                            "/articles/create",
                            {   name : name, 
                                team : team, 
                                role : role,
                                email : email, 
                                password : password,
                                answer_1 : answer_1}
                            )
                            .then((response) => (
                                console.log(response.data)
                            ))
                            .catch((error) => {
                                console.log(error);
                            })
                    }}>
                제출하기</Button2>
            </BtnWrap>
        </ModalContainer>
        </>
    )
}

export default Modal;