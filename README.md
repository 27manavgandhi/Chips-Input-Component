# Chips Input Component

This is a reusable Chips Input component built with React and TypeScript. 

## Features

- Renders input with chips
- Chips can be added from suggestions
- Chips can be removed 
- Input filters suggestion list 
- Animations and styling

## Usage

```jsx
import ChipsInput from './ChipsInput';

const suggestions = [
  'Manav Gandhi', 
  'Shefali Gandhi',
  'Rajan Gandhi',
  'Renu Gandhi',
  'Ved Prakash Gandhi',
  'Pushpa Gandhi',
  'Anishka Gandhi'
];

function App() {

  return (
    <ChipsInput 
      suggestions={suggestions}
    />
  );

}
```

## Props

- `suggestions` - Array of strings for input suggestions

## Styling

The component is styled using SCSS modules. See `styles.scss` for styling variables and customizations.

## Animations

CSS animations are implemented for entry/exit of chips and suggestions.

## Development

The component was built using:

- React v17
- TypeScript
- SCSS modules
- React transition group for animations

To run locally:

```
npm install
npm start
```

## Improvements

Some potential improvements for the future:

- Allow custom chip templates
- Accessibility enhancements  
- Input debouncing
- Testing
- Support dragging to reorder chips
- API for asynchronous suggestions
- Performance optimizations

## License

MIT