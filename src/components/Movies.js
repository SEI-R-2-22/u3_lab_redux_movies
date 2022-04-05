import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieState }) =>{
    return { movieState }
}
const mapDispatchToProps = (dispatch) => {
    return{
    fetchMovies: () => dispatch(LoadMovies())
    }
}

const Movies = (props) => {
    //console.log(props)
    useEffect(() => {
        props.fetchMovies()
    },[])
    
    return(
        <div>
            <ul>
                {props.movieState.movies.map((mov) => (
                <li key={mov.id}>
                    <h3>{mov.title}</h3>
                    {/* <Link to={`/movies/${mov.id}`}>{mov.title}</Link> */}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)