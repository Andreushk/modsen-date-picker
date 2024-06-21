import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.heights.inputs};
  border-radius: ${({ theme }) => theme.borderRadiuses.calendarItems};
  border: ${({ theme }) => theme.widths.border} solid ${({ theme }) => theme.colors.border};

  & > button {
    cursor: pointer;
    flex: 0 0 ${({ theme }) => theme.widths.calendarDay};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    border: none;

    &:hover {
      & svg {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  & svg {
    width: ${({ theme }) => theme.widths.icons};
    height: ${({ theme }) => theme.heights.icons};
    fill: ${({ theme }) => theme.colors.input.icons};
  }
`;

export default StyledContainer;
