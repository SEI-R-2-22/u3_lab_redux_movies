import React, { useEffect, useState } from 'react'
import { SearchResult } from '../store/actions/SearchAction'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
  return { searchState: state.searchState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch: (query) => dispatch(SearchResult(query))
  }
}

const Search = (props) => {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    console.log(e.target.value)
    let temp = e.target.value
    setQuery(temp)
  }

  useEffect(() => {
    props.fetchSearch(query)
  }, [query])

  return (
    <div>
      <div className="searchBar">
        <input
          onChange={handleSearch}
          type="text"
          name="search"
          id="search"
          placeholder="enter a movie title"
        />
        <button type="submit">Search</button>
      </div>
      <div className="searchContent">
        {props.searchState.search ? (
          props.searchState.search.results.map((movie) => (
            <Link to={`/viewdetail/${movie.id}`} key={movie.id}>
              <MovieCard {...movie} />
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
