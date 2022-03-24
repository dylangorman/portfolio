import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
export const Button = styled(LinkS)`
  border-radius: 25px;
  background: ${({ primary }) => (primary ? "#e72a8b" : "#010606")};
  white-space: nowrap;
  width: 200px;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "10px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#E72a8b")};
  }
`;
export const ButtonInfo = styled(LinkR)`
  border-radius: 25px;
  background: ${({ primary }) => (primary ? "#e72a8b" : "#010606")};
  white-space: nowrap;
  width: 200px;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "10px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#E72a8b")};
  }
`;
