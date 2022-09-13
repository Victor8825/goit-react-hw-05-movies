import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledSharedLayout, Link } from './StyledSharedLayout';
import { Loader } from 'components/Utils/Loader';

export const SharedLayout = () => {
  return (
    <>
      <StyledSharedLayout>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </StyledSharedLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
