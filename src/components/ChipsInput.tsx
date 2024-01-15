import React, { useState } from 'react';
import './styles.scss';
import Chip from './Chip';

interface ChipsInputProps {
  suggestions: string[];
}

const ChipsInput: React.FC<ChipsInputProps> = ({ suggestions }) => {

  const [chips, setChips] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const addChip = (label: string) => {
    setChips([...chips, label]);
    setInput('');
  };

  const deleteChip = (label: string) => {
    setChips(chips.filter(c => c !== label));
    setInput('');
  };

  const filteredSuggestions = suggestions.filter(suggestion => {
    return suggestion.toLowerCase().startsWith(input.toLowerCase());
  });

  return (
    <div className="chips-input">
      {chips.map(chip => (
        <Chip
          key={chip}
          label={chip}
          onDelete={deleteChip}
        />
      ))}

      <input
        className="input"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      
      {filteredSuggestions.length > 0 && (
        <div className="suggestions">
          {filteredSuggestions.map(suggestion => (
            <div
              key={suggestion}
              onClick={() => addChip(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChipsInput;