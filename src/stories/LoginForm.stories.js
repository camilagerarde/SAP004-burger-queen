import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import LoginForm from '../pages/Login/LoginForm';
import { Link } from 'react-router-dom';

export default {
  title: 'LoginForm',
  component: LoginForm,
};

export const Default = () => (
<BrowserRouter>
  <LoginForm>
    <Link to="/register" title="Registre-se">
    Não possui conta? Registre-se
    </Link>
  </LoginForm>
</BrowserRouter>
)
