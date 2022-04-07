import { FC } from 'react'
import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../contexts/auth';
import { Logo } from '../../atoms/Logo';
import { AuthStatus } from '../../molecules/AuthStatus';
import { StyledControls, StyledHeader } from './styled';

interface Props {

}

export const Header: FC<Props> = () => {
  const auth = useAuth();
  let navigate = useNavigate();

  return (
    <StyledHeader>
      <Logo
        size={40}
      />

      <AuthStatus />

      <StyledControls>
        <MdLogout
          className="link"
          size={40}
          onClick={() => {
            auth.signout(() => navigate("/"));
          }}
        />
      </StyledControls>
    </ StyledHeader>
  );

}
