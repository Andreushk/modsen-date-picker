import React from 'react';

import Controls from './Controls/Controls';
import { StyledContainer, StyledTextContainer } from './styled';

interface IComponentProps {
  id: number;
  value: string;
  isImportant: boolean;
  onPriority: (id: number) => void;
  onDelete: (id: number) => void;
}

const Task: React.FC<IComponentProps> = ({ id, value, isImportant, onPriority, onDelete }) => {
  const handleDeleteButtonClick = (): void => {
    onDelete(id);
  };

  const handleImportantButtonClick = (): void => {
    onPriority(id);
  };

  return (
    <StyledContainer>
      <StyledTextContainer>{value}</StyledTextContainer>
      <Controls
        isImportant={isImportant}
        onImportantButtonClick={handleImportantButtonClick}
        onDeleteButtonClick={handleDeleteButtonClick}
      />
    </StyledContainer>
  );
};

export default React.memo(Task);
