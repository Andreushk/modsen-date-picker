import React from 'react';

import MONTHS from '@/constants/months';
import { extractDateParts, getWeekStartDate } from '@/utils/helpers';

import DateSwitchingButton from './DateSwitchingButton/DateSwitchingButton';
import { StyledContainer, StyledTitle } from './styled';

export const CALENDAR_TITLE_TEST_ID = 'date-picker-calendar-title';

interface IComponentProps {
  calendarDate: Date;
  restrictions: [Date, Date] | undefined;
  isWeeksCalendar: boolean;
  onDateSwitch: (newDate: Date) => void;
}

const TitleWithControls: React.FC<IComponentProps> = ({
  calendarDate,
  restrictions,
  isWeeksCalendar,
  onDateSwitch,
}) => {
  const { year, month, day } = extractDateParts(calendarDate);

  const handleNextButtonClick = (): void => {
    if (isWeeksCalendar) {
      onDateSwitch(new Date(year, month, day + 7));
    } else {
      onDateSwitch(new Date(year, month + 1));
    }
  };

  const handlePrevButtonClick = (): void => {
    if (isWeeksCalendar) {
      onDateSwitch(new Date(year, month, day - 7));
    } else {
      onDateSwitch(new Date(year, month - 1));
    }
  };

  const isButtonsDisabled = (): [boolean, boolean] => {
    if (!restrictions) return [false, false];

    const [fromRestriction, toRestriction] = restrictions;
    const { year: fromYear, month: fromMonth } = extractDateParts(fromRestriction);
    const { year: toYear, month: toMonth } = extractDateParts(toRestriction);

    let isPrevButtonDisabled: boolean = false;
    let isNextButtonDisabled: boolean = false;

    if (!isWeeksCalendar) {
      isPrevButtonDisabled = year < fromYear || (year === fromYear && month <= fromMonth);
      isNextButtonDisabled = year > toYear || (year === toYear && month >= toMonth);
    } else {
      const startOfWeek: Date = getWeekStartDate(calendarDate);
      const endOfWeek: Date = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      isPrevButtonDisabled = startOfWeek < fromRestriction;
      isNextButtonDisabled = endOfWeek > toRestriction;
    }

    return [isPrevButtonDisabled, isNextButtonDisabled];
  };

  const [isPrevButtonDisabled, isNextButtonDisabled] = isButtonsDisabled();

  return (
    <StyledContainer>
      <DateSwitchingButton disabled={isPrevButtonDisabled} onClick={handlePrevButtonClick} />
      <StyledTitle data-testid={CALENDAR_TITLE_TEST_ID}>{`${MONTHS[month]} ${year}`}</StyledTitle>
      <DateSwitchingButton disabled={isNextButtonDisabled} onClick={handleNextButtonClick} />
    </StyledContainer>
  );
};

export default React.memo(TitleWithControls);
