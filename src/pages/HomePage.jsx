import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import Movies from '../components/Movies'
import Search from '../components/Search'
import TMDB from '../services/index'

const HomePage = (props) => {
  return (
    <div>
      <div>
        <Search />
      </div>
      <div>
        <Movies />
      </div>
    </div>
  )
}

export default HomePage
