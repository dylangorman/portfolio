import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  @media screen and (max-width: 768px) {
    height: 1200px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* max-height: 200px; */
    padding: 10px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  opacity: 0.8;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    opacity: 1;
  }

  &:active {
    transform: scale(1);
    opacity: 0.8;
  }
`;
export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 40px;

  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 300px) {
    font-size: 1rem;
  }
`;

export const ServicesH3 = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
  color: black;
`;

export const ServicesP = styled(LinkR)`
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  color: #010606;
`;
