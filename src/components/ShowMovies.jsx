import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LoadMovieList } from "../store/actions/MovieAction";
const mapStateToProps = ({ movieState }) => {
  console.log({ movieState });
  return { movieState };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovieList()),
  };
};

const Movies = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchMovies();
  }, []);

  return (
    <div className="list-container">
      {props.movieState.movieList.map((movie) => (
        <div key={movie.id} className="movie-items">
          <h3 className="title">{movie.title}</h3>
          <Link to={`/movies/${movie.id}`}>
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="poster"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
