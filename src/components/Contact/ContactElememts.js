import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;

  display: flex;
  justify-content: center;
  background-color: #a7cce9;
`;

export const FormWrap = styled.div`
  /* background-color: white; */
  height: 100%;
  display: flex;
  /* margin: 20px; */
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    transform: scale(0.8);
  }
  @media screen and (max-width: 480px) {
    transform: scale(0.9);
  }
  @media screen and (max-height: 600px) {
    transform: scale(0.7);
  }
`;
export const Icon = styled(Link)`
  margin-left: 50px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 40px;
  @media screen and (max-width: 480px) {
    transform: scale(0.8);
    margin: 0;
    padding: 0;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    transform: scale(0.8);
  }
`;

export const Form = styled.form`
  background: #010101;
  justify-content: center;
  max-width: 400px;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 20px;
  padding: 50px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 400px) {
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 400px) {
    margin-bottom: 0px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  height: 3px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #f3b63f;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.8;
  }
  @media screen and (max-width: 400px) {
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }
  @media screen and (max-height: 600px) {
    font-size: 15px;
  }
`;

export const FormArea = styled.textarea`
  padding: 6px 16px;
  margin-bottom: 32px;
  height: 3px;
  border: none;
  border-radius: 4px;
  height: 100px;
  text-align: start;
`;
