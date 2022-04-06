import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}

const Movies = (props) => {
    
  useEffect(() => {
    props.fetchMovies()
  }, [])

  return (
    <div>
      <h2>Movie List</h2>
      <div className='container-grid'>
      
        {props.movieState.movies.map((movie) => (
          
          <div key={movie.id} className='movie-grid'>
              <Link to={`/movies/${movie.id}`}><img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={'Movie Poster'}/><br/>{movie.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)