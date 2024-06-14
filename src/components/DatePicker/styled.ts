import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  width: ${({ theme }) => theme.widths.calendar};
  margin: 300px auto;
`;

export default StyledContainer;
