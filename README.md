# Adventure Component Library

Reusable components for applications

## View Library

`npm run start:library`

## Watch for local development

Linked apps will automatically update to use latest compiled version by watching.

`npm run start`

## Using library in local app for library development

- Make the repo available for linking with other apps
    ```bash
    cd /path/to/adventure-component-library
    npm link
    ```

- Link to library in other app
    ```bash
    cd /path/to/my-application
    npm link /path/to/adventure-component-library
    ```

## Examples

Using library in other app simplest example:
```JSX
import React from "react";
import { Explorer, sites } from "adventure-component-library";

function App() {
  return (
    <div className="App">
      <Explorer site={sites.ginandjuice} />
    </div>
  );
}

export default App;
```