import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  width: ${({ theme }) => theme.widths.calendarDay};
  height: ${({ theme }) => theme.heights.calendarDay};
  border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
  background-color: inherit;
  border: none;
  text-align: left;

  & > svg {
    fill: ${({ theme }) => theme.colors.text.calendarTitle};
    transition: ${({ theme }) => theme.durations.quick} ease;
  }

  &:hover {
    & svg {
      scale: 1.2;
    }
  }

  &:disabled {
    cursor: default;

    & > svg {
      fill: ${({ theme }) => theme.colors.text.calendarItemsDisabled};
    }

    &:hover {
      & svg {
        scale: unset;
      }
    }
  }
`;

export default StyledButton;
