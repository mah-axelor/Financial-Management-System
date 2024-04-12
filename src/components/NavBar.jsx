import { Link, useNavigate  } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import './styles/navBar.css';





export default function () {
  
  const {isLoggedIn}=useAuth();
  
 

  const handleLogOut=async()=>{
    
  }

  
  
  return (
    <div className="NavBar">
      
        <Link to="/Home"><div id="Shop">Home</div></Link>
        <Link to="/Expenses">Manage expenses</Link>   
   
    </div>
  );
}