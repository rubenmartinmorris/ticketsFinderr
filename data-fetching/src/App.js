import './App.css';
import { Heading } from './components/Heading';
import SearchBar from './components/SearchBar';
import EventList from './components/EventList';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='App'>
      <Heading className='Heading' />
      <SearchBar setSearchTerm={setSearchTerm} />
      {searchTerm ? (
        <div className='searched'>
          <EventList searchTerm={searchTerm} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
