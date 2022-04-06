// import React, { useEffect } from 'react'
import { POSTER_PATH } from '../globals'
import { GetMovies } from "../services/MovieService"
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import {useEffect} from 'react'
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
  useEffect(()=> {
    props.fetchMovies()
  },[])
  
  const navigate = useNavigate()

    return (
      <div className="grid">
          {props.movieState.movies.results.map((movie) => (
          <div key={movie.id} className="card">
          <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
          <h3>{movie.title}</h3>
          <button onClick={()=>{navigate(`${movie.id}/details`)}}>View Movie</button>
          </div>
      ))}
      </div>
    )
  }

export default connect(mapStateToProps, mapDispatchToProps)(Movies)