import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom"
export const POSTER_PATH = 'https://image.tmdb.org/t/p/original'


const mapStateToProps = ({movieState}, ownProps) => {
    console.log(ownProps)
    return {
        movies: movieState
    }
}

const Movie = (props) => {

    const navigate = useNavigate()

    const {movieId} = useParams()
    const movie = props.movies.find((movie) => movie.id.toString() === movieId)
    if (!movie) {
        return <Navigate to="/" replace={true} />
      }
    return (
        <div className="movie-data">
                <div key={movie.id} className="card">
                <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
                <h3>{movie.title}</h3>
                <h5>Release Date: {movie.release_date}</h5>
                <p>Movie Overview: {movie.overview}</p>
                <button onClick={() => {navigate(`/`)}}>Go Back</button>
                </div>
        </div> 
    )
}
export default connect(mapStateToProps)(Movie)