import React from 'react';
import Input from '../components/Input'

export default {
  title: 'Input',
  component: Input,
};

export const Default=() => (
  <Input
    id="teste"
    label="email"
    value="teste"
    type="text"
  />
);

export const withPlaceholder =() => (
  <Input
    id="teste"
    label="email"
    value=""
    type="text"
    placeholder="teste@google.com"
  />
);

export const Password=() => (
  <Input
    id="teste"
    label="senha"
    value="teste"
    type="password"
  />
);