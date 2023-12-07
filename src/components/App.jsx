import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { NotFound } from 'pages/NotFound/NotFound';

import { Container, Header, Link } from './App.styled';
import icon from './icon.svg';

const App = () => {
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:moviesId" element={<MovieDetails />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>{' '}
    </Container>
  );
};

export { App };
