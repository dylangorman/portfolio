import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaAmazon,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  Foot,
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = ({ toggle }) => {
  const [scrollFoot, setScrollFoot] = useState(false);
  const changeFoot = () => {
    if (window.scrollY >= 80) {
      setScrollFoot(true);
    } else {
      setScrollFoot(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeFoot);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Foot scrollFoot={scrollFoot}>
        <FooterContainer>
          <FooterWrap>
            <FooterLinksContainer>
              <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle>About Me</FooterLinkTitle>
                  <FooterLink to="/" onClick={toggleHome}>
                    About
                  </FooterLink>
                  <FooterLink to="/cv" target="_blank">
                    CV
                  </FooterLink>
                  <FooterLink to="/projects" target="_blank">
                    Projects
                  </FooterLink>
                  <FooterLink to="/clients" target="_blank">
                    Clients
                  </FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle>Contact</FooterLinkTitle>
                  <FooterLink to="/contact" target="_blank">
                    Contact Form
                  </FooterLink>
                  <a
                    href="mailto: dylangorman@me.com"
                    className="email"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Email
                  </a>
                  <a
                    href="tel:+447531018816"
                    className="phone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    07531018816
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Karslake+Rd,+Liverpool+L18+1EY/@53.3881292,-2.9229667,17z/data=!3m1!4b1!4m5!3m4!1s0x487b204899621f6b:0xe56c943011f29dcd!8m2!3d53.3878307!4d-2.9206232"
                    className="map"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Location
                  </a>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinkTitle>Social Links</FooterLinkTitle>
                  <FooterLink to="//github.com/dylangorman" target="_blank">
                    Git Hub
                  </FooterLink>
                  <FooterLink to="//discord.gg/4UmxyJYj" target="_blank">
                    Discord
                  </FooterLink>
                  <FooterLink
                    to="//www.linkedin.com/in/dylan-gorman-b01508219/"
                    target="_blank"
                  >
                    Linked In
                  </FooterLink>
                  <FooterLink
                    to="//www.instagram.com/dylanthevillain"
                    target="_blank"
                  >
                    Instagram
                  </FooterLink>
                  <FooterLink
                    to="//www.facebook.com/dylanthevillain"
                    target="_blank"
                  >
                    Facebook
                  </FooterLink>

                  <FooterLink
                    to="//mobile.twitter.com/DylanKTY"
                    target="_blank"
                  >
                    Twitter
                  </FooterLink>

                  <FooterLink
                    to="//music.amazon.co.uk/artists/B001NVIPKW/kill-the-young?ref=dm_sh_57fc-b50e-d534-3cf7-8356a"
                    target="_blank"
                  >
                    Amazon
                  </FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
              <SocialMediaWrap>
                <SocialLogo to="/" className="social-logo" onClick={toggleHome}>
                  Dylan Gorman
                </SocialLogo>
                <WebsiteRights>
                  Dylan Gorman &copy; {new Date().getFullYear()} All Rights
                  reserved.
                </WebsiteRights>
                <SocialIcons>
                  <SocialIconLink
                    href="https://github.com/dylangorman"
                    target="_blank"
                    aria-label="Github"
                    className="git"
                  >
                    <FaGithub />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.linkedin.com/in/dylan-gorman-b01508219/"
                    target="_blank"
                    aria-label="Linkedin"
                    className="link"
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.facebook.com/dylanthevillain"
                    target="_blank"
                    aria-label="Facebook"
                    className="fb"
                  >
                    <FaFacebook />
                  </SocialIconLink>

                  <SocialIconLink
                    href="https://twitter.com/DylanKTY"
                    target="_blank"
                    aria-label="Twitter"
                    className="twit"
                  >
                    <FaTwitter />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://music.amazon.co.uk/artists/B001NVIPKW/kill-the-young?ref=dm_sh_57fc-b50e-d534-3cf7-8356a"
                    target="_blank"
                    aria-label="Amazonmusic"
                    className="Amazon"
                  >
                    <FaAmazon />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.instagram.com/dylanthevillain"
                    target="_blank"
                    aria-label="Instagram"
                    className="insta"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://discord.gg/4UmxyJYj"
                    target="_blank"
                    aria-label="Discord"
                    className="discord"
                  >
                    <FaDiscord />
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
          </FooterWrap>
        </FooterContainer>
      </Foot>
    </>
  );
};

export default Footer;
