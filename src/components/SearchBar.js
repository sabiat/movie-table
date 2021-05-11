import React, { useState } from "react";

export default function SearchBar(props) {
  const styling = { width: "50rem", padding: "0.5rem" };
  return (
    <>
      <input type="text" style={styling}></input>
      <button>Search</button>
    </>
  );
}
