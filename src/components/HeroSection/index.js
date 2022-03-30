import React, { useEffect, useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
// import { animateScroll as scroll } from "react-scroll";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = ({ toggle }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay playsInline loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Dylan Gorman</HeroH1>
        <HeroH1>Software Developer</HeroH1>s
        <HeroP>
          Hello and welcome to my portfolio. <br></br>I am Dylan Gorman, I am 41
          years old, married, father of 2 living in South Liverpool. I Have just
          recently completed the<br></br>
          <a
            className="codenation"
            href="https://wearecodenation.com/individual/master/"
            target="blank"
          >
            {" "}
            Code Nation Master - Coding course{" "}
          </a>
          <br></br>
          learning Full Stack Web Development. I am looking to start a new
          career path in Front End Development after being made redundant from
          my previous occupation as an Audio/Visual Rental Operations Manager.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            {" "}
            Read On...
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
