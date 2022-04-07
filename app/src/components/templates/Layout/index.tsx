import { FC } from 'react'
import { Outlet } from 'react-router-dom';
import { Header } from '../../organisms/Header';
import { StyledContent } from './styled';

interface Props {

}

export const Layout: FC<Props> = () => {


  return (
    <>
      <Header />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </>
  );

}
