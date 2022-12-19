import { Outlet } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';

import { Header, Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <footer>Footer</footer>
    </>
  );
};
export default Layout;
