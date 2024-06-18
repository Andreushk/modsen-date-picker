import styled from 'styled-components';

const StyledContainer = styled.div`
  position: absolute;
  top: -${({ theme }) => theme.widths.border};
  left: -${({ theme }) => theme.widths.border};
  background-color: ${({ theme }) => theme.colors.backgrounds.default};
  width: ${({ theme }) => theme.widths.calendar};
  height: ${({ theme }) => theme.heights.tasksList};
  border: ${({ theme }) => theme.widths.border} solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
  padding-top: ${({ theme }) => theme.spaces[1]};
`;

export default StyledContainer;
