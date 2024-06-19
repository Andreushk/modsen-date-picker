import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[4]};
  width: ${({ theme }) => theme.widths.calendar};

  & > div:first-of-type {
    z-index: ${({ theme }) => theme.zIndexes[2]};
  }
`;

export default StyledContainer;
