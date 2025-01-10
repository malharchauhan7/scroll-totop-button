# Scroll-ToTop-Button

A customizable and lightweight React component to add a "Scroll to Top" button in your React applications. Enhance user experience with a smooth and modern scrolling experience.

## Features

- Smooth scrolling to the top of the page.
- Button appears only after the user scrolls past a configurable threshold.
- Fully customizable styles.
- Lightweight and easy to integrate.
- Built with TypeScript for better type safety.

## Installation

Install Scroll-ToTop-Button with npm

```bash
  npm i scroll-totop-button
```

## Usage/Examples

```typescript
import React from "react";
import { scrollToTop } from "scroll-totop-button";

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <p>Scroll down to see the button!</p>

      <ScrollToTop
        threshold={300}
        smooth={true}
        className="scroll-to-top"
        style={{
          backgroundColor: "white",
          color: "black",
          fontSize: "1.1rem",
        }}
      />
    </div>
  );
};

export default App;
```

## Props

| Prop        | Type      | Default | Description                                                                  |
| ----------- | --------- | ------- | ---------------------------------------------------------------------------- |
| `threshold` | `number`  | `300`   | The number of pixels the user must scroll before the button becomes visible. |
| `smooth`    | `boolean` | `true`  | Enables smooth scrolling when set to `true`.                                 |
| `style`     | `object`  | `{}`    | Inline styles to customize the button's appearance.                          |
| `className` | `string`  | `""`    | Add a custom class to the button for additional styling flexibility.         |

## How It Works

The Scroll-ToTop-Button component tracks the user's scroll position and only becomes visible after the user has scrolled down past a certain threshold (default: 300px). Once clicked, it smoothly scrolls the page back to the top, improving usability for long-scrolling pages.

## Advanced Usage

#### Using Custom Styles

```javascript
<ScrollToTop
  style={{
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "1rem",
    borderRadius: "50%",
    fontSize: "1.25rem",
  }}
/>
```

## Feedback & Contributions

Have suggestions or improvements? Feel free to open an issue or submit a pull request on the [GitHub](https://github.com/malharchauhan7/scroll-totop-button)

## License

[ISC]()

## Build by

##### Malhar Chauhan

[GitHub](https://github.com/malharchauhan7)
