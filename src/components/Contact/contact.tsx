import React, { useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { isEmail } from '../../utils/isEmail';
import "./contact.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 300,
        maxWidth: "100%",
        color: "var(--white)",
      },
    },
  })
);

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("message *");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("");
  const [error, setError] = useState(false);
  const setters: React.Dispatch<string>[] = [
    setName,
    setEmail,
    setBody,
  ];

  const encode = (data: any) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if(name.length && body.length && body !== "message *" && isEmail(email)){
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, body })
      })
        .then(() => {
          setError(false);
          setAlert("Thank you! Your message has been sent.");
          setOpen(true);
          setters.forEach((fn) => fn(""));
        })
        .catch(() => {
          setOpen(true);
          setError(true);
          setAlert("Oops! There was an error. Please Try again!");
        });
      } else {
        setError(true);
        if(!name.length){
          setAlert("Name is required");
        } else if(!isEmail(email)){
          setAlert("Please enter a valid email address");
        } else {
          setAlert("Message must not be empty");
        }
        setOpen(true);
    }

    e.preventDefault();
  };
  const textarea = useRef<HTMLTextAreaElement>(null);
  const div = useRef<HTMLDivElement>(null);

  const handleFocus = (): void => {
    if (textarea.current !== null && div.current !== null) {
      div.current.classList.add("focused");
      if (body === "message *") {
        setBody("");
      }
    }
  };
  const handleBlur = (): void => {
    if (textarea.current !== null && div.current !== null) {
      div.current.classList.remove("focused");
      if (body === "") {
        setBody("message *");
      }
    }
  };
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className='contact-container'>
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
            error={
              !!email.length &&
              !isEmail(email)
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color='primary'
            variant='filled'
            className={classes.root}
          />
        </div>
        <div className='body-div' ref={div}>
          <textarea
            className='body-text'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={textarea}
          />
        </div>
        <Button
          variant='outlined'
          color='primary'
          type='submit'
          onClick={handleSubmit}
          style={{ width: 200, marginTop: "1rem" }}
        >
          Submit
        </Button>
      </form>
      <Snackbar 
        open={open} 
        autoHideDuration={4000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <p className={error ? 'error' : 'alert'}>{alert}</p>
      </Snackbar>
    </div>
  );
};

export default Contact;
