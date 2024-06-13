import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';

import StyledContainer from './styled';

const DatePicker: React.FC = () => (
  <ThemeProvider>
    <StyledContainer>Calendar here</StyledContainer>
  </ThemeProvider>
);

export default DatePicker;
