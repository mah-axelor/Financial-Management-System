import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"
export default function Routing(){
  
    return <Router>
        <NavBar/>
        <Routes>
            <Route  path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
        </Routes>

    </Router>
}