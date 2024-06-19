import { Meta, StoryObj } from '@storybook/react/*';

import Paragraph from './Paragraph';

type Story = StoryObj<typeof Paragraph>;

const VALUE = 'Example text value for the Paragraph component!';

const meta: Meta<typeof Paragraph> = {
  title: 'UI/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default: Story = {
  args: {
    children: VALUE,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Dark: Story = {
  args: {
    children: VALUE,
    $variant: 'dark',
  },
};

export const Light: Story = {
  args: {
    children: VALUE,
    $variant: 'light',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export default meta;
