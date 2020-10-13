import React, {useState, useContext, useEffect } from "react";
import { ReactAudioContext } from '../../App';
import { Context } from './context';
import { renderTime } from "./utils";
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PlayerIcons from "./playerIcons";
import TrackList from "./trackList";

interface Props {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  handlePrev: () => void;
  handlePlay: () => void;
  handlePause: () => void;
  handleNext: () => void;
}

const Player: React.FC<Props> = (props: Props) => {
  const [volume, setVolume] = useState(1);
  const [trackTime, setTrackTime] = useState(0);
  const context: Context = useContext(ReactAudioContext);
  const { audioSource } = context;
  const handleVolume = (event: any, newValue: number | number[]) => {
    setVolume(newValue as number);
    audioSource.volume = newValue as number;
  };
  const handleTrackTime = (event: any, newValue: number | number[]) => {
    setTrackTime(newValue as number);
    audioSource.currentTime = newValue as number * audioSource.duration;
  };
  const {
    handlePrev,
    handlePlay,
    handlePause,
    handleNext,
    index,
    setIndex,
  } = props;

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      const currentTime = audioSource.currentTime / audioSource.duration;
      setTrackTime(currentTime);
    }, 500);
    return () => {
      clearInterval(intervalId);
    }
  },[audioSource])

  return (
    <div className='player-container'>
      <PlayerIcons
        handlePrev={handlePrev}
        handlePlay={handlePlay}
        handlePause={handlePause}
        handleNext={handleNext}
      />
      <div className="slider">
        <p>{renderTime(Math.round(audioSource.currentTime))}</p>
        <Slider 
          value={trackTime}
          onChange={handleTrackTime}
          color='secondary'
            aria-labelledby="continuous-slider"
            min={0}
            max={1}
            step={0.01}
        />
        <p>{audioSource.duration ? renderTime(Math.round(audioSource.duration)) : "0:00"}</p>
      </div>
      <div className="slider">
        <VolumeDown />
        <Slider 
          value={volume}
          color='secondary'
          aria-labelledby="continuous-slider"
          min={0}
          max={1}
          step={0.01}
          onChange={handleVolume}
        />
        <VolumeUp />
      </div>
      <TrackList
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
};

export default Player;
