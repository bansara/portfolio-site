import React, { useEffect, useRef } from "react";
import headshot from "./josh_geisler_headshot_cropped.jpeg";
import "./about.css";

const resume: any = require("./Joshua_Geisler_Resume.pdf");

const About: React.FC = () => {
  const p: React.RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(
    null
  );
  const p2: React.RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(
    null
  );
  const pSub: React.RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(
    null
  );
  useEffect(() => {
    window.scroll(0, 0);
    if (p.current !== null && pSub.current !== null && p2.current !== null) {
      p.current.classList.remove("transparent");
      p2.current.classList.remove("transparent");
      pSub.current.classList.remove("transparent");
    }
  }, []);

  return (
    <div className="about-container">
      <div className="info-container">
        <h1>
          Hi, I'm Josh Geisler, a full-stack software engineer living in Beacon,
          NY.
        </h1>
        <p className="subheadline transparent" ref={pSub}>
          I enjoy building web applications with a focus on intuitive UX, clean
          UI, and multimedia experiences.
        </p>
        <p className="bio transparent" ref={p}>
          After world tour as bandleader of a Cirque du Soleil show, I decided
          to focus on building a career as a software engineer. I had already
          been making websites and programming for years by the time I stopped
          touring, and transitioning to software engineering was the natural
          choice, so I enrolled in Fullstack Academy.
        </p>
        <p className="bio transparent" ref={p2}>
          Achieving success as a musician took years of hard work, passion,
          discipline, and perseverance. I have focused these same character
          traits on becoming the best software engineer I can be. I am fluent in
          Javascript and Typescript, HTML 5, CSS 3, React, Redux, Node JS,
          Express, and PostgreSQL with Sequelize. My personal passions are UX /
          UI and developing audio applications with the Web Audio API.
        </p>
        <div className="icons">
          <a
            href={resume}
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Resume"
          >
            Resume
          </a>
          <a
            href={"https://www.linkedin.com/in/joshuageisler/"}
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin link"
          >
            LinkedIn
          </a>
          <a
            href={"https://github.com/bansara?tab=repositories"}
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Github link"
          >
            Github
          </a>
        </div>
        <hr />
      </div>
      <div className="img-container">
        <img src={headshot} alt="Josh Geisler Headshot" className="headshot" />
      </div>
    </div>
  );
};

export default About;
