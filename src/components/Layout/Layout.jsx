import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './Layout.styled';
import { LoaderSuspense } from 'components/LoaderSuspense/LoaderSuspense';
import { Main } from './Layout.styled';
import { Footer } from 'components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Suspense fallback={<LoaderSuspense />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>Footer</Footer>
    </>
  );
};
export default Layout;
