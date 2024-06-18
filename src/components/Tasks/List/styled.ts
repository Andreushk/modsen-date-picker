import styled from 'styled-components';

export const StyledScrollableContainer = styled.div`
  overflow-y: auto;
  height: calc(
    100% - ${({ theme }) => theme.heights.calendarDay} - ${({ theme }) => theme.heights.calendarDay}
  );
`;

export const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.spaces[1]};
  padding-bottom: ${({ theme }) => theme.spaces[5]};

  & > div {
    padding-top: calc(${({ theme }) => theme.spaces[1]} / 2);
    padding-bottom: calc(${({ theme }) => theme.spaces[1]} / 2);
    margin-bottom: calc(${({ theme }) => theme.spaces[1]} / 2);
  }

  & > div:first-of-type {
    padding-top: 0;
  }

  & > div:last-of-type {
    margin-bottom: 0;
  }
`;
