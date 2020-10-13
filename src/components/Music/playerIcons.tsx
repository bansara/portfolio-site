import React from "react";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import StopOutlinedIcon from '@material-ui/icons/StopOutlined';
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@material-ui/icons/SkipPreviousOutlined";

interface Props {
  handlePrev: () => void;
  handlePlay: () => void;
  handlePause: () => void;
  handleNext: () => void;
}

const PlayerIcons: React.FC<Props> = (props: Props) => {
  const { handlePrev, handlePlay, handlePause, handleNext } = props;
  return (
    <div className='player'>
      <button onClick={handlePrev} className='icon-button'>
        <SkipPreviousOutlinedIcon
          color='secondary'
          style={{ fontSize: "3em" }}
        />
      </button>
      <button onClick={handlePlay} className='icon-button'>
        <PlayArrowOutlinedIcon color='secondary' style={{ fontSize: "5em" }} />
      </button>
      <button onClick={handlePause} className='icon-button'>
        <StopOutlinedIcon color='secondary' style={{ fontSize: "4.5em" }} />
      </button>
      <button onClick={handleNext} className='icon-button'>
        <SkipNextOutlinedIcon color='secondary' style={{ fontSize: "3em" }} />
      </button>
    </div>
  );
};

export default PlayerIcons;
