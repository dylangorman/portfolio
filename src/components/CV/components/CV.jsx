import React from "react";
import { Icon } from "../../Contact/ContactElememts";
// custom css
import "./CV.css";

const CV = () => {
  return (
    <>
      {/* <div className="cv-navbar">
        <Icon to="/"> Home</Icon>
      </div> */}
      <div className="page">
        <div className="cv-page">
          <div className="cv-header">
            <h1 className="cv-name">DYLAN GORMAN</h1>
            <h4> 65 karslake Rd, Liverpool, L18 1EY</h4>
            <h4>07531018816</h4>
            <h4>dylangorman@me.com</h4>
            <a
              className="linkage"
              href="https://www.linkedin.com/in/dylan-gorman-b01508219/"
              // target="_blank"
              rel="norefferer"
            >
              Linked In
            </a>
          </div>

          <div className="cv-profile">
            <h3 className="titles">PROFILE</h3>
            <p>
              Hello, I am Dylan, based in South Liverpool. UK. I have recently
              completed a 12-week Master Coding Course and I am looking to start
              a new career path after being made redundant from my previous
              occupation as an Audio/Visual Rental Operations Assistant. I have
              Several years experience as a Warehouse Manager and experience in
              Operations in the Live Music Rental Industry. The Master Coding
              Course has introduced me to new languages such as HTML, CSS,
              Javascript alongside using Libraries and Frameworks such as React,
              BootStrap and Node. and learning principles like Agile using
              systems like Kanban/Trello. I have also learnt about backend
              databases using Mongo DB, SQL, Express and have some experience
              with programs such as D-Beaver and Insomnia. Most of the course
              was learnt using VS-Code using Git and GitHub. The last 2 weeks of
              the course we had to create, design, and produce a working Full
              Stack app. The small team I was in produced an original App which
              I led the design side. I have a great passion for UI and UX
              product design and would like to further this passion into a
              long-term career.
            </p>
          </div>

          {/* <br></br> */}
          <div className="cv-experience">
            <h3 className="titles">EXPERIENCE</h3>
            <h4>Adlib</h4>
            <h5>Video Operations Assistant | Jan 2020-Sep 2020</h5>
            <ul>
              <li>
                Assisting the Department Head on daily tasks such as managing
                use of Visual equipment, making sure all equipment is available
                and when not then Sub Hires are in place communicating with
                several AV companies.{" "}
              </li>
              <li>
                Checking in with the service department to make sure all faulty
                Visual equipment is scheduled to be fixed before certain dates
                and tours.{" "}
              </li>
              <li>
                Overseeing the Video Warehouse to make sure all equipment has
                been prepped and de-prepped properly.{" "}
              </li>
              <li>
                Having daily Meetings with the office and warehouse to make sure
                all equipment is accounted for and ready to go out with
                engineers to conferences, concerts, tours etc.{" "}
              </li>
            </ul>
            <h5>Video Warehouse Manager | Jan 2018-Dec 2019</h5>
            <ul>
              <li>
                Overseeing a team of 4 people, making sure all equipment is
                properly maintained. Including Cleaning, fixing and labelling.
              </li>
              <li>
                Having daily meetings with the other warehouse managers and
                office staff, making sure each day the needed equipment for each
                event is ready to be loaded into necessary vans and lorries,
                working on many shows at once on very tight deadlines.
              </li>
            </ul>
            <h5>Video Warehouse Assistant | Jan 2017- Dec 2018</h5>
            <ul>
              <li>
                Follow instructions given to me from the warehouse manager.
              </li>
              <li>
                Making sure all equipment is working properly and raise service
                tickets for faulty items.
              </li>
              <li>
                Assisting loading vans and lorries with the correct equipment
                for each event.
              </li>
            </ul>

            <h4>FREELANCE</h4>
            <h5>Sound Engineer | May 2013-Dec 2016</h5>
            <ul>
              <li>
                Providing excellent sound engineering to many venues in UK.
              </li>
              <li>
                Having knowledge on many Sound Mixing Desks and PA systems
              </li>
              <li>
                Installing PA systems permanent and temporary in many venues and
                spaces indoor and outdoor.
              </li>
              <li>
                Working to extremely tight deadlines to make sure events start
                at the necessary time.
              </li>
            </ul>
          </div>
        </div>
        <div className="cv-page2">
          <h4>BUSINESS PARTNERSHIP</h4>
          <h5>Band Manager and Bass Player Jan 2005 – Oct 2015</h5>
          <ul>
            <li>
              Writing and performing songs in the studio and live on stage in
              venues and television
            </li>
            <li>
              Arranging all the bands schedules: touring, studio time,
              rehearsals, promotion, videos.
            </li>
            <li>
              Collecting all income the band makes and working with tight
              budgets
            </li>
          </ul>

          <div className="cv-education">
            <h3 className="titles">EDUCATION</h3>
            <h5>Coding Bootcamp | 2021-2022 | CodeNation</h5>
            <ul>
              <li>
                Develop: Coding 3 weeks course - Pass Award for Learning
                fundamentals in HTML, Python and CSS.
              </li>
              <li>
                Master: Coding 12 week bootcamp - Pass learning Full Stack Web
                Development HTML, CSS, JS, REACT, MONGO DB, SQL, NODE, EXPRESS.
              </li>
            </ul>
            <h5>
              BTEC National Diploma Art & Design | 2000 | Newcastle-Under-Lyme
              College
            </h5>
            <ul>
              <li>
                Merit Award for Multimedia Art & Design, focusing on Graphic
                Design, illustration, Photography and Fine Art
              </li>
            </ul>
            <h5>A-Level | 1999 | Dane Valley High School</h5>
            <ul>
              <li>Grade D for Art & Design, Grade D for AS Mathematics </li>
            </ul>
          </div>
          <div className="cv-skills"></div>
          <table id="skills">
            <tr>
              <th>Agile</th>
              <th>Front-End Code</th>
              <th>Back-End Code</th>
              <th>Libraries</th>
              <th>Design</th>
              <th>IT</th>
              <th>AV</th>
            </tr>
            <tr>
              <td>Trello</td>
              <td>HTML</td>
              <td>MYSQL</td>
              <td>Node</td>
              <td>Photoshop</td>
              <td>Office</td>
              <td>Audio Desks</td>
            </tr>
            <tr>
              <td>Wire Framing</td>
              <td>CSS</td>
              <td>MONGO DB</td>
              <td>NPM</td>
              <td>iMovie</td>
              <td>KeyNote</td>
              <td>Projectors</td>
            </tr>
            <tr>
              <td>Draw.io</td>
              <td>Javascript</td>
              <td>Express</td>
              <td>Insomnia</td>
              <td>Canva</td>
              <td>Excel</td>
              <td>Green Go Comms</td>
            </tr>
            <tr>
              <td>Vscode</td>
              <td>JSDom</td>
              <td>Python</td>
              <td>DBeaver</td>
              <td>Coolors</td>
              <td>Focal Point</td>
              <td>HireTrack</td>
            </tr>
            <tr>
              <td>GitHub</td>
              <td>React</td>
              <td>Git</td>
              <td>JSON</td>
              <td>illustrator</td>
              <td>One Drive</td>
              <td>Black Magic</td>
            </tr>
          </table>
          <div className="cv-life">
            <h3 className="titles">LIFE</h3>
            <p>
              I have many passions in life. I am married and have two young
              children and we do so many activities together, from working on
              our new allotment, arts and crafts to football and yoga. We like
              long walks, adventure holidays, and city breaks. Anglesey and
              Paris being two of our favorite places to visit. I have been
              writing and playing music for over 25 years and have a passion for
              art and design, DIY and decorating and I also enjoy fixing things
              around the house and for friends. From Amplifiers to laptops and
              anything I can get my hands on. Problem solving has always been my
              raison d'etre! I am an official Carer for my wife who has
              Seronegative Rheumatoid Arthritis and an Anachroid Cyst. So, a lot
              of my day-to-day life is balancing caring for her, work and
              looking after our children. Working from home for most of the week
              is a really important factor for me. I also like craft beer and
              coffee and I am a vegetarian.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CV;
