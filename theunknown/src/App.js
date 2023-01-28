import React from "react";
import {Route, Routes} from "react-router-dom"
import Main from "./components/Main"
import Login from "./components/Login"


function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path='/Main' element={<Main/>} />
        </Routes>  
    </div>
  );
}

export default App;
