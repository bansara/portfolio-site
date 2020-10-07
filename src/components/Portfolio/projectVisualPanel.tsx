import React from 'react';
import { VisualInfo } from './projectInfoInterface';

interface Props {
    visualInfo: VisualInfo
}

const ProjectVisualPanel: React.FC<Props> = (props: Props) => {
    const { visualInfo: {
        hasVideo,
        headline,
        youtubeLink,
        img,
    }} = props;
    return (
        <div className="video">
                {
                    hasVideo ?
                    <iframe 
                        src={youtubeLink} 
                        title={`${headline} demo video`} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen 
                    />
                    :
                    <img src={img} alt={`${headline} demo`} />
                }
            </div>
    )
}

export default ProjectVisualPanel;