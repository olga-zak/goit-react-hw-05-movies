import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [searchWord, setSearchWord] = useState('');

  const handleInputChange = event => {
    setSearchWord(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(searchWord);
    setSearchWord('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        value={searchWord}
        onChange={handleInputChange}
        type="text"
        autoComplete="off"
        placeholder="Search for movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
