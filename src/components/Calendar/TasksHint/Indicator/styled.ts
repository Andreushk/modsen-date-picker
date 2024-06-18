import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`;

export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.heights.hintIndicator};
`;
export const StyledIndicator = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  animation: ${animation} ${({ theme }) => theme.durations.slow} linear forwards;
`;
