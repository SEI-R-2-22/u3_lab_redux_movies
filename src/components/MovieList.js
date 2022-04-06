import { LoadMovies } from "../store/actions/MovieAction"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect } from "react"



const mapStateToProps = ({ movieState }) => {
    return  { movieState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(LoadMovies())
    }
}
const MovieList = (props) => {

    useEffect(()=> {
        props.fetchMovies()
    }, [])

    return (
        <div className="list-container">
            {props.movieState.movies.map((movie) => (
                    <div key={movie.id} className="movie-items">
                        <Link to={`/movies/${movie.id}`}>
                          <img className="movie-poster" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="poster" /></Link>
                          <h3>{movie.title}</h3>

                    </div>
                ))
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)