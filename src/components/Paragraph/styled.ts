import styled from 'styled-components';

export interface IStyleProps {
  $variant?: 'light' | 'dark';
}

export const StyledParagraph = styled.p<IStyleProps>`
  font-size: ${({ theme }) => theme.fontSizes.calendarDay};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.calendarDay};
  color: ${({ $variant, theme }) =>
    $variant === 'light' ? theme.colors.text.white : theme.colors.text.calendarItems};
`;
