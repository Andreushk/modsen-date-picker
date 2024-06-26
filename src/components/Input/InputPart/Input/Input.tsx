import { transformEnteredDate } from '@/utils/helpers';

import StyledInput from './styled';

export const INPUT_DATA_TEST_ID = 'date-picker-input';

interface IComponentProps {
  id: string;
  value: string;
  placeholder: string | undefined;
  onChange: (newValue: string) => void;
}

const Input: React.FC<IComponentProps> = ({ id, value, placeholder, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const transformedEnteredDate: string = transformEnteredDate(e.target.value, value);
    onChange(transformedEnteredDate);
  };

  return (
    <StyledInput
      data-testid={INPUT_DATA_TEST_ID}
      id={id}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};

export default Input;
