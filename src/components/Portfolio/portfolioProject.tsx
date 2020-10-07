import React, { useRef } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Button from "@material-ui/core/Button";
import { ProjectInfo, Info, VisualInfo } from "./projectInfoInterface";
import ProjectInfoPanel from "./projectInfoPanel";
import ProjectVisualPanel from "./projectVisualPanel";

interface Props {
  project: ProjectInfo;
  hasNext: boolean;
  hasPrev: boolean;
  variant: "right" | "left";
}

const PortfolioProject: React.FC<Props> = (props: Props) => {
  const {
    project: {
      headline,
      technologies,
      description,
      deployLink,
      githubLink,
      hasVideo,
      youtubeLink,
      img,
    },
    hasNext,
    hasPrev,
    variant,
  } = props;

  const info: Info = {
    headline,
    technologies,
    description,
    deployLink,
    githubLink,
  };

  const visualInfo: VisualInfo = {
    headline,
    deployLink,
    hasVideo,
    youtubeLink,
    img,
  };

  const div = useRef<HTMLDivElement>(null);

  const handleNext = (): void => {
    if (div.current !== null) {
      const scrollHeight: number = window.scrollY;
      const divInfo: DOMRect = div.current.getBoundingClientRect();
      window.scroll({
        top: scrollHeight + divInfo.height + divInfo.top,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const handlePrev = (): void => {
    if (div.current !== null) {
      const scrollHeight: number = window.scrollY;
      const divInfo: DOMRect = div.current.getBoundingClientRect();
      window.scroll({
        top: scrollHeight - divInfo.height + divInfo.top,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='portfolio' ref={div}>
      {variant === "left" ? (
        <>
          <ProjectInfoPanel info={info} />
          <ProjectVisualPanel visualInfo={visualInfo} />
        </>
      ) : (
        <>
          <ProjectVisualPanel visualInfo={visualInfo} />
          <ProjectInfoPanel info={info} />
        </>
      )}
      {hasPrev && (
        <div className='prev'>
          <Button onClick={handlePrev} variant='outlined' color='primary'>
            prev&nbsp;
            <ExpandLessIcon />
          </Button>
        </div>
      )}
      {hasNext && (
        <div className='next'>
          <Button onClick={handleNext} variant='outlined' color='primary'>
            next&nbsp;
            <ExpandMoreIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PortfolioProject;
