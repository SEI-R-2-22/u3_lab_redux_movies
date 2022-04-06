import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetMoviesList } from '../services/MovieService'
import { LoadMoviesData } from '../store/actions/MovieAction'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    movieState: state.movieState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMoviesData())
  }
}

const Movies = (props) => {
  useEffect(() => {
    props.fetchMovies()
  }, [])

  return (
    <div>
      <h3>Trending</h3>
      <div className="movieContent">
        {props.movieState.movies.map((movie) => (
          <Link to={`/viewdetail/${movie.id}`} key={movie.id}>
            <MovieCard
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
