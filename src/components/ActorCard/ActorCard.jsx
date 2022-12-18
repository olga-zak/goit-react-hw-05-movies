export const ActorCard = ({ name, role, photo_path }) => {
  return (
    <>
      <p>this is actor card</p>
      <p>{name}</p>
      <p>{role}</p>

      <img src={`https://image.tmdb.org/t/p/w500${photo_path}`} alt={name} />
    </>
  );
};
