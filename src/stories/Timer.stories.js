import React from 'react';
import Timer from '../components/Timer';

export default {
  title: "Timer",
  component: Timer,
};

export const Default = () => (
  <Timer
    createdAt={new Date().getTime()}
  />
);
