import { useState } from 'react';

import { Input, ThemeProvider } from '@/components';

import StyledContainer from './styled';

export interface IDatePickerProps {
  inputLabel: string | undefined;
  inputPlaceholder: string | undefined;
}

const DatePicker: React.FC<IDatePickerProps> = ({ inputLabel, inputPlaceholder }) => {
  const [dateInputValue, setDateInputValue] = useState<string>('');

  const handleInputChanges = (newValue: string): void => {
    setDateInputValue(newValue);
  };

  return (
    <ThemeProvider>
      <StyledContainer>
        <Input
          label={inputLabel}
          value={dateInputValue}
          placeholder={inputPlaceholder}
          onChange={handleInputChanges}
        />
      </StyledContainer>
    </ThemeProvider>
  );
};

export default DatePicker;
