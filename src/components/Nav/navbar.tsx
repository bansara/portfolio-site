import React from 'react';
import ComputerIcon from '@material-ui/icons/Computer';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import './nav.css';

const Navbar: React.FC = () => {
    return (
        <nav className='nav'>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <PersonOutlineIcon />
                        <span className='link-text'>About</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <ComputerIcon />
                        <span className='link-text'>Projects</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <MusicNoteIcon />
                        <span className='link-text'>Music</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <MailOutlineIcon />
                        <span className='link-text'>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;