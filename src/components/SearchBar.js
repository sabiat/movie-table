import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchBar(props) {
  const [input, setInput] = useState("");

  const handleKeyPress = function (event) {
    if (event.key === "Enter") {
      props.fetchData(input);
    }
  };

  return (
    <div className="SearchContainer">
      <input
        className="searchbar"
        type="text"
        placeholder="Ex. 'Batman'"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyUp={(event) => handleKeyPress(event)}
      ></input>
      <Button variant="outline-dark" onClick={() => props.fetchData(input)}>
        Search
      </Button>
    </div>
  );
}
