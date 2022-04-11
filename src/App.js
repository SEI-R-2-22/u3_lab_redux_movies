import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
// import ShowMovieDetails from "./components/ShowMovieDetails";
import Movies from "./components/ShowMovies";
import MovieDetails from "./components/ShowMovieDetails";
// import { GetMoviesList } from "./services/MovieService";

const App = () => {
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default App;
