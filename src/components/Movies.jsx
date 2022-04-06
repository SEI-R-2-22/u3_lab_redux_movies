import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { LoadMovies } from "../store/actions/MovieActions"

const mapStateToProps = ({ moviesState }) => {
    return  { moviesState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(LoadMovies())
    }
}
const Movies = (props) => {

    useEffect(()=> {
        props.fetchMovies()
    }, [])

    return (
        <div className="list-container">
            {
                props.moviesState.movies.map((movie) => (
                    <div key={movie.id} className="movie-profile">
                    <h3>{movie.title}</h3>
                    <Link to={`/movies/${movie.id}`}>View Movie</Link>
                    </div>
                ))
            }
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Movies)