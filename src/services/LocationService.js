import Client from './'

export const GetPopMovies = async () => {
  try {
    const res = await Client.get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`);
    // console.log('locationservice, getpopmovies()' , res.data.results);
    return res.data.results;

  } catch (error) {
    throw error;
  }
}

export const GetMovieById = async (movieId) => {
  try {
    const res = await Client.get(`/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`);
    console.log('locationservice > getMovieById(id)' , movieId, res.data);

    return res.data;

  } catch (error) {
    throw error;
  }
}


// OTHER API CALLS MIGHT GO BELOW HERE