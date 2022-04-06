// import React, { useEffect } from 'react'
import { POSTER_PATH } from '../globals'
// import {GetMovies} from "../services/MovieServices

import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}

const Movies = (props) => {
    return (
        <div className="grid">
            {props.movies.map((movie) => (
            <div key={movie.id} className="card">
            <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
            <h3>{movie.title}</h3>
            <button >View Movie</button>
            </div>
        ))}
        </div>
    


    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)