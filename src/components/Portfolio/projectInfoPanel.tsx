import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import { Info } from "./projectInfoInterface";

interface Props {
  info: Info;
}

const ProjectInfoPanel: React.FC<Props> = (props: Props) => {
  const {
    info: {
      headline,
      technologies,
      deployLink,
      githubLink,
      description,
      hasGithub,
    },
  } = props;

  return (
    <div className="info down">
      <h2>{headline}</h2>
      <h4>{technologies.join(" • ")}</h4>
      <a
        href={deployLink}
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
        title="Deploy link"
      >
        <LaunchIcon style={{ fontSize: "2.5em" }} />
      </a>
      {hasGithub && (
        <a
          href={githubLink}
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
          title="Github link"
        >
          <GitHubIcon style={{ fontSize: "2.5em" }} />
        </a>
      )}

      <p className="description">{description}</p>
    </div>
  );
};

export default ProjectInfoPanel;
