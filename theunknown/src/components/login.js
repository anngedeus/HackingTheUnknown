import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [form, setForm] = useState({
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
    console.log("ahhh");
    const loginInfo = { ...form };
    console.log(loginInfo);
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    const userInfo = await response.json();
    console.log(userInfo);
    if (userInfo != null) {
      navigate("/main", {
        state: {
          _id: userInfo._id,
          name: userInfo.name,
          visited: userInfo.visited,
        },
      });
    } else {
      setForm({ email: "", password: "" });
      window.alert("Incorrect Password");
    }
  }

  return (
    <div>
      <h3>Log In</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            className="form-control"
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
