import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadDetails } from '../store/actions/MovieActions'

const mapStateToProps = ({ detailsState }) => {
    return { detailsState }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchDetails: (id) => dispatch(LoadDetails(id))
    }
  }

  const Details = (props) => {
    const { id } = useParams
      
    useEffect(() => {
        props.fetchDetails(id)
    })

  const movieDetails = props.detailsState.Details

    return(
        <div>
          <img className="movie-poster-detail" src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} alt="poster" />
          {movieDetails.release_date}
          {movieDetails.runtime}
          {movieDetails.popularity}
        </div>
    )

  }

  export default connect(mapDispatchToProps, mapStateToProps) (Details)