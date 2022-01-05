import { Event } from './Event';
import { useState, useEffect } from 'react';

const EventList = ({ searchTerm }) => {
  const [eventListItems, eventListItemsState] = useState([]);
  //7elxdku9GGG5k8j0Xm8KWdANDgecHMV0
  // New Key THSTGgTfdwOhliI9ABAowEtT23fCMh07
  useEffect(() => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=THSTGgTfdwOhliI9ABAowEtT23fCMh07&keyword=${searchTerm}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        eventListItemsState(data._embedded.attractions);
        console.log(data._embedded.attractions[0].images[0].url);
      });
  }, [searchTerm]);
  return (
    <div>
      <ul>
        {eventListItems.map((item) => {
          return <Event item={item} />;
        })}
      </ul>
    </div>
  );
};

export default EventList;
