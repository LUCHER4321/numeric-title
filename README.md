# NumericTitle Component

A simple React component that renders headings (`h1` to `h6`) based on a numeric input, with a fallback to a paragraph tag.

## Installation

You can install numeric-title via npm:

```bash
npm install numeric-title
```

or using yarn:

```bash
yarn add numeric-title
```

## Usage

```typescript
import { NumericTitle } from 'numeric-title';

function MyComponent() {
  return (
    <>
      <NumericTitle n={1}>This will be an h1</NumericTitle>
      <NumericTitle n={3}>This will be an h3</NumericTitle>
      <NumericTitle>This will be a paragraph (default)</NumericTitle>
    </>
  );
}
```

## Props

- `n` (number, optional): Determines heading level (1-6)
  - `1` renders `<h1>`
  - `2` renders `<h2>`
  - `3` renders `<h3>`
  - `4` renders `<h4>`
  - `5` renders `<h5>`
  - `6` renders `<h6>`
  - Any other value or undefined renders `<p>`
- `children` (any, optional): Content to be rendered inside the heading element

## Behavior

The component will render:

- The appropriate heading tag (`h1` through `h6`) when `n` is between 1-6
- A paragraph tag (`p`) in all other cases (when `n` is undefined or not 1-6)
