import { useState } from "react";

function Student({ name }) {
  return (
    <div>
      <h2>Student Name: {name}</h2>
    </div>
  );
}

function App() {
  const [studentName, setStudentName] = useState("Enter your name");

  function handleChange(event) {
    setStudentName(event.target.value);
  }

  return (
    <div>
      <h1>Student Details</h1>

      <input
        type="text"
        placeholder="Enter student name"
        value={studentName}
        onChange={handleChange}
      />

      <Student name={studentName} />
    </div>
  );
}

export default App;