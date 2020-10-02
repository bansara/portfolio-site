export interface ProjectInfo {
    headline: string;
    technologies: string[];
    description: string;
    deployLink: string;
    githubLink: string;
    hasVideo: boolean;
    youtubeLink?: string;
    imgURL?: string;
}

export interface Info {
    headline: string;
    technologies: string[];
    description: string;
    deployLink: string;
    githubLink: string;
}

export interface VisualInfo {
    headline: string;
    hasVideo: boolean;
    youtubeLink?: string;
    imgURL?: string;
}