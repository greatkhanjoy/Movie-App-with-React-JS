
const MovieCard = (props) => {
    return (
      <div className="movie">
        <img
          src={
            props.Poster !== 'N/A'
              ? props.Poster
              : 'https://via.placeholder.com/300x450'
          }
          alt={props.Title}
        />
        <h3>{props.Title}</h3>
        <p>{props.Year}</p>
      </div>
    )
  }

    export default MovieCard