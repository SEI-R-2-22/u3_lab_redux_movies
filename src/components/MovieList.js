import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { LoadMovies } from "../store/actions/MovieAction"
import { connect } from 'react-redux'
export const POSTER_PATH = 'https://image.tmdb.org/t/p/original'


const MovieList = (props) => {

    const navigate = useNavigate()

    useEffect(() => {
        props.fetchMovies()
    }, [])

    return (
        <div className="movie-data">
            {props.movies.map((movie) => (
                <div key={movie.id} className="card">
                <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
                <h3>{movie.title}</h3>
                <button onClick={() => {navigate(`/${movie.id}`)}}>View Movie</button>
                </div>
            ))}
        </div> 
    )
}

const mapStateToProps = ({movieState}) => {
    return {
        movies: movieState
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(LoadMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)