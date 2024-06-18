import ITheme from '@/types/theme';

const theme: ITheme = {
  spaces: [
    '5px', // 0
    '8px', // 1
    '10px', // 2
    '16px', // 3
    '30px', // 4
  ],
  colors: {
    primary: '#2F80ED',
    border: '#DDDDDD',
    input: {
      placeholder: '#BBBBBB',
      icons: '#AAAAAA',
    },
    text: {
      calendarTitle: '#000000',
      calendarItems: '#333333',
      calendarItemsDisabled: '#AAAAAA',
      calendarWeekends: '#FF0000',
      white: '#ffffff',
    },
    backgrounds: {
      hoveredCalendarItem: '#f1f1f1',
      default: '#ffffff',
    },
  },
  widths: {
    calendar: '250px',
    icons: '16px',
    calendarDay: '32px',
  },
  heights: {
    inputs: '42px',
    icons: '16px',
    calendarDay: '32px',
  },
  fontSizes: {
    input: '15px',
    calendarTitle: '14px',
    calendarDay: '13px',
    calendarButton: '12px',
  },
  lineHeights: {
    input: '20.43px',
    calendarTitle: '19.07px',
    calendarDay: '17.7px',
    calendarButton: '16.34px',
  },
  fontWeights: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  borderRadiuses: {
    calendarItems: '8px',
  },
  durations: {
    slow: '300ms',
    normal: '200ms',
    quick: '100ms',
  },
  zIndexes: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  },
};

export default theme;
