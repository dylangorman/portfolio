import React from "react";
// import { Link } from "react-scroll";
import Icon1 from "../../images/1.svg";
import Icon2 from "../../images/2.svg";
import Icon3 from "../../images/3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH3,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Services & Qualifications</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH3>Freelance Web Designer</ServicesH3>
            <ServicesP to="/contact" target="_blank">
              I am available for Basic Web Design. Using HTML, CSS and
              JAVASCRIPT, and frameworks like React, Tailwind and BootStrap.
              Click here to see some previous Client work. Get in touch for a
              quote!
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH3>CV</ServicesH3>
            <ServicesP to="/cv" target="_blank">
              View My recent CV Here. I have just finished a 12 week Full Stack
              Boot Camp in Software Development and I am looking for an Front
              End apprentiship or Job.{" "}
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH3>Git Hub</ServicesH3>
            <ServicesP to="//github.com/dylangorman" target="blank">
              Click here to vist my Git Hub page where you can view all of my
              repos of my previous work. Feel free to connect with me for future
              projects. I am always willing to colloborate and learn.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
