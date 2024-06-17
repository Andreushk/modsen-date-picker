import React from 'react';

import MONTHS from '@/constants/months';

import DateSwitchingButton from './DateSwitchingButton/DateSwitchingButton';
import { StyledContainer, StyledTitle } from './styled';

interface IComponentProps {
  month: number;
  year: number;
  dateRestrictions: [Date, Date] | undefined;
  onDateSwitch: (newDate: Date) => void;
}

const TitleWithControls: React.FC<IComponentProps> = ({
  month,
  year,
  dateRestrictions,
  onDateSwitch,
}) => {
  const handleNextButtonClick = (): void => {
    onDateSwitch(new Date(year, month + 1));
  };

  const handlePrevButtonClick = (): void => {
    onDateSwitch(new Date(year, month - 1));
  };

  const isButtonsDisabled = (): [boolean, boolean] => {
    if (!dateRestrictions) return [false, false];

    const [fromRestriction, toRestriction] = dateRestrictions;
    const fromYear: number = fromRestriction.getFullYear();
    const fromMonth: number = fromRestriction.getMonth();
    const toYear: number = toRestriction.getFullYear();
    const toMonth: number = toRestriction.getMonth();

    const isPrevButtonDisabled = year < fromYear || (year === fromYear && month < fromMonth + 1);
    const isNextButtonDisabled = year > toYear || (year === toYear && month > toMonth - 1);
    return [isPrevButtonDisabled, isNextButtonDisabled];
  };

  const [isPrevButtonDisabled, isNextButtonDisabled] = isButtonsDisabled();

  return (
    <StyledContainer>
      <DateSwitchingButton disabled={isPrevButtonDisabled} onClick={handlePrevButtonClick} />
      <StyledTitle>{`${MONTHS[month]} ${year}`}</StyledTitle>
      <DateSwitchingButton disabled={isNextButtonDisabled} onClick={handleNextButtonClick} />
    </StyledContainer>
  );
};

export default React.memo(TitleWithControls);
