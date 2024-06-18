import { IStyleProps, StyledTitle } from './styled';

interface IComponentProps extends IStyleProps {
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

const Title: React.FC<IComponentProps> = ({ as, children, $variant, $color }) => {
  const Component = as || 'h6';

  return (
    <StyledTitle as={Component} $variant={$variant} $color={$color}>
      {children}
    </StyledTitle>
  );
};

export default Title;
