import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
// import ShowMovieDetails from "./components/ShowMovieDetails";
import Movies from "./components/ShowMovies";
import MovieDetails from "./components/ShowMovieDetails";
// import { GetMoviesList } from "./services/MovieService";

const App = () => {
  return (
    <div className="App">
      <h1 className="siteName">Trending Movies</h1>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default App;
