# Chips Input Component

This is a reusable Chips Input component built with React and TypeScript. 

## Features

- Renders input with chips
- Chips can be added from suggestions
- Chips can be removed 
- Input filters suggestion list 
- Animations and styling

## Demo
![screencapture-chips-input-component-vercel-app-2024-01-16-01_26_10](https://github.com/27manavgandhi/Chips-Input-Component/assets/77005766/c1b6801b-5d81-4a96-aef5-0b9a1835762d)

![screencapture-chips-input-component-vercel-app-2024-01-16-01_26_50](https://github.com/27manavgandhi/Chips-Input-Component/assets/77005766/bc37a71f-c9c1-4271-a650-eecfdd8e077c)

[screen-capture (36).webm](https://github.com/27manavgandhi/Chips-Input-Component/assets/77005766/29c2885b-dd3d-47fe-a4cb-4d6f7ea32f70)


 
 
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
