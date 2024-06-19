import type { Meta, StoryObj } from '@storybook/react';

import { extractDateParts, formatDateToString } from '@/utils/helpers';

import DatePicker from './DatePicker';

type Story = StoryObj<typeof meta>;

const today: Date = new Date();
const { year: todayYear, month: todayMonth, day: todayDay } = extractDateParts(today);

const LABEL = 'From';
const PLACEHOLDER = 'Select date';
const TO_LABEL = 'To';

const meta: Meta<typeof DatePicker> = {
  title: 'UI/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export const Default: Story = {
  args: {},
};

export const WithInputLabel: Story = {
  args: {
    inputLabel: LABEL,
  },
};

export const WithInputLabelAndPlaceholder: Story = {
  args: {
    inputLabel: LABEL,
    inputPlaceholder: PLACEHOLDER,
  },
};

export const WithWeekends: Story = {
  args: {
    inputLabel: LABEL,
    inputPlaceholder: PLACEHOLDER,
    isWithWeekends: true,
  },
};

export const WithHolidays: Story = {
  args: {
    inputLabel: LABEL,
    inputPlaceholder: PLACEHOLDER,
    isWithWeekends: true,
    countryCodeForHolidays: 'BY',
  },
};

export const WithDefaultSelectedDate: Story = {
  args: {
    inputLabel: LABEL,
    inputPlaceholder: PLACEHOLDER,
    isWithWeekends: true,
    inputDefaultDateValue: formatDateToString(today),
  },
};

export const StartsFromSunday: Story = {
  args: {
    inputLabel: LABEL,
    inputPlaceholder: PLACEHOLDER,
    isWithWeekends: true,
    isWeeksStartsFromSunday: true,
  },
};

export const WeeksFormat: Story = {
  args: {
    inputLabel: LABEL,
    inputPlaceholder: PLACEHOLDER,
    isWithWeekends: true,
    isWeeksCalendar: true,
  },
};

export const WithDatesRestrictions: Story = {
  args: {
    inputLabel: LABEL,
    inputPlaceholder: PLACEHOLDER,
    isWithWeekends: true,
    dateRestrictions: [
      new Date(todayYear, todayMonth, todayDay - 1),
      new Date(todayYear, todayMonth, todayDay + 5),
    ],
  },
};

export const WithIntervalDefault: Story = {
  args: {
    isWithWeekends: true,
    withInterval: true,
  },
};

export const WithIntervalWithInputsConfiguration: Story = {
  args: {
    inputLabel: LABEL,
    inputPlaceholder: PLACEHOLDER,
    toInputLabel: TO_LABEL,
    toInputPlaceholder: PLACEHOLDER,
    isWithWeekends: true,
    withInterval: true,
  },
};

export const WithIntervalWithInputsConfigurationAndWithOneDefaultDate: Story = {
  args: {
    inputLabel: LABEL,
    inputPlaceholder: PLACEHOLDER,
    toInputLabel: TO_LABEL,
    toInputPlaceholder: PLACEHOLDER,
    isWithWeekends: true,
    withInterval: true,
    inputDefaultDateValue: formatDateToString(today),
  },
};

export const WithIntervalWithInputsConfigurationAndWithDefaultDates: Story = {
  args: {
    inputLabel: LABEL,
    inputPlaceholder: PLACEHOLDER,
    toInputLabel: TO_LABEL,
    toInputPlaceholder: PLACEHOLDER,
    isWithWeekends: true,
    withInterval: true,
    inputDefaultDateValue: formatDateToString(today),
    toInputDefaultDateValue: formatDateToString(new Date(todayYear, todayMonth + 1, todayDay)),
  },
};

export const WithOpeningAnimation: Story = {
  args: {
    inputLabel: LABEL,
    inputPlaceholder: PLACEHOLDER,
    withCalendarOpeningAnimation: true,
  },
};

export default meta;
