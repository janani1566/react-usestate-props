import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function RegistrationSummary({
  name = "",
  email = "",
  phone = "",
  city = "",
  gender = "",
  terms = false
}) {
  return (
    <div className="card p-3">
      <h2>Registration Summary</h2>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>City: {city}</p>
      <p>Gender: {gender}</p>
      <p>Terms: {terms ? "Accepted" : "Not Accepted"}</p>
    </div>
  );
}


function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    gender: "",
    terms: false
  });

  return (
    <div className="container mt-5">

      <div className="row">

        {/* Left - Registration Form */}
        <div className="col-md-6">
          <div className="card p-3">

            <h2>Registration Form</h2>

            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control mb-3"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your city"
              value={form.city}
              onChange={(e) =>
                setForm({ ...form, city: e.target.value })
              }
            />

            <label className="form-label">Gender</label>
            <select
              className="form-select mb-3"
              value={form.gender}
              onChange={(e) =>
                setForm({ ...form, gender: e.target.value })
              }
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                checked={form.terms}
                onChange={(e) =>
                  setForm({ ...form, terms: e.target.checked })
                }
              />

              <label className="form-check-label">
                I agree to the terms and conditions
              </label>
            </div>

            <button className="btn btn-primary">
              Submit
            </button>

          </div>
        </div>

        
        <div className="col-md-6">
          <RegistrationSummary
            name={form.name}
            email={form.email}
            phone={form.phone}
            city={form.city}
            gender={form.gender}
            terms={form.terms}
          />
        </div>

      </div>

    </div>
  );
}

export default App;