import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";

export default function(){
  
    return <Router>
        <NavBar/>
        <Routes>
            <Route  path="/" element={<Login/>}/>
        </Routes>

    </Router>
}