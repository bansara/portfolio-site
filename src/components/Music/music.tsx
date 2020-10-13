import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext
} from "react";
import { Context } from './context';
import { ReactAudioContext } from '../../App'
import Player from "./player";
import { tracks } from "./tracks";
import { draw } from "./draw";
import "./music.css";

const Music: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const context: Context = useContext(ReactAudioContext);
  const canvas = useRef<HTMLCanvasElement>(null);
  const container = useRef<HTMLDivElement>(null);
  let playPauseTimeoutId: NodeJS.Timeout;
  const handleNext = useCallback((): void => {
    setIndex((i) => {
      if (i < tracks.length - 1) {
        return (i += 1);
      }
      return i;
    });
  }, [setIndex]);
  context.audioSource.onended = (): void => {
    handleNext();
  }
  const handlePlay = (): void => {
    if (context.audioSource.paused) {
      context.audioSource.src = tracks[index].src;
      if (playPauseTimeoutId) {
        clearTimeout(playPauseTimeoutId);
      }
      if (context.context.state !== "running") {
        context.context.resume();
      }
      context.masterVol.gain.linearRampToValueAtTime(
        0,
        context.context.currentTime + 0.1
      );
      playPauseTimeoutId = setTimeout(() => {
        context.masterVol.gain.linearRampToValueAtTime(
          1,
          context.context.currentTime + 0.1
        );
        context.audioSource.play();
        setPlaying(true);
      }, 100);
    }
  };
  const handlePause = (): void => {
    if (playPauseTimeoutId) {
      clearTimeout(playPauseTimeoutId);
    }
    context.masterVol.gain.setTargetAtTime(
      0,
      context.context.currentTime,
      0.01
    );
    playPauseTimeoutId = setTimeout(() => {
      context.audioSource.pause();
      setPlaying(false);
    }, 20);
  };

  const handlePrev = (): void => {
    if (context.audioSource.currentTime > 2) {
      context.audioSource.currentTime = 0;
    } else {
      if (index > 0) {
        setIndex(index - 1);
      }
    }
  };
  // Fires after handleNext and handlePrev
  useEffect(() => {
    context.audioSource.src = tracks[index].src;
    context.audioSource.load();
    if (playing) {
      context.audioSource.play();
    }
  }, [index, context.audioSource, playing]);

  useEffect(() => {
    // fade out audio when user navigates away
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
    if (canvas.current !== null && container.current !== null) {
      const canvasCtx: CanvasRenderingContext2D | null = canvas.current.getContext(
        "2d"
      );
      let containerProps: DOMRect = container.current.getBoundingClientRect();
      canvas.current.width = containerProps.width;
      canvas.current.height = containerProps.height;
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
    <div className='music-container' ref={container}>
      <canvas ref={canvas} />
      <Player
        handlePrev={handlePrev}
        handlePlay={handlePlay}
        handlePause={handlePause}
        handleNext={handleNext}
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
};

export default Music;
