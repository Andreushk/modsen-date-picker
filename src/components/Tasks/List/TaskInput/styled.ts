import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: absolute;
  left: calc(${({ theme }) => theme.spaces[1]} / 2);
  bottom: calc(
    ${({ theme }) => theme.widths.calendarDay} + calc(${({ theme }) => theme.spaces[1]} / 2)
  );
  display: flex;
  width: calc(${({ theme }) => theme.widths.calendar} - ${({ theme }) => theme.spaces[1]} - 2px);
  height: ${({ theme }) => theme.heights.calendarDay};
  background-color: ${({ theme }) => theme.colors.backgrounds.default};
  border: ${({ theme }) => theme.widths.border} solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
  overflow: hidden;
`;

export const StyledInput = styled.input`
  flex: 1 1 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: inherit;
  padding-right: calc(${({ theme }) => theme.spaces[1]});
  padding-left: calc(${({ theme }) => theme.spaces[1]});
`;

export const StyledSaveButton = styled.button`
  cursor: pointer;
  flex: 0 0 calc(${({ theme }) => theme.widths.calendarDay} * 2);
  height: 100%;
  background-color: inherit;
  border: none;
  border-left: ${({ theme }) => theme.widths.border} solid ${({ theme }) => theme.colors.border};
`;
