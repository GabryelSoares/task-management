import React, { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../contexts/auth';
import { Button } from '../../atoms/Button';
import { StyledContainer } from './styled';
import { Logo } from '../../atoms/Logo';

export const Home: FC = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const auth = useAuth();

  const [username, setUsername] = useState('gabryel');

  //@ts-ignore
  let from = location.state?.from?.pathname || "/tarefas";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <StyledContainer>
      <div className="content">
        <div>
          <Logo size={80} />
        </div>
        <h2>Task Management</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Nome de usuário"
            value={username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(event.target.value)
            }}
          />
          <Button type="submit">
            Login
          </Button>
        </form>
      </div>
    </StyledContainer>
  );

}
