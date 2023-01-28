import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Main from "./components/Main"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Main' element={<Main/>} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
