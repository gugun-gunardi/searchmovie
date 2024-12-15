const Movie = ({ movie }) => {
  return (
    <div className='card mb-4'>
      <img src={movie.Poster} className='card-img-top' alt={movie.Title} />
      <div className='card-body'>
        <h5 className='card-title'>{movie.Title}</h5>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default Movie;
