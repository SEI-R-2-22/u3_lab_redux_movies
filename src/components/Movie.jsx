import React, { useEffect } from 'react'
import { LoadMovies } from '../store/actions/MovieActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Movie = (props) => {

    useEffect(() => {
        props.fetchMovies()
    }, [])

    return (
        <div className='movies-container'>
            {
                props.movieState.movies.map((movie) => (
                    <div key={movie.id} className='movie-card'>
                        <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.id} />
                        <h3>{movie.title}</h3>
                        <Link to={`/movies/${movie.id}`}>View Details</Link>
                    </div>
                ))
                
            }
        </div>
    )
}

const mapStateToProps = ({ movieState }) => {
    return { movieState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies : () => dispatch(LoadMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)