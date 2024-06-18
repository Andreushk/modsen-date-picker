import ITheme from '@/types/theme';

const theme: ITheme = {
  spaces: [
    '5px', // 0
    '8px', // 1
    '10px', // 2
    '16px', // 3
    '30px', // 4
    '32px', // 5
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
      calendarHolidays: '#FFA500',
      white: '#ffffff',
    },
    backgrounds: {
      hoveredCalendarItem: '#f1f1f1',
      calendarHint: '#2A2A2A90',
      hint: 'rgba(0, 0, 0, 0.8)',
      priorityIcon: '#FFA500',
      default: '#ffffff',
    },
  },
  widths: {
    border: '1px',
    calendar: '250px',
    icons: '16px',
    calendarDay: '32px',
    tasksControls: '64px',
  },
  heights: {
    hintIndicator: '4px',
    inputs: '42px',
    icons: '16px',
    calendarDay: '32px',
    tasksList: '200px',
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
    slow: '7000ms',
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
