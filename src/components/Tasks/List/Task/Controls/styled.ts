import styled, { css } from 'styled-components';

interface IStyleProps {
  $isImportant: boolean;
}

export const StyledContainer = styled.div<IStyleProps>`
  align-self: flex-start;
  flex: 0 0 ${({ theme }) => theme.widths.tasksControls};
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > button:first-of-type:hover {
    & > svg {
      scale: 1.1;

      ${({ $isImportant }) =>
        !$isImportant &&
        css`
          stroke: ${({ theme }) => theme.colors.backgrounds.priorityIcon};
        `};
    }
  }

  & > button:first-of-type {
    & svg {
      ${({ $isImportant }) =>
        $isImportant &&
        css`
          fill: ${({ theme }) => theme.colors.backgrounds.priorityIcon};
        `};
    }
  }

  & > button:last-of-type:hover {
    & > svg {
      scale: 1.1;
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.backgrounds.default};
  border: none;

  & svg {
    fill: ${({ theme }) => theme.colors.backgrounds.default};
    stroke: ${({ theme }) => theme.colors.text.calendarTitle};
    transition: ${({ theme }) => theme.durations.quick} ease;
  }
`;
