import { fireEvent, render } from '@testing-library/react';

import { FROM_DATE_PICKER_TYPE, TO_DATE_PICKER_TYPE } from '@/constants/datePickerTypes';
import { LOCAL_STORAGE_KEY } from '@/constants/localStorage';
import MONTHS from '@/constants/months';
import theme from '@/styles/theme';
import { formatDateToString, withTheme } from '@/utils/helpers';

import { DATE_PICKER_CALENDAR_ID } from '../Calendar/Calendar';
import { CALENDAR_TABLE_TEST_ID } from '../Calendar/CalendarTable/CalendarTable';
import { SELECTED_DAY_TEST_ID } from '../Calendar/CalendarTable/DayCell/DayCell';
import { TASKS_HINT_TEST_ID } from '../Calendar/TasksHint/TasksHint';
import { DATE_SWITCHING_BUTTON_TEST_ID } from '../Calendar/TitleWithControls/DateSwitchingButton/DateSwitchingButton';
import { CALENDAR_TITLE_TEST_ID } from '../Calendar/TitleWithControls/TitleWithControls';
import { CALENDAR_ICON_TEST_ID } from '../Input/InputPart/CalendarIcon/CalendarIcon';
import { INPUT_DATA_TEST_ID } from '../Input/InputPart/Input/Input';
import { ADD_TASK_BUTTON_TEST_ID } from '../Tasks/List/AddButton/AddButton';
import { TASKS_LIST_TEST_ID } from '../Tasks/List/List';
import {
  PRIORITY_TASK_BUTTON_TEST_ID,
  REMOVE_TASK_BUTTON_TEST_ID,
} from '../Tasks/List/Task/Controls/Controls';
import {
  SAVE_NEW_TASK_BUTTON_TEST_ID,
  TASK_INPUT_TEST_ID,
} from '../Tasks/List/TaskInput/TaskInput';
import { CLOSE_BUTTON_VALUE, TASKS_WINDOW_TEST_ID } from '../Tasks/Tasks';
import DatePicker from './DatePicker';
import { DATE_PICKER_ITEM_TEST_ID } from './DatePickerItem/DatePickerItem';

const FROM_INPUT_LABEL = 'From';
const TO_INPUT_LABEL = 'To';
const INPUTS_PLACEHOLDER = 'Select Date';

const TASK_INPUT_TEST_VALUE = 'Write some Jest tests.';

const defaultTestYear = 2025;
const defaultFromTestMonth = 10;
const defaultFromDay = 10;
const defaultFromDate: Date = new Date(defaultTestYear, defaultFromTestMonth, defaultFromDay);
const defaultToDate: Date = new Date(defaultTestYear, 11, 10);

const DATE_PICKER_TEST_ID_FROM = DATE_PICKER_ITEM_TEST_ID + FROM_DATE_PICKER_TYPE;
const DATE_PICKER_TEST_ID_TO = DATE_PICKER_ITEM_TEST_ID + TO_DATE_PICKER_TYPE;

describe('DatePicker with different displaying options', () => {
  it('Renders with default configuration', () => {
    const { getByTestId } = render(withTheme(<DatePicker />));

    expect(getByTestId(DATE_PICKER_TEST_ID_FROM)).toBeInTheDocument();
  });

  it('Renders without configurations, but with from input label', () => {
    const { getByTestId, getByText } = render(
      withTheme(<DatePicker inputLabel={FROM_INPUT_LABEL} />),
    );

    expect(getByTestId(DATE_PICKER_TEST_ID_FROM)).toBeInTheDocument();
    expect(getByText(FROM_INPUT_LABEL)).toBeInTheDocument();
  });

  it('Renders without configurations, but with configured input', () => {
    const { getByTestId, getByText, getByPlaceholderText } = render(
      withTheme(<DatePicker inputLabel={FROM_INPUT_LABEL} inputPlaceholder={INPUTS_PLACEHOLDER} />),
    );

    expect(getByTestId(DATE_PICKER_TEST_ID_FROM)).toBeInTheDocument();
    expect(getByText(FROM_INPUT_LABEL)).toBeInTheDocument();
    expect(getByPlaceholderText(INPUTS_PLACEHOLDER)).toBeInTheDocument();
  });

  it('Renders with fully configured input and default date', () => {
    const { getByTestId, getByText, getByPlaceholderText, getByDisplayValue } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          inputDefaultDateValue={formatDateToString(defaultFromDate)}
        />,
      ),
    );

    expect(getByTestId(DATE_PICKER_TEST_ID_FROM)).toBeInTheDocument();
    expect(getByText(FROM_INPUT_LABEL)).toBeInTheDocument();
    expect(getByPlaceholderText(INPUTS_PLACEHOLDER)).toBeInTheDocument();
    expect(getByDisplayValue(formatDateToString(defaultFromDate))).toBeInTheDocument();
  });

  it('Renders two inputs for an interval', () => {
    const { getByTestId } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          inputDefaultDateValue={formatDateToString(defaultFromDate)}
          withInterval
        />,
      ),
    );

    expect(getByTestId(DATE_PICKER_TEST_ID_FROM)).toBeInTheDocument();
    expect(getByTestId(DATE_PICKER_TEST_ID_TO)).toBeInTheDocument();
  });

  it('Renders fully configured inputs', () => {
    const { getByTestId, getByDisplayValue } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          toInputLabel={TO_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          toInputPlaceholder={INPUTS_PLACEHOLDER}
          inputDefaultDateValue={formatDateToString(defaultFromDate)}
          toInputDefaultDateValue={formatDateToString(defaultToDate)}
          withInterval
        />,
      ),
    );

    expect(getByTestId(DATE_PICKER_TEST_ID_FROM)).toBeInTheDocument();
    expect(getByTestId(DATE_PICKER_TEST_ID_TO)).toBeInTheDocument();
    expect(getByDisplayValue(formatDateToString(defaultFromDate))).toBeInTheDocument();
    expect(getByDisplayValue(formatDateToString(defaultToDate))).toBeInTheDocument();
  });

  it('Renders the weeks calendar', () => {
    const { getByTestId } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          isWeeksCalendar
          isWithWeekends
        />,
      ),
    );

    const calendarIcon = getByTestId(CALENDAR_ICON_TEST_ID);
    expect(calendarIcon).toBeInTheDocument();

    fireEvent.click(calendarIcon);

    const calendarTable = getByTestId(CALENDAR_TABLE_TEST_ID);
    expect(calendarTable).toBeInTheDocument();

    const calendarTableDaysTds = calendarTable.querySelectorAll('td');
    const calendarDaysLength: number = calendarTableDaysTds.length;
    expect(calendarDaysLength).toBe(7);
  });

  it('Renders the calendar from a Sunday', () => {
    const { getByTestId } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          isWeeksStartsFromSunday
          isWithWeekends
        />,
      ),
    );

    const calendarIcon = getByTestId(CALENDAR_ICON_TEST_ID);
    expect(calendarIcon).toBeInTheDocument();

    fireEvent.click(calendarIcon);

    const calendarTable = getByTestId(CALENDAR_TABLE_TEST_ID);
    expect(calendarTable).toBeInTheDocument();

    const calendarTableDaysTds = calendarTable.querySelectorAll('td');
    expect(calendarTableDaysTds[6]).toHaveStyle(`color: ${theme.colors.text.calendarWeekends}`);
    expect(calendarTableDaysTds[7]).toHaveStyle(`color: ${theme.colors.text.calendarWeekends}`);
  });

  it('Renders the calendar with weekends', () => {
    const { getByTestId } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          isWithWeekends
        />,
      ),
    );

    const calendarIcon = getByTestId(CALENDAR_ICON_TEST_ID);
    expect(calendarIcon).toBeInTheDocument();

    fireEvent.click(calendarIcon);

    const calendarTable = getByTestId(CALENDAR_TABLE_TEST_ID);
    expect(calendarTable).toBeInTheDocument();

    const calendarTableDaysTds = calendarTable.querySelectorAll('td');
    expect(calendarTableDaysTds[5]).toHaveStyle(`color: ${theme.colors.text.calendarWeekends}`);
    expect(calendarTableDaysTds[6]).toHaveStyle(`color: ${theme.colors.text.calendarWeekends}`);
  });
});

describe('DatePicker main functionality', () => {
  it('Date input works correctly', () => {
    const { getByTestId } = render(
      withTheme(<DatePicker inputLabel={FROM_INPUT_LABEL} inputPlaceholder={INPUTS_PLACEHOLDER} />),
    );

    const fromInput = getByTestId(INPUT_DATA_TEST_ID) as HTMLInputElement | null;

    expect(getByTestId(DATE_PICKER_TEST_ID_FROM)).toBeInTheDocument();
    expect(fromInput).toBeInTheDocument();

    fireEvent.change(fromInput!, { target: { value: formatDateToString(defaultFromDate) } });
    expect(fromInput!.value).toBe(formatDateToString(defaultFromDate));
  });

  it('Date selection works correctly', () => {
    const { getByTestId, getAllByTestId } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          inputDefaultDateValue={formatDateToString(defaultFromDate)}
        />,
      ),
    );

    const calendarIcon = getByTestId(CALENDAR_ICON_TEST_ID);
    expect(calendarIcon).toBeInTheDocument();

    fireEvent.click(calendarIcon);

    expect(getByTestId(DATE_PICKER_CALENDAR_ID)).toBeInTheDocument();

    const switchingButtons = getAllByTestId(DATE_SWITCHING_BUTTON_TEST_ID);
    expect(switchingButtons).toHaveLength(2);

    const calendarTitle = getByTestId(CALENDAR_TITLE_TEST_ID);
    expect(calendarTitle).toBeInTheDocument();
    expect(calendarTitle.textContent).toBe(`${MONTHS[defaultFromTestMonth]} ${defaultTestYear}`);

    const calendarTable = getByTestId(CALENDAR_TABLE_TEST_ID);
    expect(calendarTable).toBeInTheDocument();

    const calendarTableDaysTds = calendarTable.querySelectorAll('td');
    expect(calendarTableDaysTds[5]).toBeInTheDocument();

    fireEvent.click(calendarTableDaysTds[5]!);

    const selectedDayTd = getByTestId(SELECTED_DAY_TEST_ID);
    expect(selectedDayTd).toBeInTheDocument();
    expect(selectedDayTd.textContent).toBe(calendarTableDaysTds[5]!.textContent);
  });

  it('Date interval selection works correctly', () => {
    const { getByTestId, getAllByTestId } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          withInterval
        />,
      ),
    );

    const calendarIcon = getAllByTestId(CALENDAR_ICON_TEST_ID)[0];
    expect(calendarIcon).toBeInTheDocument();

    fireEvent.click(calendarIcon!);

    expect(getByTestId(DATE_PICKER_CALENDAR_ID)).toBeInTheDocument();

    const calendarTable = getByTestId(CALENDAR_TABLE_TEST_ID);
    expect(calendarTable).toBeInTheDocument();

    const calendarTableDaysTds = calendarTable.querySelectorAll('td');
    expect(calendarTableDaysTds[5]).toBeInTheDocument();
    expect(calendarTableDaysTds[10]).toBeInTheDocument();

    fireEvent.click(calendarTableDaysTds[5]!);
    fireEvent.click(calendarTableDaysTds[10]!);

    expect(calendarTableDaysTds[5]).toHaveStyle(`background-color: ${theme.colors.primary}60`);
    expect(calendarTableDaysTds[10]).toHaveStyle(`background-color: ${theme.colors.primary}`);

    fireEvent.click(calendarTableDaysTds[11]!);
    fireEvent.click(calendarTableDaysTds[4]!);

    expect(calendarTableDaysTds[5]).not.toHaveStyle(`background-color: ${theme.colors.primary}`);
    expect(calendarTableDaysTds[10]).not.toHaveStyle(`background-color: ${theme.colors.primary}`);
  });

  it('Dates are switching', () => {
    const { getByTestId, getAllByTestId } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          inputDefaultDateValue={formatDateToString(defaultFromDate)}
        />,
      ),
    );

    const calendarIcon = getByTestId(CALENDAR_ICON_TEST_ID);
    expect(calendarIcon).toBeInTheDocument();

    fireEvent.click(calendarIcon);

    const switchingButtons = getAllByTestId(DATE_SWITCHING_BUTTON_TEST_ID);
    expect(switchingButtons).toHaveLength(2);

    const calendarTitle = getByTestId(CALENDAR_TITLE_TEST_ID);
    expect(calendarTitle).toBeInTheDocument();
    expect(calendarTitle.textContent).toBe(`${MONTHS[defaultFromTestMonth]} ${defaultTestYear}`);

    const nextMonthButton = switchingButtons[1];
    const pervMonthButton = switchingButtons[0];

    fireEvent.click(nextMonthButton!);
    expect(calendarTitle.textContent).toBe(
      `${MONTHS[defaultFromTestMonth + 1]} ${defaultTestYear}`,
    );

    fireEvent.click(pervMonthButton!);
    fireEvent.click(pervMonthButton!);
    expect(calendarTitle.textContent).toBe(
      `${MONTHS[defaultFromTestMonth - 1]} ${defaultTestYear}`,
    );
  });
});

describe('DatePicker component with date restrictions', () => {
  it('Date restrictions', () => {
    const { getByTestId, getByText } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          dateRestrictions={[
            new Date(defaultTestYear, defaultFromTestMonth, defaultFromDay - 1),
            defaultToDate,
          ]}
        />,
      ),
    );

    const calendarIcon = getByTestId(CALENDAR_ICON_TEST_ID);
    expect(calendarIcon).toBeInTheDocument();

    fireEvent.click(calendarIcon);

    const restrictedDay = getByText(defaultFromDay - 1);
    expect(restrictedDay).toBeInTheDocument();
    expect(restrictedDay).toHaveStyle(`color: ${theme.colors.text.calendarItemsDisabled}`);
  });
});

describe('DatePicker component with tasks', () => {
  it('Renders correctly', async () => {
    localStorage.clear();

    const { getByTestId, getByText } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          inputDefaultDateValue={formatDateToString(defaultFromDate)}
          isWeeksCalendar
          withTasks
        />,
      ),
    );

    const calendarIcon = getByTestId(CALENDAR_ICON_TEST_ID);
    expect(calendarIcon).toBeInTheDocument();

    fireEvent.click(calendarIcon);

    const tasksHint = getByTestId(TASKS_HINT_TEST_ID);
    expect(tasksHint).toBeInTheDocument();

    fireEvent.click(tasksHint);
    expect(tasksHint).not.toBeInTheDocument();

    const day = getByText(defaultFromDay);
    expect(day).toBeInTheDocument();

    const clickAndHold = async () => {
      day.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

      await new Promise((resolve) => {
        setTimeout(resolve, 300);
      });

      day.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    };
    await clickAndHold();

    expect(getByTestId(TASKS_WINDOW_TEST_ID)).toBeInTheDocument();

    const addTaskButton = getByTestId(ADD_TASK_BUTTON_TEST_ID);
    expect(addTaskButton).toBeInTheDocument();

    fireEvent.click(addTaskButton);

    const addTaskInput = getByTestId(TASK_INPUT_TEST_ID) as HTMLInputElement;
    const saveTaskButton = getByTestId(SAVE_NEW_TASK_BUTTON_TEST_ID);
    expect(addTaskInput).toBeInTheDocument();
    expect(saveTaskButton).toBeInTheDocument();

    const isSaveTaskButtonDisabled = saveTaskButton.hasAttribute('disabled');
    expect(isSaveTaskButtonDisabled).toBe(true);

    fireEvent.change(addTaskInput, { target: { value: TASK_INPUT_TEST_VALUE } });
    expect(addTaskInput.value).toBe(TASK_INPUT_TEST_VALUE);
    expect(localStorage.getItem(LOCAL_STORAGE_KEY)).not.toBe(null);

    fireEvent.click(saveTaskButton);

    const tasksList = getByTestId(TASKS_LIST_TEST_ID);
    expect(tasksList).toBeInTheDocument();

    const tasks = tasksList.children;
    expect(tasks.length).toBe(1);

    const closeTasksButton = getByText(CLOSE_BUTTON_VALUE);
    expect(closeTasksButton).toBeInTheDocument();

    fireEvent.click(closeTasksButton);

    expect(tasksList).not.toBeInTheDocument();

    await clickAndHold();

    expect(getByTestId(TASKS_WINDOW_TEST_ID)).toBeInTheDocument();
    expect(getByTestId(TASKS_LIST_TEST_ID)).toBeInTheDocument();
    expect(getByTestId(TASKS_LIST_TEST_ID).children.length).toBe(1);
  });

  it('Adding more tasks', async () => {
    const { getByTestId, getByText } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          inputDefaultDateValue={formatDateToString(defaultFromDate)}
          isWeeksCalendar
          withTasks
        />,
      ),
    );

    const calendarIcon = getByTestId(CALENDAR_ICON_TEST_ID);
    expect(calendarIcon).toBeInTheDocument();

    fireEvent.click(calendarIcon);

    const day = getByText(defaultFromDay);
    expect(day).toBeInTheDocument();

    const clickAndHold = async () => {
      day.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

      await new Promise((resolve) => {
        setTimeout(resolve, 300);
      });

      day.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    };
    await clickAndHold();

    expect(getByTestId(TASKS_WINDOW_TEST_ID)).toBeInTheDocument();

    const addTaskButton = getByTestId(ADD_TASK_BUTTON_TEST_ID);
    expect(addTaskButton).toBeInTheDocument();

    fireEvent.click(addTaskButton);

    const addTaskInput = getByTestId(TASK_INPUT_TEST_ID) as HTMLInputElement;
    const saveTaskButton = getByTestId(SAVE_NEW_TASK_BUTTON_TEST_ID);
    expect(addTaskInput).toBeInTheDocument();
    expect(saveTaskButton).toBeInTheDocument();

    fireEvent.change(addTaskInput, { target: { value: TASK_INPUT_TEST_VALUE } });
    expect(addTaskInput.value).toBe(TASK_INPUT_TEST_VALUE);

    fireEvent.click(saveTaskButton);

    const tasksList = getByTestId(TASKS_LIST_TEST_ID);
    expect(tasksList).toBeInTheDocument();

    const tasks = tasksList.children;
    expect(tasks.length).toBe(2);
  });

  it('Removing tasks', async () => {
    const { getByTestId, getByText, getAllByTestId } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          inputDefaultDateValue={formatDateToString(defaultFromDate)}
          isWeeksCalendar
          withTasks
        />,
      ),
    );

    const calendarIcon = getByTestId(CALENDAR_ICON_TEST_ID);
    expect(calendarIcon).toBeInTheDocument();

    fireEvent.click(calendarIcon);

    const day = getByText(defaultFromDay);
    expect(day).toBeInTheDocument();

    const clickAndHold = async () => {
      day.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

      await new Promise((resolve) => {
        setTimeout(resolve, 300);
      });

      day.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    };
    await clickAndHold();

    expect(getByTestId(TASKS_WINDOW_TEST_ID)).toBeInTheDocument();

    const tasksList = getByTestId(TASKS_LIST_TEST_ID);
    expect(tasksList).toBeInTheDocument();

    const tasks = tasksList.children;
    expect(tasks.length).toBe(2);

    const removeTaskButtons = getAllByTestId(REMOVE_TASK_BUTTON_TEST_ID);
    expect(removeTaskButtons.length).toBe(2);

    const firstTaskRemoveButton = removeTaskButtons[0];
    fireEvent.click(firstTaskRemoveButton!);

    expect(tasks.length).toBe(1);
  });

  it('Marking tasks as important', async () => {
    const { getByTestId, getByText, getAllByTestId } = render(
      withTheme(
        <DatePicker
          inputLabel={FROM_INPUT_LABEL}
          inputPlaceholder={INPUTS_PLACEHOLDER}
          inputDefaultDateValue={formatDateToString(defaultFromDate)}
          isWeeksCalendar
          withTasks
        />,
      ),
    );

    const calendarIcon = getByTestId(CALENDAR_ICON_TEST_ID);
    expect(calendarIcon).toBeInTheDocument();

    fireEvent.click(calendarIcon);

    const day = getByText(defaultFromDay);
    expect(day).toBeInTheDocument();

    const clickAndHold = async () => {
      day.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

      await new Promise((resolve) => {
        setTimeout(resolve, 300);
      });

      day.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    };
    await clickAndHold();

    expect(getByTestId(TASKS_WINDOW_TEST_ID)).toBeInTheDocument();

    const tasksList = getByTestId(TASKS_LIST_TEST_ID);
    expect(tasksList).toBeInTheDocument();
    expect(tasksList.children.length).toBe(1);

    const addTaskButton = getByTestId(ADD_TASK_BUTTON_TEST_ID);
    expect(addTaskButton).toBeInTheDocument();

    fireEvent.click(addTaskButton);

    const addTaskInput = getByTestId(TASK_INPUT_TEST_ID) as HTMLInputElement;
    const saveTaskButton = getByTestId(SAVE_NEW_TASK_BUTTON_TEST_ID);
    expect(addTaskInput).toBeInTheDocument();
    expect(saveTaskButton).toBeInTheDocument();

    fireEvent.change(addTaskInput, { target: { value: `${TASK_INPUT_TEST_VALUE}2` } });
    expect(addTaskInput.value).toBe(`${TASK_INPUT_TEST_VALUE}2`);

    fireEvent.click(saveTaskButton);

    const updatedTasksList = getByTestId(TASKS_LIST_TEST_ID);
    expect(updatedTasksList).toBeInTheDocument();
    expect(updatedTasksList.children.length).toBe(2);

    const prioritizeButtons = getAllByTestId(PRIORITY_TASK_BUTTON_TEST_ID);
    expect(prioritizeButtons.length).toBe(2);

    const lastTaskPrioritizeButton = prioritizeButtons[0];
    fireEvent.click(lastTaskPrioritizeButton!);

    const firstTask = updatedTasksList.children[0];
    expect(firstTask!.textContent).toBe(`${TASK_INPUT_TEST_VALUE}2`);
  });
});
