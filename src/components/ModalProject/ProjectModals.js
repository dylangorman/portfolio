import React, { useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./globalStyles";
import Modal from "./Modal";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";
import Modal6 from "./Modal6";
import mood from "./moodToneCover.png";
import cats from "./cats.png";
import drum from "./drum.png";
import poke from "./poke.png";
import dice from "./dice.png";
import calc from "./calc.png";
import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { NavLogo } from "../Navbar/NavbarElements";
const ModalNav = styled.div`
  display: flex;
  background: #141414;
  width: 100%;
  height: 100%;
  color: #fff;
  justify-content: center;
  justify-content: space-evenly;
  @media screen and (max-width: 350px) {
    width: 350px;
  }
`;

export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #fff;
  }
`;

export const NavBtnModal = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;

export const NavBtnModalLink = styled(LinkR)`
  border-radius: 50px;
  background: #a7cce9;
  white-space: nowrap;
  margin-top: 10px;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }

  &:active {
    background-color: #a7cce9;
    box-shadow: 0px 0px 2px 2px #347ce1;
    transform: translateY(2px);
  }
  @media screen and (max-width: 440px) {
    width: 100px;
    display: flex;
    align-items: center;
    height: 20px;
    font-size: 10px;
  }
  @media screen and (max-width: 280px) {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 10px;
    font-size: 5px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  background: #141414;
  color: #fff;
  height: 100vh;
  width: 100%;
  @media screen and (max-width: 698px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 440px) {
    display: grid;
    /* width: max-content; */
    height: max-content;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 350px) {
    width: 350px;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
  }
`;
const Button = styled.button`
  background-image: 100px;
  height: 200px;
  margin: 10px;
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: rgba(255, 255, 255, 0.7);
  color: #141414;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

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
  @media screen and (max-width: 440px) {
    width: 350px;

    margin: 40px 70px 20px 70px;
  }
  @media screen and (max-width: 350px) {
    width: 280px;
    height: 160px;
    margin: 30px;
  }
`;

const ProjectModals = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const openModal2 = () => {
    setShowModal2((prev) => !prev);
  };
  const openModal3 = () => {
    setShowModal3((prev) => !prev);
  };
  const openModal4 = () => {
    setShowModal4((prev) => !prev);
  };
  const openModal5 = () => {
    setShowModal5((prev) => !prev);
  };
  const openModal6 = () => {
    setShowModal6((prev) => !prev);
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <ModalNav>
        <NavLogo to="/" className="NavLogo" onClick={toggleHome}>
          <h4 className="homeProject">Home</h4>
        </NavLogo>
        <h1 className="projectsHeader">PROJECTS</h1>
        <NavBtnModal>
          <NavBtnModalLink className="contactme" to="/contact" target="_blank">
            Get In Touch!
          </NavBtnModalLink>
        </NavBtnModal>
      </ModalNav>
      <Container>
        <Button onClick={openModal}>
          <img className="images" src={mood} alt="moodtone rainbow logo" />
          <div className="divH1">
            <h1>moodTone</h1>
          </div>
        </Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Button onClick={openModal2}>
          <img className="images" src={cats} alt="cats 4 life" />
          <div className="divH1">
            <h1>cats4Lyf</h1>
          </div>
        </Button>
        <Modal2 showModal2={showModal2} setShowModal2={setShowModal2} />
        <Button onClick={openModal3}>
          <img className="images" src={drum} alt="drumk kit" />
          <div className="divH1">
            <h1>drumKit</h1>
          </div>
        </Button>
        <Modal3 showModal3={showModal3} setShowModal3={setShowModal3} />
        <Button onClick={openModal4}>
          <img className="images" src={poke} alt="pokemon" />
          <div className="divH1">
            <h1>pokemon</h1>
            <h1>Api</h1>
          </div>
        </Button>
        <Modal4 showModal4={showModal4} setShowModal4={setShowModal4} />
        <Button onClick={openModal5}>
          <img className="images" src={dice} alt="dice game" />
          <div className="divH1">
            <h1>diceGame</h1>
          </div>
        </Button>
        <Modal5 showModal5={showModal5} setShowModal5={setShowModal5} />
        <Button onClick={openModal6}>
          <img className="images" src={calc} alt="calculator" />
          <div className="divH1">
            <h1>react</h1>
            <h1>Calculator</h1>
          </div>
        </Button>
        <Modal6 showModal6={showModal6} setShowModal6={setShowModal6} />

        <GlobalStyle />
      </Container>
    </>
  );
};

export default ProjectModals;
