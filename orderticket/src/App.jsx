import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./authentication/login/Login";
import { useState } from "react";
import Signup from "./authentication/signup/Signup";

function App() {
  return (
    // <Input
    //   onChange={(e) => console.log(e.target.value)}
    //   value={a}
    //   type={"text"}
    //   className={``}
    // ></Input>
    <Routes>    
      <Route path="/signin" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
    </Routes>
  );
}

export default App;
