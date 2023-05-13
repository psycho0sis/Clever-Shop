import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type TStory = StoryObj<typeof Button>;

export const BlockButton: TStory = {
  args: {
    block: false,
    buttonTheme: 'dark',
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 24,
    text: 'Hello world',
    size: 'l',
  },
};
