import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" />
      <button OnClick={() => props.Search("...buscar")}>Add</button>
    </div>
  );
}
