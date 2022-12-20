import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { LoaderSuspense } from 'components/LoaderSuspense/LoaderSuspense';
import { Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      {/* <Header>
        <Navigation />
      </Header> */}
      <Main>
        <Suspense fallback={<LoaderSuspense />}>
          <Outlet />
        </Suspense>
      </Main>
      <footer>Footer</footer>
    </>
  );
};
export default Layout;
