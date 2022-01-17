import { Event } from './Event';
import { useState, useEffect } from 'react';
import Map from './Map';
import './EventList.css';
import { apiKey } from '../SECRETS';
const EventList = ({ searchTerm }) => {
  const [eventListItems, eventListItemsState] = useState([]);

  useEffect(() => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&countryCode=GB&keyword=${searchTerm}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        eventListItemsState(data._embedded.events);
      });
  }, [searchTerm]);
  return (
    <div className='bottom'>
      <Map eventListItems={eventListItems} />
      <ul className='EventList--ul' id='events'>
        {eventListItems.map((item) => {
          return <Event item={item} />;
        })}
      </ul>
    </div>
  );
};

export default EventList;
