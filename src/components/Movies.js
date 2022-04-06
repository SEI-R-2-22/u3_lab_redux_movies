import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'

const mapStateToProps = ({}) => {
    return {}
}

const mapDispatchToProps = ({}) => {
    return {}
}

const Movies = (props) => {

    useEffect(() => {
        props.fetchMovies()
    }, [])

    return (
        <div>
            {props.movieState.movies.map((movie) => (
                <ul key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.name}</Link>
                </ul>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)