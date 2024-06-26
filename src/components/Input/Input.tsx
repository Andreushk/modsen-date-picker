import React, { useId } from 'react';

import InputPart from './InputPart/InputPart';
import LabelPart from './LabelPart/LabelPart';
import StyledContainer from './styled';

interface IComponentProps {
  label: string | undefined;
  placeholder: string | undefined;
  value: string;
  onChange: (newValue: string) => void;
  onCalendarIconClick: () => void;
}

const Input: React.FC<IComponentProps> = ({
  label,
  value,
  placeholder,
  onChange,
  onCalendarIconClick,
}) => {
  const inputId: string = useId();

  const handleInputClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  return (
    <StyledContainer onClick={handleInputClick}>
      {label && <LabelPart htmlFor={inputId}>{label}</LabelPart>}
      <InputPart
        id={inputId}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onCalendarClick={onCalendarIconClick}
      />
    </StyledContainer>
  );
};

export default React.memo(Input);
