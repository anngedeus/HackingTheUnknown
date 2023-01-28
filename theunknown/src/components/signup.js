import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const signUpInfo = { ...form };
    if (
      signUpInfo.email == "" ||
      signUpInfo.name == "" ||
      signUpInfo.password == ""
    ) {
      window.alert("All fields must be filled out.");
    } else {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpInfo),
      }).catch((error) => {
        window.alert(error);
        return;
      });

      const status = await response.json();
      console.log(status);
      if (status != null) {
        //navigate("/") //navigate to login
      } else {
        window.alert("There was an error");
      }
    }
  }

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={onSubmit}>
        <div classname="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            classname="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div classname="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            classname="form-control"
            id="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
        <div classname="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            classname="form-control"
            id="password"
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
