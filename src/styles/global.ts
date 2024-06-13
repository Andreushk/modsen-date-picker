import { createGlobalStyle } from 'styled-components';

import OpenSansBold from '@/assets/fonts/OpenSans-Bold.ttf';
import OpenSansRegular from '@/assets/fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from '@/assets/fonts/OpenSans-SemiBold.ttf';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Open Sans';
  font-display: swap;
  font-style: normal;
  font-weight: 400;
  src: url(${OpenSansRegular}) format('truetype');
}

@font-face {
  font-family: 'Open Sans';
  font-display: swap;
  font-style: normal;
  font-weight: 600;
  src: url(${OpenSansSemiBold}) format('truetype');
}

@font-face {
  font-family: 'Open Sans';
  font-display: swap;
  font-style: normal;
  font-weight: 700;
  src: url(${OpenSansBold}) format('truetype');
}

* {  
  box-sizing: border-box;
  outline:0;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", "Verdana", "Geneva", "Tahoma", sans-serif;
  background-color: #fff;
  color: #000;
}
`;

export default GlobalStyles;
