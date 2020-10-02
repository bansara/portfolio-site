import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import ProjectInfo from './projectInfoInterface';

interface Props {
    project: ProjectInfo;
}

const PortfolioLeft: React.FC<Props> = (props: Props) => {
    const { project: {
        headline,
        subHeadline,
        description,
        deployLink,
        githubLink,
        youtubeLink
    } } = props;

    return (
        <div className='portfolio'>
            <div className="info">
                <h2>{headline}</h2>
                <h4>{subHeadline}</h4>
                <a 
                    href={deployLink} 
                    className='icon-link' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    title='Deploy link'
                >
                    <LaunchIcon style={{fontSize: '2.5em'}} />
                </a>
                <a 
                    href={githubLink} 
                    className='icon-link' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    title='Github link'
                >
                    <GitHubIcon style={{fontSize: '2.5em'}} />
                </a>
            <p>{description}</p>
            </div>
            <div className="video">
                {
                    youtubeLink &&
                    <iframe 
                        src={youtubeLink} 
                        title={headline} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                    />
                }
            </div>
        </div>
    )
}

export default PortfolioLeft;