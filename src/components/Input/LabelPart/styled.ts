import styled from 'styled-components';

const StyledLabel = styled.label`
  font-family: 'Open Sans', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.input};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: ${({ theme }) => theme.lineHeights.input};
  text-transform: capitalize;
`;

export default StyledLabel;
