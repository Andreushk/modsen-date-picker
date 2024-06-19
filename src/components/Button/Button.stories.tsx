import { Meta, StoryObj } from '@storybook/react/*';

import Button from './Button';

type Story = StoryObj<typeof Button>;

const VALUE = 'Cancel';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    children: {
      type: 'string',
    },
  },
};

export const Default: Story = {
  args: {
    children: VALUE,
    onClick: () => {},
  },
};

export default meta;
