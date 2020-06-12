# Emoji Button/Bar Components


```TSX
import {EmojiButton, EmojiBar, emojiDisplayData} from "adventure-component-library"

function App() {
  const [emojiData, setEmojiData] = useState<emojiDisplayData>({});

  return (
    <div className="App">
      <EmojiButton
        emojiData={emojiData}
        setEmojiData={setEmojiData}
        theme={"default"}
        limit={24}
      />
      <EmojiBar
        emojiData={emojiData}
        setEmojiData={setEmojiData}
        theme={"default"}
      />
    </div>
  )
}
```

---

### Component props

1. emojiData: state variable to hold emoji data + coount
2. theme: "default" for white background, "adventure" for a slightly styled background
3. limit (optional prop for EmojiButton): sets limit for number of emoji's allowed in EmojiBar; when not specified, default limit is 24.

### Styling

EmojiBar is styled to contaning div element:

- Width is adjustable
- Height flexes downward according to emoji limit
