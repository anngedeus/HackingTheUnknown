import React, { useState } from "react";
import { TextField } from "@mui/material";
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
    const loginInfo = { ...form };
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <h3>Log In</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <TextField
            label="Password"
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
