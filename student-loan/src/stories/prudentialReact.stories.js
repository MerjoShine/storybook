import React from 'react';

import App from '../App';

export default {
  title: 'Prudential-React/Application',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <App />;

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
