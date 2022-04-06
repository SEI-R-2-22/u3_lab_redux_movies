import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovieDetails } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieDetailsState }) => {
  return { movieDetailsState }
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
    console.log(props)
  }, [id])

  return <div>{props.movieDetailsState.details.overview}</div>
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)