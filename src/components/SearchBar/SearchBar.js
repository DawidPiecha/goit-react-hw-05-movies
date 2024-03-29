import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './SearchBarm.module.css';

const Searchbar = ({ onSubmit }) => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const urlQuery = urlSearchParams.get('query');
  const [query, setQuery] = useState(urlQuery || '');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);
    setUrlSearchParams({ query: query });
    setQuery(''); // Czyszczenie pola wyszukiwania po wysłaniu formularza. Input znów jest pusty.
  };

  return (
    <div className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          id="searchInput"
          name="searchInput"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
