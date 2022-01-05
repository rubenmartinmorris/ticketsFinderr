import "./App.css";
import { Heading } from "./components/Heading";
import SearchBar from "./components/SearchBar";
import EventList from "./components/EventList";
import { useState } from "react";
import SimpleMapPage from "./components/Map";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <Heading />
      <SearchBar setSearchTerm={setSearchTerm} />
      <SimpleMapPage />
      <EventList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
