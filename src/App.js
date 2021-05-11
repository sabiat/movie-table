import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar";

function App() {
  const fetchData = (query) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((response) => console.log(response.data.results));
  };
  return (
    <div className="App">
      <h1>Hello world</h1>
      <SearchBar fetchData={fetchData} />
    </div>
  );
}

export default App;
