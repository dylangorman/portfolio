import React, { useState } from "react";

// react-id-swiper
import "swiper/css";
import Swiper from "react-id-swiper";

// custom css
import "./HeroSlider.css";

//back to site
import { Icon } from "../../Contact/ContactElememts";

// slider configuration
const HeroSliderConfigs = {
  containerClass: "swiper-container hero-slider",
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 0,
  effect: "slide",
};

// slider component
const HeroSlider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <div className="testimonal-page">
      <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
        <div className="hero-slide">
          <Icon to="/">
            <h2 className="back"> BACK</h2>
          </Icon>

          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <div className="info">
              <h2>Client</h2>
              <h2>SUSANNAH</h2>
              <h2>RACHEL</h2>
              <h2>ILLUSTRATIONS</h2>
            </div>
            <iframe
              src={"https://susannahrachelillustrations.com/"}
              width="1920"
              height="1080"
              margin="20px"
              target="_blank"
              title="susannahRachel"
            />
          </div>
        </div>
        <div className="hero-slide">
          <Icon to="/">
            <h2 className="back"> BACK</h2>
          </Icon>

          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <div className="info">
              <h2>Client</h2>
              <h2>DIFFERENT</h2>
              <h2>CLIENT</h2>
              <h2>HERE</h2>
            </div>
            <iframe
              src={"https://susannahrachelillustrations.com/"}
              width="1920"
              height="1080"
              margin="20px"
              target="_blank"
              title="susannahRachel"
            />
          </div>
        </div>
        <div className="hero-slide">
          <Icon to="/">
            <h2 className="back"> BACK</h2>
          </Icon>

          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <div className="info">
              <h2>Client</h2>
              <h2>DIFFERENT</h2>
              <h2>CLIENTNAME</h2>
              <h2>HERE</h2>
            </div>
            <iframe
              src={"https://susannahrachelillustrations.com/"}
              width="1920"
              height="1080"
              margin="20px"
              target="_blank"
              title="susannahRachel"
            />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
