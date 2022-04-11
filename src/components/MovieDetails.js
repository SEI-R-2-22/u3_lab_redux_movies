import React from "react";
import { useEffect } from "react";
import { Connect } from "react-redux";
import { LoadMovieDetails } from '../store/actions/MovieActions'
import { useParams } from "react-router-dom";


const mapStateToProps = ({ MovieDetailsState }) => {
    return { MovieDetailsState }
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
    }, [id])
    return (
            <div>

            </div>
    )
}

export default MovieDetails;