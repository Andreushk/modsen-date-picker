import React from 'react';

import StyledButton from './styled';

interface IComponentProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<IComponentProps> = ({ children, onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    {children}
  </StyledButton>
);

export default React.memo(Button);
