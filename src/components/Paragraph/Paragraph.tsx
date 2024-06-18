import { IStyleProps, StyledParagraph } from './styled';

interface IComponentProps extends IStyleProps {
  children: React.ReactNode;
}

const Paragraph: React.FC<IComponentProps> = ({ children, $variant = 'light' }) => (
  <StyledParagraph $variant={$variant}>{children}</StyledParagraph>
);

export default Paragraph;
