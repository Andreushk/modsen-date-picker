import { PropsWithChildren } from 'react';

import StyledButton from './styled';

const Button: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledButton type="button">{children}</StyledButton>
);

export default Button;
