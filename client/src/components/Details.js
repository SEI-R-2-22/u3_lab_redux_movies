import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { POSTER_PATH } from '../globals'
import { useNavigate } from 'react-router-dom'

const mapStateToProps = ({ movieState }) => {
    return { movieState }
}

const Details = (props) => {
    const navigate = useNavigate()
    const {movieId} = useParams()
    const movie = props.movieState.movies.results.find((movie) => movie.id.toString() === movieId)
    return (
        <div className="movie-data">
            <div className="card">
                <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
                <h3>{movie.title}</h3>
                <h5>Release Date: {movie.release_date}</h5>
                <p>Movie Overview: {movie.overview}</p>
                <div>
                    <button onClick={() => {navigate(`/`)}}>Go Back</button>
                </div>
            </div>
        </div> 
    )
}

export default connect(mapStateToProps)(Details)