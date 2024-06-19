import { Meta, StoryObj } from '@storybook/react/*';

import Input from './Input';

type Story = StoryObj<typeof Input>;

const VALUE = '05.05.2005';
const LABEL = 'Date';
const PLACEHOLDER = 'Select date';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export const Default: Story = {
  args: {
    value: VALUE,
  },
};

export const WithLabel: Story = {
  args: {
    value: VALUE,
    label: LABEL,
  },
};

export const WithPlaceholder: Story = {
  args: {
    value: '',
    label: LABEL,
    placeholder: PLACEHOLDER,
  },
};

export default meta;
