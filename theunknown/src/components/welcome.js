import React from "react";
import "../styles/welcome.css";
import { useNavigate } from "react-router";

export default function () {
  const navigate = useNavigate();
  return (
    <div>
      <div className="nav">
        <div style={{ display: "flex" }}>
          <div
            className="login"
            onClick={() => {
              navigate("/login");
            }}
          >
            <h3>Login</h3>
          </div>
          <div
            className="signup"
            onClick={() => {
              navigate("/signup");
            }}
          >
            <h3>Sign Up</h3>
          </div>
        </div>
      </div>
      <div>
        <h1 style={{ margin: "0 auto", textAlign: "center" }}>
          Explore the Unknown
        </h1>
      </div>
    </div>
  );
}
