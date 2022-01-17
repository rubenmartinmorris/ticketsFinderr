import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

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
    <form className='SearchBar--form' onSubmit={handleSubmit}>
      <input
        className='SearchBar--input'
        type='text'
        onChange={handleChange}
        value={search}
      />
      <button className='SearchBar--button'>Find My Tickets!</button>
    </form>
  );
};

export default SearchBar;
