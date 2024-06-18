import React from 'react';

import StyledButton from './styled';

const BUTTON_VALUE = '+';

interface IComponentProps {
  onClick: () => void;
}

const AddButton: React.FC<IComponentProps> = ({ onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    {BUTTON_VALUE}
  </StyledButton>
);

export default React.memo(AddButton);
