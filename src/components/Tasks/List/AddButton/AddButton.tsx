import React from 'react';

import StyledButton from './styled';

export const ADD_TASK_BUTTON_TEST_ID = 'date-picker-add-task-button';
const BUTTON_VALUE = '+';

interface IComponentProps {
  onClick: () => void;
}

const AddButton: React.FC<IComponentProps> = ({ onClick }) => (
  <StyledButton type="button" onClick={onClick} data-testid={ADD_TASK_BUTTON_TEST_ID}>
    {BUTTON_VALUE}
  </StyledButton>
);

export default React.memo(AddButton);
