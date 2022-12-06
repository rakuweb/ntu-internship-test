// import layer
import { Story, Meta } from '@storybook/react';

import { Presenter, PresenterProps } from './presenter';

// stories
export default {
  component: Presenter,
  title: 'atoms/texts/SansSerifText',
} as Meta<PresenterProps>;

const Template: Story<PresenterProps> = (args) => <Presenter {...args} />;

export const Default = Template.bind({});

Default.args = {};
