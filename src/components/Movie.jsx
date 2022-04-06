import React, { useEffect } from 'react'
import { LoadMovies } from '../store/actions/MovieActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStatetoProps = ({ movieState }) => {
    return { movieState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies : () => dispatch(LoadMovies())
    }
}

const Movie = (props) => {

    useEffect(() => {
        props.fetchMovies()
    }, [])

    return (
        <div></div>
    )
}

export default connect(mapStatetoProps, mapDispatchToProps)(Movie)