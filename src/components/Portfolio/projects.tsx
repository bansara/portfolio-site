import React from 'react';
import { projects } from './projectInfo';
import PortfolioProject from './portfolioProject';
import './portfolio.css';

const Projects: React.FC = () => {
    return (
        <div>
            {
                projects.map((project, i) => (
                    <PortfolioProject 
                        project={project} 
                        hasNext={i < projects.length - 1}
                        hasPrev={i > 0}
                        variant={i % 2 === 0 ? 'left' : 'right'}
                        key={project.headline} 
                    />

                ))
            }
        </div>
    )
}

export default Projects;
