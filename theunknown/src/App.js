import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/login";
import SignUp from "./components/signup";
import Welcome from "./components/welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
