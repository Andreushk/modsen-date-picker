import styled, { css } from 'styled-components';

export type DayCellTypes = 'selected' | 'weekend' | 'starting' | 'inRange' | 'ending' | 'default';

interface IStyleProps {
  $variant: DayCellTypes;
  $disabled: boolean;
  $isWeekend: boolean;
  $isHoliday: boolean;
}

const StyledCell = styled.td<IStyleProps>`
  cursor: pointer;
  width: ${({ theme }) => theme.widths.calendarDay};
  height: ${({ theme }) => theme.heights.calendarDay};
  font-size: ${({ theme }) => theme.fontSizes.calendarDay};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: ${({ theme }) => theme.lineHeights.calendarDay};
  text-align: center;
  vertical-align: middle;

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: default;
      color: ${({ theme }) => theme.colors.text.calendarItemsDisabled};
    `}

  ${({ $disabled, $variant }) =>
    !$disabled &&
    $variant === 'default' &&
    css`
      color: ${({ theme }) => theme.colors.text.calendarItems};

      &:hover {
        border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
        background-color: ${({ theme }) => theme.colors.backgrounds.hoveredCalendarItem};
      }
    `}

  ${({ $variant }) =>
    $variant === 'selected' &&
    css`
      border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text.white};
    `}

  ${({ $variant }) =>
    $variant === 'ending' &&
    css`
      border-top-right-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
      border-bottom-right-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text.white};
    `}

  ${({ $variant }) =>
    $variant === 'starting' &&
    css`
      border-bottom-left-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
      border-top-left-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
      background-color: ${({ theme }) => `${theme.colors.primary}60`};
      color: ${({ theme }) => theme.colors.text.white};
    `}

  ${({ $variant }) =>
    $variant === 'inRange' &&
    css`
      background-color: ${({ theme }) => `${theme.colors.primary}10`};
      color: ${({ theme }) => theme.colors.primary};
    `}

  ${({ $isWeekend, $disabled }) =>
    $isWeekend &&
    !$disabled &&
    css`
      color: ${({ theme }) => theme.colors.text.calendarWeekends};
    `}

  ${({ $isWeekend, $disabled }) =>
    $isWeekend &&
    $disabled &&
    css`
      color: ${({ theme }) => theme.colors.text.calendarWeekends}60;
    `}

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${({ theme }) => theme.colors.text.calendarHolidays};
    `}
`;

export default StyledCell;
