import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Student({ name, email, message }) {
  return (
    <div className="mt-4">
      <h2>Student Details</h2>

      <p>Student Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
}

function App() {
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleNameChange(event) {
    setStudentName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  return (
    <div className="container mt-4">

      <h1>Student Details</h1>

      
      <div className="mb-3">
        <label className="form-label">
          Student Name
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Enter student name"
          value={studentName}
          onChange={handleNameChange}
        />
      </div>

     
      <div className="mb-3">
        <label
          htmlFor="email"
          className="form-label"
        >
          Email address
        </label>

        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      
      <div className="mb-3">
        <label
          htmlFor="message"
          className="form-label"
        >
          Message
        </label>

        <textarea
          className="form-control"
          id="message"
          rows="3"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </div>

      
      <Student
        name={studentName}
        email={email}
        message={message}
      />

    </div>
  );
}

export default App;