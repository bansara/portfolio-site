import { ProjectInfo } from './projectInfoInterface';

const pedalboard: ProjectInfo = {
    headline: 'Pedalboard JS',
    technologies: ['Web Audio API','React', 'Redux'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, error eaque! Modi est impedit id optio consequuntur laudantium sit, illo minima quis molestias laborum fugiat eaque quos animi vel doloremque.',
    deployLink: 'https://pedalboardjs.netlify.com',
    githubLink: 'https://github.com/bansara/pedalboard',
    hasVideo: true,
    youtubeLink: 'https://www.youtube.com/embed/ejlRMCp0X0M',
}

const skrap: ProjectInfo = {
    headline: 'Skräp',
    technologies: ['React', 'Redux', 'Typescript', 'Socket IO', 'Express', 'Sequelize', 'PostgreSQL'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, error eaque! Modi est impedit id optio consequuntur laudantium sit, illo minima quis molestias laborum fugiat eaque quos animi vel doloremque.',
    deployLink: 'https://skraplitter.herokuapp.com',
    githubLink: 'https://github.com/SkrapLitter/capstone',
    hasVideo: true,
    youtubeLink: 'https://www.youtube.com/embed/d0tU18Ybcvk',
}

export const projects = [pedalboard, skrap,];
