# Emoji Button/Bar Components


```TSX
import {EmojiHandler} from "adventure-component-library"

function App() {
  const [tracker, setTracker] = useState<number>(0);

  return (
    <div className="App">
      <EmojiHandler handlerId={1} tracker={tracker} setTracker={setTracker} />
    </div>
  )
}
```

---

### Props

1. handlerId: unique non-zero number, to which component opens picker + adds emojies
2. tracker: current handler ID 
3. setTracker: state setter used to change tracker

### Styling

EmojiBar is styled to contaning div element:

- Width is adjustable
- Height flexes downward according to emoji limit


### TODO:
- Logic for closing picker 
- Dynamic styling
- Custom emojies