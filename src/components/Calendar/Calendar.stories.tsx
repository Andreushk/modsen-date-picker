import { Meta, StoryObj } from '@storybook/react/*';

import { extractDateParts, formatDateToString } from '@/utils/helpers';

import Calendar from './Calendar';

type Story = StoryObj<typeof Calendar>;

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

const today: Date = new Date();
const { year: todayYear, month: todayMonth, day: todayDay } = extractDateParts(today);

export const Default: Story = {
  args: {
    calendarDate: today,
    interval: { fromDate: '', toDate: '' },
  },
};

export const WithSelectedDate: Story = {
  args: {
    calendarDate: today,
    selectedDate: formatDateToString(today),
    interval: { fromDate: formatDateToString(today), toDate: '' },
  },
};

export const WithSelectedInterval: Story = {
  args: {
    calendarDate: today,
    interval: {
      fromDate: formatDateToString(today),
      toDate: formatDateToString(new Date(todayYear, todayMonth, todayDay + 2)),
    },
  },
};

export const WithHighlightedWeekends: Story = {
  args: {
    calendarDate: today,
    interval: {
      fromDate: formatDateToString(today),
      toDate: formatDateToString(new Date(todayYear, todayMonth, todayDay + 2)),
    },
    isWithWeekends: true,
  },
};

export const WithHighlightedHolidays: Story = {
  args: {
    calendarDate: today,
    interval: { fromDate: '', toDate: '' },
    holidays: [today],
  },
};

export const StartsFromSunday: Story = {
  args: {
    calendarDate: today,
    interval: { fromDate: '', toDate: '' },
    isStartsFromSunday: true,
  },
};

export const WeeksCalendar: Story = {
  args: {
    calendarDate: today,
    interval: { fromDate: '', toDate: '' },
    isWithWeekends: true,
    isWeeksCalendar: true,
  },
};

export const WithDatesRestrictions: Story = {
  args: {
    calendarDate: today,
    interval: { fromDate: '', toDate: '' },
    isWithWeekends: true,
    dateRestrictions: [
      new Date(todayYear, todayMonth, todayDay - 1),
      new Date(todayYear, todayMonth, todayDay + 5),
    ],
  },
};

export default meta;
