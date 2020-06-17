import React, { useState } from "react";
import { Picker, Emoji, EmojiData } from "emoji-mart";
import {
  emojiBarProps,
  emojiDisplayData,
  emojiHandlerProps,
} from "../../types/emojiTypes";
import {
  Paper,
  Button,
  Chip,
  Collapse,
  Grid,
  Container,
} from "@material-ui/core";
import "emoji-mart/css/emoji-mart.css";
import "./EmojiHandler.css";

const EmojiBar = (props: emojiBarProps) => {
  const displayedEmojis = Object.values(props.emojiData);

  return (
    <Container fixed>
      <div className={"emoji-picker"}>
        <Collapse in={props.handlerId === props.tracker}>
          <Picker
            set="apple"
            theme={"dark"}
            title={"adventure corp"}
            onSelect={(emoji) => {
              // if (Object.keys(props.emojiData).length >= limit) return;
              props.onClick(emoji);
            }}
          />
        </Collapse>
      </div>
      <Paper elevation={24}>
        <Grid container spacing={1}>
          <Grid item xs={"auto"}>
            <Button
              // className={classes.root}
              variant="contained"
              onClick={() => props.onToggle()}
            >
              <Emoji emoji="smile" set="apple" size={24} />
            </Button>
          </Grid>
          {displayedEmojis.map((value, index) => {
            return (
              <Grid item xs={"auto"} key={index}>
                <Chip
                  avatar={<Emoji set={"apple"} size={24} emoji={value.data} />}
                  label={"+" + value.count}
                  onClick={() => props.onClick(value.data)}
                  onDelete={() => props.onDelete(value.data)}
                  variant="outlined"
                  size="medium"
                />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Container>
  );
};

const EmojiHandler = (props: emojiHandlerProps) => {
  const [emojisDisplayed, setEmojisDisplayed] = useState<emojiDisplayData>({});

  // Handles appending new emoji to bar if not in data tree
  // Handles upticking emoji count through Picker event and emoji chip event
  const ticker = (emoji: EmojiData) => {
    if (!Object.keys(emojisDisplayed).includes(emoji.name)) {
      setEmojisDisplayed({
        ...emojisDisplayed,
        [emoji.name]: { data: emoji, count: 1 },
      });
    } else {
      setEmojisDisplayed({
        ...emojisDisplayed,
        [emoji.name]: {
          data: emoji,
          count: emojisDisplayed[emoji.name].count + 1,
        },
      });
    }
  };

  // Deletes chip from data tree on event
  const deleteChip = (emoji: EmojiData) => {
    let newObj: emojiDisplayData = {};
    Object.assign(newObj, emojisDisplayed);
    if (newObj) delete newObj[emoji.name];
    return setEmojisDisplayed(newObj);
  };

  // Checks if tracker is pointing to designated handler, if so sets tracker to "0"
  // No handle should have the ID of "0"
  const onToggle = () => {
    if (props.handlerId === props.tracker) {
      props.setTracker(0);
    } else {
      props.setTracker(props.handlerId);
    }
  };

  return (
    <div>
      <EmojiBar
        onClick={ticker}
        onDelete={deleteChip}
        onToggle={onToggle}
        emojiData={emojisDisplayed}
        handlerId={props.handlerId}
        tracker={props.tracker}
      />
    </div>
  );
};

export default EmojiHandler;
