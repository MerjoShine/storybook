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

const Template = (args) => <Student {...args}/>;

export const Default = Template.bind({});
// Default.args = {
//   primary: true,
//   label: 'Button',
// };

export const Empty = Template.bind({});
// Empty.args = {
//   label: 'Button',
// };

export const Normalize = Template.bind({});
// Normalize.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
