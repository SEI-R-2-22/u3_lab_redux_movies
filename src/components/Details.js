import { Axios } from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadDetails, LoadReviews } from '../store/actions/MovieActions'

const mapStateToProps = ({ detailsState, reviewState }) => {
  return { detailsState, reviewState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (ID) => dispatch(LoadDetails(ID)),
    fetchReviews: (ID) => dispatch(LoadReviews(ID))
  }
}

const Details = (props) => {
  let { ID } = useParams()

  useEffect(() => {
    props.fetchDetails(ID)
    props.fetchReviews(ID)
  }, [ID])

  return (
    <div>
        <h2> Movie Details</h2>
        <div className='details'>
            <div className='details-image'>
                <img
                src={`https://image.tmdb.org/t/p/w300${props.detailsState.details.poster_path}`}
                alt={'Movie Poster'} />
            </div>
            <div className='details-info'>
                <h3>{props.detailsState.details.title}</h3>
                <p>{props.detailsState.details.overview}</p>
                <h3>Reviews</h3>
                <div className='reviews'>
                  {props.reviewState.reviews.map(review => (
                    <div key={review.id}>
                    <h5>{review.author}</h5> 
                    <div className='detail-review'> 
                      <p>{review.content}<br/></p>
                    </div>
                    </div>
                  ))}
                </div>
            </div>
            <div className='whitespace'></div>
        </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)