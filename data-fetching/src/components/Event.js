export const Event = ({ item }) => {
  return (
    <>
      <a href={item.url}>
        <h4>{item.name}</h4>
        <h3>{item._embedded.venues[0].location.latitude}</h3>
        <h3>{item._embedded.venues[0].location.longitude}</h3>
        <img src={item.images[0].url} alt='' />
        <p>Link to tickets!</p>
      </a>
    </>
  );
};
