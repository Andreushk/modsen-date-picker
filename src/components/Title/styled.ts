import styled, { css } from 'styled-components';

export interface IStyleProps {
  $variant: 'regular' | 'medium';
  $color: 'light' | 'dark';
}

export const StyledTitle = styled.h6<IStyleProps>`
  color: ${({ theme, $color }) =>
    $color === 'dark' ? theme.colors.text.calendarTitle : theme.colors.text.white};

  ${({ $variant }) =>
    $variant === 'regular' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.input};
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
      line-height: ${({ theme }) => theme.lineHeights.input};
    `};

  ${({ $variant }) =>
    $variant === 'medium' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.calendarTitle};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      line-height: ${({ theme }) => theme.lineHeights.calendarTitle};
    `};
`;
