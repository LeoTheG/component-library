export interface emojiDisplayData {
  [emoji: string]: {
    data: EmojiData;
    count: number;
  };
}

export type emojiButtonProps = {
  emojiData: emojiDisplayData;
  setEmojiData: React.Dispatch<React.SetStateAction<emojiDisplayData>>;
  theme: string;
  limit?: number;
};

export type emojiBarProps = {
  emojiData: emojiDisplayData;
  setEmojiData: React.Dispatch<React.SetStateAction<emojiDisplayData>>;
  theme: string;
};
