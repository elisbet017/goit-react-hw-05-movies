import {  Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, Header, Nav } from './SharedLayout.styled';
import { GlobalStyles } from '../../utils/GlobalStyles'
const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <GlobalStyles />
    </>
  );
};

export default SharedLayout;
