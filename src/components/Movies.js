import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadAllMovies } from '../store/actions/MovieActions'



const mapStateToProps = ({ movieState }) => {
    return { movieState }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllMovies: () => dispatch(LoadAllMovies())
    }
}

const AllMovies = (props) => {
    useEffect(() => {
        props.fetchAllMovies()
    }, [])

    return (
        <div>
            {props.movieState.AllMovies.map((movie) => (
                <div>
                    <Link to={`/movies/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                    </Link>
                    {movie.title}
                </div>
            ))}
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies)