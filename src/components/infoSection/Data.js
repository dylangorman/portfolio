import Icon1 from "../../images/2.svg";
import Icon2 from "../../images/5.svg";
import Icon3 from "../../images/4.svg";

// info page 1

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Dylan Gorman",
  headline: "About Me",
  description:
    "I have many passions in life. I am married and have two young children and we love arts and crafts, working on our Allotment, football and yoga. We like long walks, adventure holidays, and city breaks. I have been writing and playing music for over 25 years and have a passion for art and design, DIY and decorating and I also enjoy fixing things around the house. From Amplifiers to toys and devices. Problem solving has always been my raison d'etre! I am also an official Carer for my wife who has Seronegative Rheumatoid Arthritis. ",

  buttonLabel1: "Projects →",
  imgStart: false,
  img: require("../../images/dylsmilesquare.jpg"),
  alt: "Dylan looking to left smiling",
  dark: true,
  primary: true,
  darkText: false,
};

// info page 2

export const homeObjTwo = {
  id: "code",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Dylan Gorman",
  headline: "Code",
  description:
    "I have completed a 12 week Full Stack Boot Camp Course mainly studying and praticing html, css and JavaScript. Alongside using Libraries and Frameworks such as React, BootStrap and Node. and learning principles like Agile using systems like Kanban and Trello. I have also learnt a lot of Backend databases using Mongo DB, SQL, Express and have some experience with programmes such as D-Beaver and Insomnia. Most of the course was learnt using VS-Code, Git and Git Hub.   ",
  buttonLabel1: "Projects →",
  imgStart: true,
  img: (require = Icon1),
  alt: "",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "Projects",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Dylan Gorman",
  headline: "Projects",
  description:
    "Since starting my journey as a Software Developer I have enjoyed creating lots of small projects, from Python Text based adventure games and static HTML/CSS sites to numerous React Apps. I am Still learning lots and always look forward to starting a new challenge! Click the link to look through some of my projects...",
  buttonLabel1: "Projects →",

  imgStart: false,
  img: (require = Icon2),
  alt: "",
  dark: true,
  primary: true,
  darkText: false,
};
export const homeObjFour = {
  id: "future",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Dylan Gorman",
  headline: "Future",
  description:
    "I want to keep learning and expanding my knowledge in html, css and Javascript and master using Libraries such as React, Tailwind and Bootstrap. I would also like to one day be a Team Leader or Project Manager working with a Small Team on new Tech. ",
  buttonLabel1: "Projects →",
  imgStart: true,
  img: (require = Icon3),
  alt: "",
  dark: false,
  primary: false,
  darkText: true,
};
