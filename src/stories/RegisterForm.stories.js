import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RegisterForm from '../pages/Register/RegisterForm/';

export default {
  title: "RegisterForm",
  component: RegisterForm,
};

export const Default = () => (
<BrowserRouter>
  <RegisterForm />
</BrowserRouter>
);
