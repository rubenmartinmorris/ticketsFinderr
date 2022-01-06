import './Event.css';
export const Event = ({ item }) => {
  return (
    <>
      <section>
        {/* <a href='href={item.url}'> */}
        <p className='Event--name'>{item.name}</p>
        <img src={item.images[0].url} alt='' />
        <p className='Event--now'>Get Your Tickets Now!</p>
      </section>
    </>
  );
};
