import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {action} from '@storybook/addon-actions'

import { Student } from '../components/StudentLoan/studentLoan';

export default {
  title: 'Components/StudentLoan',
  component: Student,
  argTypes: {
    backgroundColor:{
      name: 'Background Color',
      control: {
        type: 'color'
      }
      },
    label1:{
      name: 'Doughnut label',
      type: { name: 'text', required: false },
      defaultValue: 'Goal progress',
      control: {
        type: 'text'
      }
      },
      label2:{
        name: 'Line label',
        type: { name: 'text', required: false },
        defaultValue: 'Goal trajectory',
        control: {
          type: 'text'
        }
        },
    header:{
      name: 'Header',
      type: { name: 'text', required: false },
      defaultValue: 'Pay off student loan',
      control: {
        type: 'text'
      }
      },
    color:{
      name: 'Chart color',
      control: {
        type: 'color'
      }
      },
    data:{
        name: 'Doughnut Data',
        type: { name: 'number', required: false },
        defaultValue: 10,
        control: {
          type: 'number'
        }
        },
    data1:{
          name: 'Line Data',
          type: { name: 'number', required: false },
          defaultValue: 25,
          control: {
            type: 'select',
            options: [
              0, 
              25, 
              50,
              75
            ]
          }
          }
  },
};

const Template = (args) => <Student onMouseOver={action('Graph hovered')} onClick={action('Clicked')}  {...args}/>;

export const Default = Template.bind({});
Default.args = {
  data:10,
  data1:25,
  header:"Pay off student loan",
  label1:"Goal progress",
  label2:"Goal trajectory"
};

export const Empty = Template.bind({});
Empty.args = {
  data:0,
  data1:0,
  header:"",
  label1:"",
  label2:"",

};

export const Normalize = Template.bind({});
Normalize.args = {
  data:50,
  data1:50,
  header:"Student Loan",
  label1:"Goal progress",
  label2:"Goal trajectory"
};
