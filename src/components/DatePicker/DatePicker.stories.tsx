import type { Meta, StoryObj } from '@storybook/react';

import DatePicker from './DatePicker';

const meta = {
  title: 'UI/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DatePickerComponent: Story = {
  args: {
    isWeeksStartsFromSunday: true,
    inputLabel: 'From',
    toInputLabel: 'To',
    inputPlaceholder: 'Select date',
    toInputPlaceholder: 'Select date',
    inputDefaultDateValue: '17/06/2024',
    toInputDefaultDateValue: '19/06/2024',
    withCalendarOpeningAnimation: false,
    withInterval: true,
    dateRestrictions: [new Date(2024, 5, 15), new Date(2024, 7, 15)],
  },
};
