import styled from 'styled-components';

const StyledContainer = styled.div`
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.widths.calendar};
  height: ${({ theme }) => theme.heights.inputs};
  border: ${({ theme }) => theme.widths.border} solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
`;

export default StyledContainer;
