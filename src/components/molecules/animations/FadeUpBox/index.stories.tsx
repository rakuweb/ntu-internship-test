// import layer
import { Story, Meta } from '@storybook/react';

import { Presenter, PresenterProps } from './presenter';

// stories
export default {
  component: Presenter,
  title: 'molecules/animations/FadeUpBox',
} as Meta<PresenterProps>;

const Template: Story<PresenterProps> = (args) => (
  <Presenter {...args}>aaaaaaaaa</Presenter>
);

export const Default = Template.bind({});

Default.args = {};
