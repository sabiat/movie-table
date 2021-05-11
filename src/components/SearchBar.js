import React, { useState } from "react";

export default function SearchBar(props) {
  const styling = { width: "50rem", padding: "0.5rem" };
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        style={styling}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button onClick={() => props.fetchData(input)}>Search</button>
    </>
  );
}
