import {Link} from "react-router-dom";
import './styles/navBar.css';





export default function NavBar() {
  
 
  return (
    <div className="NavBar">
      
        <Link to="/Home">Home</Link>
        <Link to="/Expenses">Manage expenses</Link>   
   
    </div>
  );
}