import styled, { css } from 'styled-components';

interface IStyleProps {
  $disabled: boolean;
  $selected: boolean;
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

  ${({ $selected }) =>
    $selected &&
    css`
      border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text.white};
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: default;
      color: ${({ theme }) => theme.colors.text.calendarItemsDisabled};
    `}

  ${({ $disabled, $selected }) =>
    !$disabled &&
    !$selected &&
    css`
      color: ${({ theme }) => theme.colors.text.calendarItems};

      &:hover {
        border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
        background-color: ${({ theme }) => theme.colors.backgrounds.hoveredCalendarItem};
      }
    `}
`;

export default StyledCell;
