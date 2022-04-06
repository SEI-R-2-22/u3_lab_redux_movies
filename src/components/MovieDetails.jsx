import React, { useEffect } from 'react'
import { LoadMovieDetails } from '../store/actions/MovieActions'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const mapStatetoProps = ({ movieDetailsState }) => {
    return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetails : (id) => dispatch(LoadMovieDetails(id))
    }
}

const MovieDetails = (props) => {
    let { id } = useParams()

    useEffect(() => {
        props.fetchMovieDetails(id)
    }, [id])
    return (
        <div></div>
    )
}

export default connect(mapStatetoProps, mapDispatchToProps)(MovieDetails)