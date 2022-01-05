import "./App.css";
import { Heading } from "./components/Heading";
import SearchBar from "./components/SearchBar";
import EventList from "./components/EventList";
import { useState } from "react";
import Map from "./components/Map";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <Heading />
      <SearchBar setSearchTerm={setSearchTerm} />
      <Map center={[59.938043, 30.337157]} zoom={9} />
      <EventList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
