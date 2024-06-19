import { Meta, StoryObj } from '@storybook/react/*';

import Title from './Title';

const VALUE = 'Example Title component value.';

type Story = StoryObj<typeof Title>;

const meta: Meta<typeof Title> = {
  title: 'UI/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export const DefaultRegular: Story = {
  args: {
    children: VALUE,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const LightRegular: Story = {
  args: {
    children: VALUE,
    $color: 'light',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const DarkRegular: Story = {
  args: {
    children: VALUE,
    $color: 'dark',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkMedium: Story = {
  args: {
    children: VALUE,
    $color: 'dark',
    $variant: 'medium',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const LightMedium: Story = {
  args: {
    children: VALUE,
    $color: 'light',
    $variant: 'medium',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export default meta;
