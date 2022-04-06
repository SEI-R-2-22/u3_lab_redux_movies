import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { LoadMovies } from "../store/actions/MovieActions";
import React, { useEffect } from "react";

const mapStateToProps = ({movieState}) =>{
    return movieState
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchMovies: () =>{
            dispatch(LoadMovies())
        }
    }
}

const Movies = (props) =>{

    useEffect(()=>{
        props.fetchMovies()
    },[])

    return ( 
        <div>
          {props.movies.map((mov)=>(
              <Link to ={`/movies/${mov.id}`}>{mov.title}</Link>
          ))}

          {console.log(props)}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)