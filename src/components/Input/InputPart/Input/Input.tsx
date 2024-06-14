import transformEnteredDate from '@/utils/helpers/transformEnteredDate';

import StyledInput from './styled';

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
      id={id}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};

export default Input;
