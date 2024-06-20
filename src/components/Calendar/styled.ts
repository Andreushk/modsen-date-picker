import styled, { css } from 'styled-components';

interface IStyleProps {
  $isVisible: boolean;
  $isWithCancelButton: boolean;
}

const StyledContainer = styled.div<IStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  left: 0;
  ${({ theme }) => css`
    top: calc(${theme.lineHeights.input} + ${theme.spaces[3]} + ${theme.heights.inputs});
  `}

  ${({ $isWithCancelButton }) =>
    !$isWithCancelButton &&
    css`
      padding-bottom: ${({ theme }) => theme.spaces[1]};
    `}

  width: 100%;
  max-width: ${({ theme }) => theme.widths.calendar};
  border: ${({ theme }) => theme.widths.border} solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
  background-color: ${({ theme }) => theme.colors.backgrounds.default};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.durations.quick} ease;
`;

export default StyledContainer;
