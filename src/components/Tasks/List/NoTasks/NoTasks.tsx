import Paragraph from '@/components/Paragraph/Paragraph';

import StyledContainer from './styled';

const MESSAGE = 'No tasks yet';

const NoTasks: React.FC = () => (
  <StyledContainer>
    <Paragraph $variant="dark">{MESSAGE}</Paragraph>
  </StyledContainer>
);

export default NoTasks;
