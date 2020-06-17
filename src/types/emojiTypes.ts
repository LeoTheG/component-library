import { EmojiData } from "emoji-mart";

export interface emojiDisplayData {
  [emoji: string]: {
    data: EmojiData;
    count: number;
  };
}

export type emojiHandlerProps = {
  handlerId: number;
  tracker: number;
  setTracker: React.Dispatch<React.SetStateAction<number>>;
};

export type emojiBarProps = {
  onClick: (emoji: EmojiData) => void;
  onDelete: (emoji: EmojiData) => void;
  onToggle: () => void;
  emojiData: emojiDisplayData;
  handlerId: number;
  tracker: number;
};
