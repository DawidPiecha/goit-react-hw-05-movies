import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
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
      <Outlet />
    </Container>
  );
};
export { SharedLayout };
