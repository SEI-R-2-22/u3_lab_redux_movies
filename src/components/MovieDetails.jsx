import React, { useEffect } from 'react'
import { LoadMovieDetails } from '../store/actions/MovieActions'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const mapStatetoProps = ({ movieDetailsState }) => {
    return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetails : (id) => dispatch(LoadMovieDetails(id))
    }
}

const MovieDetails = (props) => {
    let { id } = useParams()
    console.log(props)
    useEffect(() => {
        props.fetchMovieDetails(id)
    }, [id])

    return (
       <div className='movie-detail'>
           <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${props.movieDetailsState.movieDetails.poster_path}`} alt={props.movieDetailsState.movieDetails.title} />
           <h2>{ props.movieDetailsState.movieDetails.title }</h2>
           <h4>{props.movieDetailsState.movieDetails.overview}</h4>
           <p>Release Date: {props.movieDetailsState.movieDetails.release_date }</p>
           <p>Runtime: {props.movieDetailsState.movieDetails.runtime} minutes</p>
           <p>Average Rating: {props.movieDetailsState.movieDetails.vote_average}/10</p>
       </div>
    )


}

export default connect(mapStatetoProps, mapDispatchToProps)(MovieDetails)