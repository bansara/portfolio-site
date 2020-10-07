export interface ProjectInfo {
  headline: string;
  technologies: string[];
  description: string;
  deployLink: string;
  githubLink: string;
  hasVideo: boolean;
  youtubeLink?: string;
  img?: string;
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
  deployLink: string;
  hasVideo: boolean;
  youtubeLink?: string;
  img?: string;
}
