import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from "react";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import PauseOutlinedIcon from "@material-ui/icons/PauseOutlined";
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@material-ui/icons/SkipPreviousOutlined";
import { Context, createAudioContext } from "./context";
import { tracks } from "./tracks";
import { draw } from "./draw";
import "./music.css";

const Music: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null);

  const handleNext = useCallback((): void => {
    setIndex((i) => {
      if (i < tracks.length - 1) {
        return (i += 1);
      }
      return i;
    });
  }, [setIndex]);

  const context: Context = useMemo(() => createAudioContext(handleNext), [
    handleNext,
  ]);

  useEffect(() => {
    if (playing) {
      context.audioSource.src = tracks[index].src;
      context.audioSource.play();
    }
  }, [index, context.audioSource, playing]);

  useEffect(() => {
    if (playing) {
      if (context.context.state !== "running") {
        context.context.resume();
      }
      context.audioSource.play();
    }
  }, [playing, context.audioSource, context.context]);

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

  useEffect(() => {
    let animationId: number;
    let intervalId: NodeJS.Timeout;
    if (canvas.current !== null) {
      const canvasCtx: CanvasRenderingContext2D | null = canvas.current.getContext(
        "2d"
      );
      const bufferLength: number = context.analyser.frequencyBinCount;
      const dataArray: Uint8Array = new Uint8Array(bufferLength);
      const width: number = canvas.current.width;
      const height: number = canvas.current.height;
      intervalId = setInterval(() => {
        animationId = requestAnimationFrame(() => {
          draw(
            canvasCtx,
            height,
            width,
            context.analyser,
            dataArray,
            bufferLength,
            playing
          );
        });
      }, 80);
      if (!playing && canvasCtx) {
        animationId = requestAnimationFrame(() => {
          canvasCtx.fillStyle = "rgb(36,41,56)";
          canvasCtx.fillRect(0, 0, width, height);
        });
      }
    }
    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationId);
    };
  }, [context.analyser, playing]);

  return (
    <div className='music-container'>
      <canvas ref={canvas} />
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
          setPlaying(true);
        }}
        className='icon-button'
      >
        <PlayArrowOutlinedIcon color='secondary' style={{ fontSize: "5em" }} />
      </button>
      <button
        onClick={() => {
          context.audioSource.pause();
          context.context.suspend();
          setPlaying(false);
        }}
        className='icon-button'
      >
        <PauseOutlinedIcon color='secondary' style={{ fontSize: "4.5em" }} />
      </button>
      <button onClick={handleNext} className='icon-button'>
        <SkipNextOutlinedIcon color='secondary' style={{ fontSize: "3em" }} />
      </button>
      {/* {tracks.map((track) => (
        <p key={track.title}>{track.title}</p>
      ))} */}
    </div>
  );
};

export default Music;
