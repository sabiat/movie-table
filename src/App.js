import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

function App() {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [query, setQuery] = useState("");
  const fetchData = (query) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((response) => {
        setMovies(response.data.results);
        setQuery(query);
      })
      .catch((error) => console.log(error));
  };

  const fetchTrendingMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_MOVIEDB}`
      )
      .then((response) => setTrendingMovies(response.data.results));
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div className="App">
      <h1>Welcome, find your next movie to watch</h1>
      <h2>Search for a movie:</h2>
      <SearchBar fetchData={fetchData} />
      {query && <h2>Results matching "{query}":</h2>}
      <Results movieData={movies} />
      <h2>Or, browse movies trending this week:</h2>
      <Results movieData={trendingMovies} />
    </div>
  );
}

export default App;
