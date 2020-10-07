import { ProjectInfo } from "./projectInfoInterface";
import grace from "./graceShopper.png";

const pedalboard: ProjectInfo = {
  headline: "Pedalboard JS",
  technologies: ["Web Audio API", "Web MIDI API", "React", "Redux"],
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, error eaque! Modi est impedit id optio consequuntur laudantium sit, illo minima quis molestias laborum fugiat eaque quos animi vel doloremque.",
  deployLink: "https://pedalboardjs.netlify.com",
  githubLink: "https://github.com/bansara/pedalboard",
  hasVideo: true,
  youtubeLink: "https://www.youtube.com/embed/ejlRMCp0X0M",
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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, error eaque! Modi est impedit id optio consequuntur laudantium sit, illo minima quis molestias laborum fugiat eaque quos animi vel doloremque.",
  deployLink: "https://skraplitter.herokuapp.com",
  githubLink: "https://github.com/SkrapLitter/capstone",
  hasVideo: true,
  youtubeLink: "https://www.youtube.com/embed/3vS1InObKGM",
};

const graceShopper: ProjectInfo = {
  headline: "Grace's Hopper",
  technologies: ["React", "Redux", "Express", "Sequelize", "PostgreSQL", "AWS"],
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, error eaque! Modi est impedit id optio consequuntur laudantium sit, illo minima quis molestias laborum fugiat eaque quos animi vel doloremque.",
  deployLink: "https://graces-hopper.herokuapp.com/",
  githubLink: "https://github.com/Rebel-Alliance-2004/grace-shopper",
  hasVideo: false,
  img: grace,
};

export const projects = [pedalboard, skrap, graceShopper];
