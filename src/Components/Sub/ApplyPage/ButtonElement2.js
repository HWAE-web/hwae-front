import styled from "styled-components";
import { Link } from "react-scroll";

export const Button2 = styled(Link)`
  border-radius: 24px;

  background: white;
  white-space: nowrap;
  padding: 13px 30px;
  color: #ff2d46;
  font-family: "Spoqa Han Sans Neo Bold";
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  outline: none;
  border: 1px solid #ff2d46;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ff2d46;
    color: white;
    border: none;
  }
`;
