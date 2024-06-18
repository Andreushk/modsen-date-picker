interface IColors {
  primary: string;
  border: string;
  input: {
    placeholder: string;
    icons: string;
  };
  text: {
    calendarTitle: string;
    calendarItems: string;
    calendarItemsDisabled: string;
    calendarWeekends: string;
    calendarHolidays: string;
    white: string;
  };
  backgrounds: {
    hoveredCalendarItem: string;
    calendarHint: string;
    hint: string;
    priorityIcon: string;
    default: string;
  };
}

interface IWidths {
  border: string;
  calendar: string;
  icons: string;
  calendarDay: string;
  tasksControls: string;
}

interface IHeights {
  hintIndicator: string;
  inputs: string;
  icons: string;
  calendarDay: string;
  tasksList: string;
}

interface IFontSizes {
  input: string;
  calendarTitle: string;
  calendarDay: string;
  calendarButton: string;
}

interface ILineHeights {
  input: string;
  calendarTitle: string;
  calendarDay: string;
  calendarButton: string;
}

interface IFontWeights {
  regular: 400;
  semiBold: 600;
  bold: 700;
}

interface IBorderRadiuses {
  calendarItems: string;
}

interface IDurations {
  quick: '100ms';
  normal: '200ms';
  slow: '7000ms';
}

interface IZIndexes {
  1: 1;
  2: 2;
  3: 3;
  4: 4;
}

interface ITheme {
  spaces: string[];
  colors: IColors;
  widths: IWidths;
  heights: IHeights;
  fontSizes: IFontSizes;
  lineHeights: ILineHeights;
  fontWeights: IFontWeights;
  borderRadiuses: IBorderRadiuses;
  zIndexes: IZIndexes;
  durations: IDurations;
}

export default ITheme;
