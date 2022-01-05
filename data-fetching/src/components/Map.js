import GoogleMapReact from "google-map-react";

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};
const Map = (props) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDyxKk54V_yJIubn_d2mBpJCu_E99tamyg" }}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    ></GoogleMapReact>
  );
};

export default Map;
