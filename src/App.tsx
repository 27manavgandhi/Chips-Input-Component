// App.tsx

import React from 'react';
import './components/styles.scss';
import ChipsInput from './components/ChipsInput';

const suggestions = [
  'Manav Gandhi', 
  'Shefali Gandhi',
  'Rajan Gandhi',
  'Renu Gandhi',
  'Ved Prakash Gandhi',
  'Pushpa Gandhi',
  'Anishka Gandhi'
];

const App = () => {
  return (
    <ChipsInput suggestions={suggestions} />
  );
};

export default App;