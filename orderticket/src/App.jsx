import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./authentication/login/Login";

function App() {

  return (
    <Routes>
        <Route path={`/login`} element={<Login></Login>}></Route>
      </Routes>
  );
}

export default App;
