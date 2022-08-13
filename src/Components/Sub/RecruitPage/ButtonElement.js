import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 25px;
  box-shadow: 0px 3px 12px rgba(255, 45, 70, 0.25);
  /* background: ${({ primary }) => (primary ? "#" : "green")}; */
  background: #ff2d46;
  white-space: nowrap;
  padding: 9px 20px;
  color: white;
  font-family: "Spoqa Han Sans Neo Bold";
  font-size: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition: all 0.2s ease-in-out; */

  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: ${({ primary }) => (primary ? "white" : "orange")}; */
    background: transparent;
    color: #ff2d46;
    border: 1px solid #ff2d46;
  }
`;
