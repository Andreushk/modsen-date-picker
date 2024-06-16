import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.calendarButton};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: ${({ theme }) => theme.lineHeights.calendarButton};
  width: 100%;
  height: ${({ theme }) => theme.heights.calendarDay};
  background-color: inherit;
  border: none;
  border-bottom-right-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export default StyledButton;
