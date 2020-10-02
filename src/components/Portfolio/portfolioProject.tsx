import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { ProjectInfo, Info, VisualInfo } from './projectInfoInterface';
import ProjectInfoPanel from './projectInfoPanel';
import ProjectVisualPanel from './projectVisualPanel';

interface Props {
    project: ProjectInfo;
    hasNext: boolean;
    variant: 'right' | 'left';
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
            imgURL,
            },
        hasNext, 
        variant
    } = props;

    const info: Info = {
        headline,
        technologies,
        description,
        deployLink,
        githubLink,
    }

    const visualInfo: VisualInfo = {
        headline,
        hasVideo,
        youtubeLink,
        imgURL,
    }
    
    const handleNext = (): void => {
        const div: HTMLElement | null = document.getElementById(headline.split('')[0]);
        if(div){
            const scrollHeight: number = window.scrollY;
            const divInfo: DOMRect = div.getBoundingClientRect();
            window.scroll({
                top: scrollHeight + divInfo.height + divInfo.top,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div 
            className='portfolio' 
            id={headline.split('')[0]}
        >
            {
                variant === 'left' ? 
                    <>
                        <ProjectInfoPanel info={info} />
                        <ProjectVisualPanel visualInfo={visualInfo} />
                    </>
                :
                    <>
                        <ProjectVisualPanel visualInfo={visualInfo} />
                        <ProjectInfoPanel info={info} />
                    </>
            }
            {
                hasNext &&
                <div className='next'>
                    <Button
                        onClick={handleNext}
                        variant='outlined'
                        color='primary'
                    >
                        next&nbsp;
                        <ExpandMoreIcon />
                    </Button>
                </div>
            }
        </div>
    )
}

export default PortfolioProject;