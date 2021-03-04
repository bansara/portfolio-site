import React, { useEffect, useRef } from "react";
import headshot from "./josh_geisler_headshot_cropped.jpeg";
import "./about.css";

const resume: any = require("./Josh_Geisler_Resume.pdf");

const About: React.FC = () => {
  const p: React.RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(
    null
  );
  const pSub: React.RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(
    null
  );
  useEffect(() => {
    window.scroll(0, 0);
    if (p.current !== null && pSub.current !== null) {
      p.current.classList.remove("transparent");
      pSub.current.classList.remove("transparent");
    }
  }, []);

  return (
    <div className="about-container">
      <div className="info-container">
        <h1>Hi, I'm Josh Geisler, a software engineer living in Beacon, NY.</h1>
        <p className="subheadline transparent" ref={pSub}>
          I enjoy building web applications with a focus on intuitive UX, clean
          UI, and multimedia experiences.
        </p>
        <p className="bio transparent" ref={p}>
          Typescript, Javascript, React, Redux, Tailwind CSS, Material UI, Node
          JS, Postgres, Sequelize, Firebase, Serverless, Cloud Functions,
          JAMStack, NoSQL Databases, MongoDB, Mongoose, React Native, Stripe
          API, Paypal, Webpack, Babel Git, Heroku, Netlify, Wordpress, Web Audio
          API, Web MIDI API, Audio Engineering
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
