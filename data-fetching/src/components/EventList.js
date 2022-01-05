import { Event } from './Event';
import { useState, useEffect } from 'react';
import Map from './Map';

const EventList = ({ searchTerm }) => {
  const [eventListItems, eventListItemsState] = useState([]);
  // New Key THSTGgTfdwOhliI9ABAowEtT23fCMh07
  useEffect(() => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=THSTGgTfdwOhliI9ABAowEtT23fCMh07&countryCode=GB&keyword=${searchTerm}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        eventListItemsState(data._embedded.events);
      });
  }, [searchTerm]);
  return (
    <div>
      <ul>
        <Map eventListItems={eventListItems} />
        {eventListItems.map((item) => {
          return <Event item={item} />;
        })}
      </ul>
    </div>
  );
};

export default EventList;
