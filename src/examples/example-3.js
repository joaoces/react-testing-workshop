import React from "react";

export default function App() {
  return (
    <form>
      <label htmlFor="query">Favorite Query:</label>
      <input id="query" placeholder="Type your favorite query" type="text" />
      <button>Submit!</button>
    </form>
  );
}
