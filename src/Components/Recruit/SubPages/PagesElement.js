import styled from "styled-components";

export const PageContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: visible;
  // overflow-y: scroll; // scroll 하면 navbar 적용이 안 됨
  height: 100vh;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }
`;
