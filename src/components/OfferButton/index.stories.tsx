import { Presenter } from './presenter';
import type { Meta, StoryObj } from '@storybook/react';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Presenter> = {
  component: Presenter,
};

export default meta;
type Story = StoryObj<typeof Presenter>;

export const FirstStory: Story = {
  argTypes: {},
};
