import { Outlet } from 'react-router-dom';

import { Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      {/* <Header>
        <Navigation />
      </Header> */}
      <Main>
        <Outlet />
      </Main>
      <footer>Footer</footer>
    </>
  );
};
export default Layout;
