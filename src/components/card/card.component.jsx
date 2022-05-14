import './card.styles.css'

export default function Card({monster: {id, name, email}}) {
  return (
    <div className='card-container' id={id}>
    <img
      src={`https://robohash.org/${id}/?set=set2&size=180x180`}
      alt={`Monster ${name}`}
    />
    <h1>{name}</h1>
    <p>{email}</p>
  </div>
  );
};
