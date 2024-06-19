import { Meta, StoryObj } from '@storybook/react/*';

import Tasks from './Tasks';

type Story = StoryObj<typeof Tasks>;

const today: Date = new Date();

const meta: Meta<typeof Tasks> = {
  title: 'UI/Tasks',
  component: Tasks,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export const Default: Story = {
  args: {
    date: today,
  },
};

export default meta;
