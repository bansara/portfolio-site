import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ComputerIcon from '@material-ui/icons/Computer';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import './nav.css';

const Navbar: React.FC = () => {
    let { pathname } = useLocation();

    return (
        <nav className='nav'>
            <div className='nav-logo'>
                <Link to="/">
                    <h1 className='krona'>&lt; JoshGeisler /&gt;</h1>
                </Link>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/about" className={pathname === '/' ? 'nav-link active-page' : 'nav-link'}>
                        <PersonOutlineIcon />
                        <span className='link-text'>About</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className={pathname === '/projects' ? 'nav-link active-page' : 'nav-link'}>
                        <ComputerIcon />
                        <span className='link-text'>Projects</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/music" className={pathname === '/music' ? 'nav-link active-page' : 'nav-link'}>
                        <MusicNoteIcon />
                        <span className='link-text'>Music</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className={pathname === '/contact' ? 'nav-link active-page' : 'nav-link'}>
                        <MailOutlineIcon />
                        <span className='link-text'>Contact</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;