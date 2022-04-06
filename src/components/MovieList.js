import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { LoadMovies } from "../store/actions/MovieAction"
import { connect } from 'react-redux'
export const POSTER_PATH = 'https://image.tmdb.org/t/p/original'

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

const MovieList = (props) => {
    const {fetchMovies} = props
    
    const navigate = useNavigate()

    useEffect(() => {
        fetchMovies()
    }, [fetchMovies])

    return (
        <div className="movie-data">
            {props.movies.map((movie) => (
                <div key={movie.id} className="card">
                    <h3>{movie.title}</h3>
                    <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
                    <div>
                        <button onClick={() => {navigate(`/${movie.id}`)}}>View Movie</button>
                    </div>
                </div>
            ))}
        </div> 
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)