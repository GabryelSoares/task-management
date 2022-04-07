import { FC } from 'react'
import { useAuth } from '../../../contexts/auth';

interface Props {

}

export const AuthStatus: FC<Props> = () => {
  const auth = useAuth();

  if(!auth.user) {
    return <p>Você não está logado.</p>;
  }

  return (
    <p>
      Olá {auth.user}!{" "}
    </p>
  );
}
