import css from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={css.MovieList}>
        {movies.map(movie => (
          <li key={movie.id} className={css.MovieListItem}>
            <Link
              to={`${movie.id}`}
              state={{ from: location }}
              className={css.MovieListLink}
            >
              {movie.title} ({movie.release_date.split('-')[0]})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { MoviesList };
