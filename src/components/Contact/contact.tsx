import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './contact.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 300,
        maxWidth: '100%',
        color: 'var(--white)',
      },
    },
  }),
);

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const textarea: HTMLElement | null = document.querySelector('.body-text');
        const div: HTMLElement | null = document.querySelector('.body-div');
            if(textarea && div) {
                textarea.addEventListener('focus', () => {
                    console.log('kjhdsfkjhsd')
                    div.classList.add('focused')
                });
                textarea.addEventListener('blur', () => {
                    div.classList.remove('focused')
                });
            }
    }, [])

    const classes = useStyles();

    return (
        <div className="contact-container">
            <form>
                <div>
                    <TextField 
                        label='name' 
                        required
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        color='primary' 
                        variant='filled'
                        className={classes.root}
                    />
                </div>
                <div>
                    <TextField 
                        label='email' 
                        type='email'
                        required
                        error={!!email.length && !/^[a-zA-Z0-9_.]+@[a-zA-Z0-9-.]+\.[a-z]{2,4}$/.test(email)}
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        color='primary'
                        variant='filled'
                        className={classes.root}
                    />
                </div>
                <div>
                    <TextField 
                        label='subject' 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        color='primary'
                        variant='filled'
                        className={classes.root}
                    />
                </div>
                <div className='body-div'>
                    <textarea 
                        className='body-text'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default Contact;