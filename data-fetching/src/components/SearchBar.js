import React from 'react';
import { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [search, setSearchState] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(search);

    setSearchState('');
  };
  const handleChange = (event) => {
    const { value } = event.target;

    setSearchState(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='' id='' onChange={handleChange} value={search} />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
