import { useCallback } from 'react';

import CalendarIcon from './CalendarIcon/CalendarIcon';
import ClearIcon from './ClearIcon/ClearIcon';
import Input from './Input/Input';
import StyledContainer from './styled';

interface IComponentProps {
  id: string;
  value: string;
  placeholder: string | undefined;
  onChange: (newValue: string) => void;
  onCalendarClick: () => void;
}

const InputPart: React.FC<IComponentProps> = ({
  id,
  value,
  placeholder,
  onChange,
  onCalendarClick,
}) => {
  const handleClearIconClick = useCallback((): void => {
    onChange('');
  }, [onChange]);

  return (
    <StyledContainer>
      <CalendarIcon onClick={onCalendarClick} />
      <Input id={id} value={value} placeholder={placeholder} onChange={onChange} />
      {value.length > 0 && <ClearIcon onClick={handleClearIconClick} />}
    </StyledContainer>
  );
};

export default InputPart;
