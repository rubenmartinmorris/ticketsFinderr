export const Event = ({ item }) => {
  return (
    <>
      <h4>{item.name}</h4>
      <img src={item.images[0].url} alt='' />
      <p>{item.images[0].url}</p>
    </>
  );
};
