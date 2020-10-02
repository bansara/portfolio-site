import React from 'react';
import { pedalboard } from './projectInfo';
import PortfolioLeft from './portfolioLeft';
import './portfolio.css';

const Projects: React.FC = () => {
    return (
        <div>
            <PortfolioLeft project={pedalboard} />
        </div>
    )
}

export default Projects;
