import React, {useEffect, useRef} from 'react';
import headshot from './josh_geisler_headshot_cropped.jpeg';
import './about.css';

const About: React.FC = () => { 
    const img = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if(img.current !== null) {
            img.current.classList.remove('right');
        }        
    },[])

    return (
        <div className='about-container'>
            <div 
                className='info-container'
            >
                <h1>Hi, I'm Josh Geisler, a full-stack software engineer living in Beacon, NY.</h1>
                <p className='subheadline'>I enjoy building web applications with a focus on intuitive UX, clean UI, and multimedia experiences.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus debitis pariatur voluptate dolor dicta aperiam provident magnam corporis asperiores doloremque voluptatem accusantium recusandae numquam deleniti expedita ratione, vel assumenda nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iusto excepturi quis molestias laborum accusantium? Reiciendis qui at porro perferendis rem. Minima voluptatem, distinctio labore quisquam iste earum aperiam animi!</p>
                <div className="icons">
                    <a 
                        href={'/projects'} 
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
                    className='headshot right' 
                    ref={img} 
                />
            </div>
        </div>
    )
}

export default About;