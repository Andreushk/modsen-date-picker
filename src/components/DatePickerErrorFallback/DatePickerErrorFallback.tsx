import Title from '../Title/Title';
import StyledContainer from './styled';

const MESSAGE = 'Unable to display the calendar';

const DatePickerErrorFallback: React.FC = () => (
  <StyledContainer>
    <Title $variant="regular" $color="dark">
      {MESSAGE}
    </Title>
  </StyledContainer>
);

export default DatePickerErrorFallback;
