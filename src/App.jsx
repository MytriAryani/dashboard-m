import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/UserRegister/Login";
import SignUp from "./pages/UserRegister/Signup";
import Home from "./pages/Home/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
         
        </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
