import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button'

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => (
  <>
    <Button 
      onClick={action('clicked')}
    >
      default
    </Button>
    <Button 
      onClick={action('clicked')}
      color="salmon"
    >
      salmon
    </Button>
    <Button 
      onClick={action('clicked')}
      color="blue"
    >
      blue
    </Button>
  </>
)


export const Disabled = () => 
  <Button 
    onClick={action('clicked')}
    disabled
  >
    LOGIN
  </Button>