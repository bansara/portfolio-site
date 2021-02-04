export interface ProjectInfo {
  headline: string;
  technologies: string[];
  description: string;
  deployLink: string;
  githubLink?: string;
  hasVideo: boolean;
  hasGithub: boolean;
  youtubeLink?: string;
  img?: string;
}

export interface Info {
  headline: string;
  technologies: string[];
  description: string;
  deployLink: string;
  hasGithub: boolean;
  githubLink: string | undefined;
}

export interface VisualInfo {
  headline: string;
  deployLink: string;
  hasVideo: boolean;
  youtubeLink?: string;
  img?: string;
}
