import { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadMovieDetail } from '../store/actions/MovieAction'
import { useParams } from 'react-router-dom'
import { POSTER_URL } from '../global'

const mapStateToProps = (state) => {
  return {
    detailState: state.detailState
  }
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
  }, [id])

  return (
    <div>
      <div>
        <img
          src={`${POSTER_URL}/${props.detailState.detail.poster_path}`}
          style={{ width: '400px' }}
          alt="poster"
        />
        <h3>{props.detailState.detail.title}</h3>
        <p>{props.detailState.detail.overview}</p>
        <p>Rating: {props.detailState.detail.vote_average}</p>
        <p>Release: {props.detailState.detail.release_date}</p>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
