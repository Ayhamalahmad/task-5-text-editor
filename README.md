# Simple Text Editor Example

This is a simple example of a text editor built using JavaScript's `execCommand` for basic text formatting and manipulation.

## Features

- **Text Formatting:** Includes options to make text bold, italic, underline, remove formatting, and more.
- **Heading Styles:** Apply H1, H2, and H3 heading styles to the selected text.
- **Text Alignment:** Align selected text to the left, center, or right.
- **Text Animation:** Demonstrates a simple text animation effect.
- **Copy Text:** Allows copying selected text to the clipboard (Note: Copy command may have limitations).



## Demo

Visit the [live demo](https://ayhamalahmad.github.io/task-5-text-editor/) to see the text editor in action.

## How It Works

The editor uses the `execCommand` method to apply text formatting and other commands to the selected text within the contenteditable element. JavaScript is used to manage button clicks and execute the appropriate `execCommand` based on the user's actions.

Please note that `execCommand` is now considered deprecated and has limitations in modern browsers. It is recommended to explore alternative methods and libraries for rich text editing.


