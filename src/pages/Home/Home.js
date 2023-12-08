import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'Api/Api';
import { Loader } from 'components/Loader/Loader';
import css from './Home.module.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(data => {
        setTrendingMovies(data);
      })
      .catch(error => {
        console.error('getTrending error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      <div>
        <h1 className={css.HomeHeading}>Trending today</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className={css.HomeList}>
            {trendingMovies.map(movie => (
              <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                className={css.HomeListLink}
              >
                <li className={css.HomeListItem}>{movie.title}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export { Home };
