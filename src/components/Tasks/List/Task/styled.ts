import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces[1]};
`;

export const StyledTextContainer = styled.div`
  flex: 1 1 100%;
`;
