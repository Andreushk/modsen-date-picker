import React, { useId } from 'react';

import InputPart from './InputPart/InputPart';
import LabelPart from './LabelPart/LabelPart';
import StyledContainer from './styled';

interface IComponentProps {
  label: string | undefined;
  placeholder: string | undefined;
  value: string;
  onChange: (newValue: string) => void;
}

const Input: React.FC<IComponentProps> = ({ label, value, placeholder, onChange }) => {
  const inputId: string = useId();

  return (
    <StyledContainer>
      {label && <LabelPart htmlFor={inputId}>{label}</LabelPart>}
      <InputPart id={inputId} value={value} placeholder={placeholder} onChange={onChange} />
    </StyledContainer>
  );
};

export default React.memo(Input);
