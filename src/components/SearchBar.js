import React, { useState } from "react";

export default function SearchBar(props) {
  const styling = { width: "40%", padding: "0.5rem" };
  const [input, setInput] = useState("");
  return (
    <div className="SearchContainer">
      <input
        type="text"
        style={styling}
        placeholder="Ex. 'Batman'"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button onClick={() => props.fetchData(input)}>Search</button>
    </div>
  );
}
