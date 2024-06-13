import { PropsWithChildren } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <Provider theme={theme}>
    <GlobalStyles />
    {children}
  </Provider>
);

export default ThemeProvider;
