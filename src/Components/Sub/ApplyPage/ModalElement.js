import styled from "styled-components";

export const ModalContainer = styled.div`
    background-color: white;
    width: 40%;
    // min-width: 300px;
    max-width: 460.5px;
    height: 30%;
    filter: drop-shadow(0px 7px 22px rgba(20, 20, 43, 0.1));
    border-radius: 20px;

    overflow-y: auto;
    position: fixed;
    left: 50%;
    top: 50%;
    padding: 5px;
    transform: translate(-50%, -50%);
    z-index: 1011;
`

export const ModalContent1 = styled.div`
    margin: 30px 0px 10px 0px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 27px;
    text-align: center;

    color: #333333;
`
export const ModalContent2 = styled.div`
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    text-align: center;

    letter-spacing: -0.008em;

    color: #666666;
`
export const BtnWrap = styled.div`
    height: 40px;
    display: flex;

    margin: 40px 500px 0 220px;
    align-items: center;
    justify-content: center;
`
export const XBtn = styled.img`
    max-width: 25px;
    margin: 10px 0 0 420px;
`