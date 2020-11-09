import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

import { Student } from '../components/StudentLoan/studentLoan';

export default {
  title: 'Components/StudentLoan',
  component: Student,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Student/>;

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
