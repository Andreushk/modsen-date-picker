import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';

const withTheme = (children: React.ReactNode) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default withTheme;
