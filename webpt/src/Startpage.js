import Home from "./components/Home";
import Signin from "./components/Login";
import Signup from "./components/Signup";
import Application from "./components/Application"
import { Route, Routes } from "react-router-dom";

function Startpage() {

  const currentUser = false;
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/application" element={<Application />} />
    </Routes>
 
  );
}

export default Startpage;
