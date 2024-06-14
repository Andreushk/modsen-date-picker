import styled, { css } from 'styled-components';

const StyledContainer = styled.div<{ $isVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  left: 0;
  ${({ theme }) => css`
    top: calc(${theme.lineHeights.input} + ${theme.spaces[3]} + ${theme.heights.inputs});
  `}

  width: 100%;
  padding: ${({ theme }) => theme.spaces[1]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.durations.quick} ease;
`;

export default StyledContainer;
