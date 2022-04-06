import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovieDetails } from '../store/actions/MovieActions'

const mapStateToProps = ({ detailState }) => {
  return { detailState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (id) => dispatch(LoadMovieDetails(id))
  }
}

const Details = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchDetails(id)
  },[id])
  console.log(props.detailState)
  return (
    <div className='det'>
    <ul>
      {props.detailState.details.value ? (
        props.detailState.details.map((mov) => (
          <li key={mov.id}>{mov.details}</li>
        ))
        ) : (
         <h3>No Movie Details</h3>
       )} 
    </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)