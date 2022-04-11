import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { LoadMovie } from '..src/store/actions/MovieActions'
import { Link } from "react-router-dom";

const mapStateToProps = ({ movieState }) => {
    return { movieState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(LoadMovie())
    }
}


const Movie = (props) => {
    
    useEffect(() => {
        props.fetchMovie()
    }, [])

    return (
            <div className="movieList">
                {props.movieState.movie.map((movie) => (
                    <div key={movie.id} className="moviePage">
                    <h3>{movie.title}</h3> 
                    <Link to={`/movies/${movie.id}`}>View Movie</Link>
                    </div>

                ))
            }
                 
            </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (Movie);