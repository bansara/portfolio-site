import React, { useEffect } from "react";
import { projects } from "./projectInfo";
import PortfolioProject from "./portfolioProject";
import "./portfolio.css";

const Projects: React.FC = () => {
  useEffect(() => {
    window.scroll(0, 0);
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("down");
        } else {
          entry.target.classList.add("down");
        }
      });
    });
    const infoSections = document.querySelectorAll(".down");
    infoSections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div>
      {projects.map((project, i) => (
        <PortfolioProject
          project={project}
          hasNext={i < projects.length - 1}
          hasPrev={i > 0}
          variant={i % 2 === 0 ? "left" : "right"}
          key={project.headline}
        />
      ))}
    </div>
  );
};

export default Projects;
