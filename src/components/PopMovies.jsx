import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadPopMovies } from '../store/actions/MovieActions'

const mapStateToProps = ({ moviesState }) => {
  return {moviesState}
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadPopMovies())
  }
}

const PopMovies = (props) => {

  useEffect(() => {
    props.fetchMovies()
  }, [])

  return (
    <div>
      <h2>Thems the POPULAR MOVIES</h2>
      {/* {console.log("PopMovies component", props.moviesState.movies)} */}
      {props.moviesState.movies.map((film) => (
        <div key={film.id}>
          <Link to={`movie/${film.id}`}>{film.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PopMovies)