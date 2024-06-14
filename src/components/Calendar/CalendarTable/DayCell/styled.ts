import styled, { css } from 'styled-components';

interface IStyleProps {
  $disabled: boolean;
}

const StyledCell = styled.td<IStyleProps>`
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

  ${({ $disabled }) =>
    !$disabled &&
    css`
      cursor: pointer;
      color: ${({ theme }) => theme.colors.text.calendarItems};

      &:hover {
        border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
        background-color: ${({ theme }) => theme.colors.backgrounds.hoveredCalendarItem};
      }
    `}
`;

export default StyledCell;
