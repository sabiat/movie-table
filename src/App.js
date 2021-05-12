import "./App.css";
import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

function App() {
  const [movies, setMovies] = useState([]);
  const fetchData = (query) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((response) => setMovies(response.data.results));
  };
  return (
    <div className="App">
      <h1>Hello world</h1>
      <SearchBar fetchData={fetchData} />
      <Results movieData={movies} />
    </div>
  );
}

export default App;
