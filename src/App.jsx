import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Child({ userName }) {
  return (
    <div className="container mt-5">
    <h1>Hello, {userName}!</h1>
    </div>
  );
}

function App() {
  const [userName, setUserName] = useState("");

  return (
    <>
      <label className="form-label">
              Name
      </label><input
        type="text"
        className="form-control"
        placeholder="Enter your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <button className="btn btn-primary" onClick={() => setUserName("")}>
        Clear
      </button>

      <Child userName={userName} />
    </>
  );
}

export default App;