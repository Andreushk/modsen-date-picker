import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: calc(${({ theme }) => theme.spaces[1]} / 2);
  bottom: calc(${({ theme }) => theme.heights.calendarDay} + ${({ theme }) => theme.spaces[1]} / 2);
  width: ${({ theme }) => theme.widths.calendarDay};
  height: ${({ theme }) => theme.heights.calendarDay};
  border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
  background-color: ${({ theme }) => theme.colors.backgrounds.default};
  border: ${({ theme }) => theme.widths.border} solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.calendarTitle};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.calendarTitle};
`;

export default StyledButton;
