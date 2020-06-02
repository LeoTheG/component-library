import React from "react";
import { songData, ISong } from "../../types/musicData";
import IconButton from "@material-ui/core/IconButton";
import SkipPrevious from "@material-ui/icons/SkipPrevious";
import SkipNext from "@material-ui/icons/SkipNext";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";

interface IMusicControllerProps {
  isPlaying: boolean;
  onClickPrev: () => void;
  onClickNext: () => void;
  onTogglePlay: () => void;
  song: ISong;
}

export const MusicController = (props: IMusicControllerProps) => {
  return (
    <div className="music-controls-container">
      <div
        className="flex-row"
        style={{
          width: "100%",
          alignItems: "space-between",
        }}
      >
        <div className="flex-row">
          <IconButton onClick={props.onClickPrev} style={{ color: "white" }}>
            <SkipPrevious />
          </IconButton>

          <IconButton onClick={props.onTogglePlay} style={{ color: "white" }}>
            {props.isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>

          <IconButton onClick={props.onClickNext} style={{ color: "white" }}>
            <SkipNext />
          </IconButton>
        </div>
        <div
          className="flex-col"
          style={{
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div>Artist: {props.song.artist}</div>
          <div>Song: {props.song.songName}</div>
        </div>
      </div>
    </div>
  );
};
