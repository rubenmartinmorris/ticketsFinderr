import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
import { GiTicket } from 'react-icons/gi';
import KEY from '../key';

const AnyReactComponent = () => (
  <div>{<GiTicket className='map-ticket' />}</div>
);

export default function Map({ eventListItems }) {
  const defaultProps = {
    center: {
      lat: 53.4819712,
      lng: -2.2579737,
    },
    zoom: 5,
  };

  return (
    // Important! Always set the container height explicitly
    <div className='map-map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {eventListItems.map((item) => {
          return (
            <AnyReactComponent
              lat={item._embedded.venues[0].location.latitude}
              lng={item._embedded.venues[0].location.longitude}
              text={''}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
