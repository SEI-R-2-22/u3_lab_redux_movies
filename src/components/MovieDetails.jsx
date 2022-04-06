import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetMovieDetails } from '../store/actions/MovieActions'

const mapStateToProps = ({ moviesState }) => {
  return {moviesState}
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieID: (id) => dispatch(GetMovieDetails(id))
  }
}

const MovieDetails = (props) => {

  let {id} = useParams()
  useEffect(() => {
    props.fetchMovieID(id)
  }, [id])


  const details = props.moviesState.details;

  return (
    <div className='deets-container' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w400${details.poster_path})`}}>
     
      <div className='deets'>

        <h3>{details.title}</h3>


        <div><b>Tagline:</b> {details.tagline}</div>
        <div><b>Release Date:</b> {details.release_date}</div>
        
        <div><p style={{fontStyle:'italic'}}>{details.overview}</p></div>

        <div><b>Genres:</b> {details.genres.map((g, i) => (
          <span key={i}> {g.name}, </span>
        ))}</div>
        <div><b>Popularity:</b> {details.popularity}</div>


      </div>



      {console.log("DEETS", details)}



    </div>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)