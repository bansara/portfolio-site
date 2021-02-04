import { ProjectInfo } from "./projectInfoInterface";
import buddy from "./buddyLoops.png";

const pedalboard: ProjectInfo = {
  headline: "Pedalboard JS",
  technologies: ["Web Audio API", "Web MIDI API", "React", "Redux"],
  description:
    "Drawing on my background in audio engineering, I used the Web Audio API to model guitar effects in the browser that are controllable via a MIDI foot pedal. Built in a single week for Fullstack Academy's ‘Stackathon’ project.",
  deployLink: "https://pedalboardjs.netlify.com",
  hasGithub: true,
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
  hasGithub: false,
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
  hasGithub: true,
  githubLink: "https://github.com/SkrapLitter/capstone",
  hasVideo: true,
  youtubeLink: "https://www.youtube.com/embed/3vS1InObKGM",
};

export const projects = [buddyLoops, pedalboard, skrap];
