import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: ${({ theme }) => theme.heights.calendarDay};
  background-color: inherit;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export default StyledButton;
