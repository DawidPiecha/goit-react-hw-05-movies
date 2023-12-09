import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'Api/Api';
import { Loader } from 'components/Loader/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const details = await getMovieReviews(movieId);
        setMovieReviews(details);
        console.log(details);
      } catch (error) {
        console.error('Wystąpił błąd podczas pobierania danych filmu:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (!movieReviews || movieReviews.length === 0) {
    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <h1 className={css.ErrorHeading}>
            Sorry, there are no reviews available
          </h1>
        )}
      </div>
    );
  }
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.ReviewsList}>
          {movieReviews.map(review => (
            <li key={review.id} className={css.ListItem}>
              <h2 className={css.ReviewAuthor}>Author: {review.author}</h2>
              <p className={css.ReviewRating}>
                Rating: {review.author_details.rating}/10
              </p>
              <article className={css.Review}>{review.content}</article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export { Reviews };
