import React, {useState} from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
//perguntar
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (element) => {
    setEmail(element.target.value)
  }

  const changePassword = (element) => {
    setPassword(element.target.value)
  }
  return (
    <>
      <Input 
        onChange={changeEmail}
        label="email"
        id="email"
        type="text"
        value={email}
        placeholder="teste@teste.com"
      />
      <Input
        onChange={changePassword}
        label="senha"
        id="senha"
        type="password"
        value={password}
      />
      <Button>Entrar</Button>
    </>
  )
}

export default LoginForm;