import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovieDetails } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieDetailsState }) => {
    return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id))
    }
}

const MovieDetails = (props) => {
    let { id } = useParams()
    useEffect(() => {
        props.fetchMovieDetails(id)
    }, [])

    return (
        <div>
            <h1>{props.movieDetailsState.details.original_title}</h1>
            <img src = {`https://image.tmdb.org/t/p/w300${props.movieDetailsState.details.poster_path}`}></img>
            <h3>Released on: {props.movieDetailsState.details.release_date} </h3>
            <h3> {props.movieDetailsState.details.vote_count} people upvoted this movie! </h3>
            <p>{props.movieDetailsState.details.overview}</p>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)