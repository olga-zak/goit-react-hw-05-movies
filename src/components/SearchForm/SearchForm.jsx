import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Button } from './SearchForm.styled';

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
    <Form onSubmit={handleFormSubmit}>
      <Input
        value={searchWord}
        onChange={handleInputChange}
        type="text"
        autoComplete="off"
        placeholder="Search for movies..."
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
