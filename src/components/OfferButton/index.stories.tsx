import type { Meta, StoryObj } from '@storybook/react';

import { Presenter } from './presenter';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Presenter> = {
  component: Presenter,
};

export default meta;
type Story = StoryObj<typeof Presenter>;

export const FirstStory: Story = {
  argTypes: {},
};
