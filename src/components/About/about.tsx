import React, {useEffect, useRef} from 'react';
import headshot from './josh_geisler_headshot_cropped.jpeg';
import './about.css';

const resume: any = require('./Joshua_Geisler_Resume.pdf');

const About: React.FC = () => { 
    const img = useRef<HTMLImageElement>(null);
    const h1 = useRef<HTMLHeadingElement>(null);
    const p = useRef<HTMLParagraphElement>(null);
    const pSub = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        if(img.current !== null) {
            img.current.classList.remove('right');
        } 
        if(p.current !== null){
            p.current.classList.remove('transparent');
        }   
        if(pSub.current !== null){
            pSub.current.classList.remove('transparent');
        }   
    },[])

    return (
        <div className='about-container'>
            <div 
                className='info-container'
            >
                <h1 ref={h1}>Hi, I'm Josh Geisler, a full-stack software engineer living in Beacon, NY.</h1>
                <p className='subheadline transparent' ref={pSub}>I enjoy building web applications with a focus on intuitive UX, clean UI, and multimedia experiences.</p>
                <p className='bio transparent' ref={p}>After a 9-year world tour as a musician in, and eventually bandleader of, a Cirque du Soleil show, I decided to transition to programming. I've always loved music technology and coding is an extension of that passion. Though I'd been programming and making websites on the side for years, I decided to go deeper and pursue a career as a developer, so I enrolled in Fullstack Academy.</p>
                <div className="icons">
                    <a 
                        href={resume} 
                        className='icon-link' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        title='Resume'
                    >
                        Resume
                    </a>
                    <a 
                        href={'https://www.linkedin.com/in/joshuageisler/'} 
                        className='icon-link' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        title='Linkedin link'
                    >   
                        LinkedIn
                    </a>
                    <a 
                        href={'https://github.com/bansara?tab=repositories'} 
                        className='icon-link' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        title='Github link'
                    >      
                        Github
                    </a>
                </div>
                <hr />
            </div>
            <div className="img-container">
                <img 
                    src={headshot} 
                    alt='Josh Geisler Headshot' 
                    className='headshot' 
                    ref={img} 
                />
            </div>
        </div>
    )
}

export default About;