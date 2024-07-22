import ITheme from '@/types/theme';

const theme: ITheme = {
  spaces: [
    '0.313rem', // 0
    '0.5rem', // 1
    '0.625rem', // 2
    '1rem', // 3
    '1.875rem', // 4
    '2rem', // 5
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
    taskIndicator: '0.25rem',
    border: '1px',
    calendar: '15.625rem',
    icons: '1rem',
    calendarDay: '2rem',
    tasksControls: '4rem',
  },
  heights: {
    taskIndicator: '0.25rem',
    hintIndicator: '0.25rem',
    inputs: '2.625rem',
    icons: '1rem',
    calendarDay: '2rem',
    tasksList: '18rem',
  },
  fontSizes: {
    input: '0.938rem',
    calendarTitle: '0.875rem',
    calendarDay: '0.813rem',
    calendarButton: '0.75rem',
  },
  lineHeights: {
    input: '1.277rem',
    calendarTitle: '1.192rem',
    calendarDay: '1.106rem',
    calendarButton: '1.021rem',
  },
  fontWeights: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  borderRadiuses: {
    calendarItems: '0.5rem',
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
