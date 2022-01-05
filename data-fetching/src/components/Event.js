export const Event = ({ item }) => {
  return (
    <>
      <h4>{item.name}</h4>
      <img src={item.images[0].url} alt="" />
      <p>
        <a href={item.url}>Link to tickets!</a>
      </p>
    </>
  );
};
