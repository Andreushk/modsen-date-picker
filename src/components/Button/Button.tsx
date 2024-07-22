import React from 'react';

import StyledButton from './styled';

type ButtonAttributesType = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface IComponentProps extends ButtonAttributesType {
  children: React.ReactNode;
}

const Button: React.FC<IComponentProps> = ({ children, ...props }) => (
  <StyledButton type="button" {...props}>
    {children}
  </StyledButton>
);

export default React.memo(Button);
