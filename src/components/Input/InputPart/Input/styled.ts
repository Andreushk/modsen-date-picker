import styled from 'styled-components';

const StyledInput = styled.input`
  flex: 1 1 100%;
  width: 100%;
  height: 100%;
  background: inherit;
  border: none;
  outline: none;
  padding-right: ${({ theme }) => theme.spaces[1]};
  padding-left: ${({ theme }) => theme.spaces[1]};
  font-family: 'Open Sans', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.input};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.input};

  &::placeholder {
    font-family: 'Open Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.input};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: ${({ theme }) => theme.lineHeights.input};
    text-transform: capitalize;
  }
`;

export default StyledInput;
