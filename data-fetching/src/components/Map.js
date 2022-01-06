import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
import { GiTicket } from 'react-icons/gi';

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
        bootstrapURLKeys={{ key: 'AIzaSyBsrxHP6g8cX2w1SoNZ9RsuMX8xeqv9bpQ' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {eventListItems.map((item) => {
          //console.log('------>', item._embedded.venues[0].location.latitude);
          //console.log('------>', item._embedded.venues[0].location.longitude);

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
