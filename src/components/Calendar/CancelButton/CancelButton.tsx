import React from 'react';

import StyledButton from './styled';

interface IComponentProps {
  onClick: () => void;
}

const BUTTON_TEXT = 'Cancel';

const CancelButton: React.FC<IComponentProps> = ({ onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    {BUTTON_TEXT}
  </StyledButton>
);

export default React.memo(CancelButton);
