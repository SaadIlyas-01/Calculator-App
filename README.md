# Calculator

A simple browser-based calculator built with vanilla HTML, CSS, and JavaScript — no frameworks or dependencies.

## Features

- Number pad (0–9) and decimal point button
- Basic arithmetic operations: addition (+), subtraction (−), multiplication (*), and division (/)
- Live display that builds up the expression as you tap buttons
- "=" button evaluates the full expression and displays the result
- "Clear" button to reset the calculation
- iPhone-style circular button layout with a dark calculator body

## Project Structure

```
├── calculator.html
├── calculator.css
└── calculator.js
```

## Technologies Used

- **HTML5** — page structure and button layout
- **CSS3** — styling (dark rounded calculator panel, gray number keys, orange operator keys)
- **JavaScript (vanilla)** — expression building and evaluation (uses `eval()` to compute the result)

## How to Use

1. Open `calculator.html` in your browser.
2. Tap number and operator buttons to build an expression (e.g. `1 + 2`).
3. Tap "=" to evaluate the expression and show the result.
4. Tap "Clear" at any time to reset the display.

## Getting Started

This is a static site with no build step or dependencies. Simply open `calculator.html` directly in any modern web browser to use it.

## Note

The calculator uses JavaScript's `eval()` function to compute results from the built-up expression string. This is fine for a simple personal/learning project, but `eval()` is generally best avoided in production applications in favor of a proper expression parser.
