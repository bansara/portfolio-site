import React, { useState, useMemo, useEffect } from "react";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import PauseOutlinedIcon from "@material-ui/icons/PauseOutlined";
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@material-ui/icons/SkipPreviousOutlined";
import { Context, createAudioContext } from "./context";
import { tracks } from "./tracks";
import "./music.css";

const Music: React.FC = () => {
  const [index, setIndex] = useState(0);
  const context: Context = useMemo(() => createAudioContext(), []);

  useEffect(() => {
    context.audioSource.src = tracks[index].src;
  }, [index, context.audioSource]);

  useEffect(() => {
    return () => {
      context.masterVol.gain.linearRampToValueAtTime(
        0,
        context.context.currentTime + 0.5
      );
      setTimeout(() => {
        context.context.close();
      }, 500);
    };
  }, [context]);

  return (
    <div className='music-container'>
      <button
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1);
          } else {
            setIndex(tracks.length - 1);
          }
        }}
        className='icon-button'
      >
        <SkipPreviousOutlinedIcon
          color='secondary'
          style={{ fontSize: "3em" }}
        />
      </button>
      <button
        onClick={() => {
          context.audioSource.play();
        }}
        className='icon-button'
      >
        <PlayArrowOutlinedIcon color='secondary' style={{ fontSize: "5em" }} />
      </button>
      <button
        onClick={() => {
          context.audioSource.pause();
        }}
        className='icon-button'
      >
        <PauseOutlinedIcon color='secondary' style={{ fontSize: "4.5em" }} />
      </button>
      <button
        onClick={() => {
          if (index < tracks.length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
        className='icon-button'
      >
        <SkipNextOutlinedIcon color='secondary' style={{ fontSize: "3em" }} />
      </button>
      {/* {tracks.map((track) => (
        <p key={track.title}>{track.title}</p>
      ))} */}
    </div>
  );
};

export default Music;
