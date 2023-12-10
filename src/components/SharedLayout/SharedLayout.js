import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import icon from 'components/icon.svg';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <svg width="70" height="70">
          <use href={icon + '#icon-movie'}></use>
        </svg>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export { SharedLayout };
