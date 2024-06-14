import styled from 'styled-components';

const StyledCell = styled.th`
  width: ${({ theme }) => theme.widths.calendarDay};
  height: ${({ theme }) => theme.heights.calendarDay};
  font-size: ${({ theme }) => theme.fontSizes.calendarTitle};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.calendarTitle};
  text-align: center;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.text.calendarItems};
`;

export default StyledCell;
