import { ProjectInfo } from "./projectInfoInterface";
import grace from "./graceShopper.png";
import buddy from "./buddyLoops.png";

const pedalboard: ProjectInfo = {
  headline: "Pedalboard JS",
  technologies: ["Web Audio API", "Web MIDI API", "React", "Redux"],
  description:
    "Drawing on my background in audio engineering, I used the Web Audio API to model guitar effects in the browser that are controllable via a MIDI foot pedal. Built in a single week for Fullstack Academy's ‘Stackathon’ project.",
  deployLink: "https://pedalboardjs.netlify.com",
  githubLink: "https://github.com/bansara/pedalboard",
  hasVideo: true,
  youtubeLink: "https://www.youtube.com/embed/ejlRMCp0X0M",
};

const buddyLoops: ProjectInfo = {
  headline: "BuddyLoops",
  technologies: [
    "React",
    "Typescript",
    "Web Audio API",
    "Express",
    "Socket IO",
  ],
  description:
    "BuddyLoops is a real-time, collaborative, loop-based, musical instrument made to enable easy musical collaboration over the internet during the pandemic era. This project is an ongoing work in progress that is being continually updated.",
  deployLink: "https://buddyloops.com/",
  githubLink: "https://buddyloops.com/",
  hasVideo: false,
  img: buddy,
};

const skrap: ProjectInfo = {
  headline: "Skräp",
  technologies: [
    "React",
    "Redux",
    "Typescript",
    "Socket IO",
    "Express",
    "Sequelize",
    "PostgreSQL",
    "AWS",
  ],
  description:
    "Skräp is a marketplace app that enables people to offer money for others to clean up public parks. My capstone project at Fullstack Academy.",
  deployLink: "https://skraplitter.herokuapp.com",
  githubLink: "https://github.com/SkrapLitter/capstone",
  hasVideo: true,
  youtubeLink: "https://www.youtube.com/embed/3vS1InObKGM",
};

const graceShopper: ProjectInfo = {
  headline: "Grace's Hopper",
  technologies: ["React", "Redux", "Express", "Sequelize", "PostgreSQL", "AWS"],
  description:
    "Grace's Hopper is a fictional e-commerce site selling the world's finest smooth jazz instruments. Built for Fullstack Academy's Grace Shopper project.",
  deployLink: "https://graces-hopper.herokuapp.com/",
  githubLink: "https://github.com/Rebel-Alliance-2004/grace-shopper",
  hasVideo: false,
  img: grace,
};

export const projects = [buddyLoops, pedalboard, skrap, graceShopper];
