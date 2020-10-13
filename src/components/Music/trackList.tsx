import React from "react";
import { tracks } from "./tracks";
interface Props {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const TrackList: React.FC<Props> = (props: Props) => {
  const { index, setIndex } = props;
  return (
    <div className='track-list'>
      
      {tracks.map((track, i) => (
        <p
          key={track.title}
          className={i === index ? "selected" : ""}
          onClick={() => setIndex(i)}
        >
          {track.title}
        </p>
      ))}
    </div>
  );
};

export default TrackList;
