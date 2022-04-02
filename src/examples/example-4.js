import React, { useState } from "react";

export default function App({ onClickSubmit }) {
  const [response, setResponse] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onClickSubmit(response);
      }}
    >
      <label htmlFor="query">Favorite Query:</label>
      <input
        id="query"
        placeholder="Type your favorite query"
        type="text"
        onChange={(event) => setResponse(event.target.value)}
      />
      <button type="submit">Submit!</button>
    </form>
  );
}
