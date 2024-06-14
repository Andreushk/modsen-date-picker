import StyledLabel from './styled';

interface IComponentProps {
  htmlFor: string;
  children: React.ReactNode;
}

const LabelPart: React.FC<IComponentProps> = ({ htmlFor, children }) => (
  <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
);

export default LabelPart;
