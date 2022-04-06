import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux"
import { LoadMovieDetails } from "../store/actions/MovieAction"

const mapStateToProps = ({
movieDetailsState}) => {
    return { movieDetailsState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetails: (id) =>
        dispatch(LoadMovieDetails(id))
    }
}

const MovieDetails = (props) => {
    let { id } = useParams()

    useEffect(() => {
        props.fetchMovieDetails(id)
    },[])

    const moviedetails = props.movieDetailsState.movieDetails

    return (
        <div>
            <div>
        <img className="movie-poster-detail" src={`https://image.tmdb.org/t/p/original${moviedetails.backdrop_path}`} alt="poster" />
        </div>
         <h2 className="movie-poster-title" >{ moviedetails.title }</h2>
         <p style={{fontSize:'22px', marginBottom:'50px'}}>{moviedetails.overview}</p>
         <p>Release Date {moviedetails.release_date }</p>
         <p>Runtime {moviedetails.runtime} minutes</p>
         <p>Vote Average: {moviedetails.vote_average}/10</p>
         <p>Vote Count: {moviedetails.vote_count}</p>
         <p>Popularity: {moviedetails.popularity}</p>
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (MovieDetails)