import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${({ theme }) => theme.heights.calendarDay};
  padding: ${({ theme }) => theme.spaces[1]};
  padding-bottom: 0;

  & > button:last-of-type {
    transform: rotate(180deg);
  }
`;

export const StyledTitle = styled.h6`
  font-size: ${({ theme }) => theme.fontSizes.calendarTitle};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.calendarTitle};
  color: ${({ theme }) => theme.colors.text.calendarTitle};
`;
