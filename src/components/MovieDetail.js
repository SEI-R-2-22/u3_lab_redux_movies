import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovieDetail } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieDetailState }) => {
  return { movieDetailState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetail: (id) => dispatch(LoadMovieDetail(id))
  }
}

const MovieDetail = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchMovieDetail(id)
  }, [])

  let image =
    'http://image.tmdb.org/t/p/w500' +
    `${props.movieDetailState.movieDetail.backdrop_path}`
  console.log(image, 'here')

  return (
    <div>
      <img src={image} alt={props.movieDetailState.movieDetail.title}></img>
      <h1>{props.movieDetailState.movieDetail.title}</h1>
      <p>{props.movieDetailState.movieDetail.overview}</p>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
