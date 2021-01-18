import React, { useState, useContext, useEffect, useRef } from "react";
import { ReactAudioContext } from "../../App";
import { Context } from "./context";
import { draw } from "./draw";
import { renderTime } from "./utils";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import PlayerIcons from "./playerIcons";
import TrackList from "./trackList";

interface Props {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  handlePrev: () => void;
  handlePlay: () => void;
  handlePause: () => void;
  handleNext: () => void;
  playing: boolean;
}

const Player: React.FC<Props> = (props: Props) => {
  const [volume, setVolume] = useState(1);
  const [trackTime, setTrackTime] = useState(0);
  const [loading, setLoading] = useState("loading...");
  const canvas = useRef<HTMLCanvasElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const context: Context = useContext(ReactAudioContext);
  const { audioSource, masterVol } = context;
  const handleVolume = (event: any, newValue: number | number[]) => {
    setVolume(newValue as number);
    // audioSource.volume = newValue as number;
    masterVol.gain.setTargetAtTime(
      newValue as number,
      context.context.currentTime,
      0.01
    );
  };

  const handleTrackTime = (event: any, newValue: number | number[]) => {
    setTrackTime(newValue as number);
    audioSource.currentTime = (newValue as number) * audioSource.duration;
  };
  const {
    handlePrev,
    handlePlay,
    handlePause,
    handleNext,
    index,
    setIndex,
    playing,
  } = props;

  useEffect(() => {
    audioSource.oncanplaythrough = () => {
      setLoading("");
      if (playing) {
        audioSource.play();
      }
    };
    audioSource.onemptied = () => {
      setLoading("Loading...");
    };
    audioSource.onwaiting = () => {
      setLoading("Waiting for data...");
    };
    audioSource.onstalled = () => {
      setLoading("Stalled...Waiting for data");
    };
    audioSource.onerror = () => {
      setLoading("ERROR...");
    };
  }, [
    audioSource,
    audioSource.oncanplaythrough,
    playing,
    audioSource.onemptied,
    audioSource.onerror,
    audioSource.onstalled,
    audioSource.onwaiting,
  ]);
  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      const currentTime = audioSource.currentTime / audioSource.duration;
      setTrackTime(currentTime);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [audioSource]);
  useEffect(() => {
    let animationId: number;
    let intervalId: NodeJS.Timeout;
    if (canvas.current !== null && container.current !== null) {
      const canvasCtx: CanvasRenderingContext2D | null = canvas.current.getContext(
        "2d"
      );
      let containerProps: DOMRect = container.current.getBoundingClientRect();
      canvas.current.width = containerProps.width - 32;
      canvas.current.height = 64;
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
            !audioSource.paused
          );
        });
      }, 100);
      if (audioSource.paused && canvasCtx) {
        animationId = requestAnimationFrame(() => {
          canvasCtx.fillStyle = "rgba(24,26,35,0)";
          canvasCtx.fillRect(0, 0, width, height);
        });
      }
    }
    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationId);
    };
  }, [context.analyser, audioSource.paused]);

  return (
    <div className="player-container" ref={container}>
      <canvas ref={canvas} />
      <PlayerIcons
        handlePrev={handlePrev}
        handlePlay={handlePlay}
        handlePause={handlePause}
        handleNext={handleNext}
      />
      <div className="slider">
        <p className="loadingMsg">{loading}</p>
      </div>
      <div className="slider">
        <p>{renderTime(Math.round(audioSource.currentTime))}</p>
        <Slider
          value={trackTime}
          onChange={handleTrackTime}
          color="secondary"
          aria-labelledby="continuous-slider"
          min={0}
          max={1}
          step={0.01}
        />
        <p>
          {audioSource.duration
            ? renderTime(Math.round(audioSource.duration))
            : "0:00"}
        </p>
      </div>
      <div className="slider">
        <VolumeDown />
        <Slider
          value={volume}
          color="secondary"
          aria-labelledby="continuous-slider"
          min={0}
          max={1}
          step={0.01}
          onChange={handleVolume}
        />
        <VolumeUp />
      </div>
      <TrackList index={index} setIndex={setIndex} />
    </div>
  );
};

export default Player;
