// Chip.tsx

import React from 'react';

interface ChipProps {
  label: string;
  onDelete: (label: string) => void;
}

const Chip: React.FC<ChipProps> = ({ label, onDelete }) => {
  return (
    <div className="chip">
      <span>{label}</span>
      <span className="delete" onClick={() => onDelete(label)}>
        x
      </span>
    </div>
  );
};

export default Chip;