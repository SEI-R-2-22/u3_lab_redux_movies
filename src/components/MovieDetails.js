import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovieDetails} from '../store/actions/MovieActions'

const mapStateToProps = ({ movieDetailState }) => {
  return { movieDetailState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id))
  }
}

const MovieDetails = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchMovieDetails(id)
  },[id])

  return (
      <div>
         <h1>MOVIE OVERVIEW</h1>
    <div className="overview">{props.movieDetailState.movieDetails.overview}</div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
