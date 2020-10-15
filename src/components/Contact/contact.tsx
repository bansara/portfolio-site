import React, { useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, body })
    })
      .then(() => {
        setters.forEach((fn) => fn(""));
      })
      .catch(error => alert(error));
    e.preventDefault();
  };
  const textarea = useRef<HTMLTextAreaElement>(null);
  const div = useRef<HTMLDivElement>(null);

  const handleFocus = (): void => {
    if (textarea.current !== null && div.current !== null) {
      div.current.classList.add("focused");
      if (body === "body *") {
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
              !/^[a-zA-Z0-9_.]+@[a-zA-Z0-9-.]+\.[a-z]{2,4}$/.test(email)
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
    </div>
  );
};

export default Contact;
