import {Link, useNavigate} from "react-router-dom";
function Navbar() {
    const navigate = useNavigate();
    const user = localStorage.getItem("user") 
    const exit = () =>{
        localStorage.removeItem("user");
        localStorage.removeItem("username"); 
        localStorage.removeItem("password");
        navigate("/")
    }
    return ( 
        <div>


            {user === "admin" && <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
           <div className="container-fluid">
               <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav"> 
                   <li className="nav-item">
                   <Link className="nav-link active" aria-current="page" to="/home">Homepage</Link>
                   </li>
                   <li className="nav-item">
                   <Link className="nav-link" to="/patientcard">Patient Details</Link> 
                   </li>
                   <li className="nav-item">
                   <button onClick={()=>exit()} className="btn btn-danger">Exit</button>   
                   </li>
               </ul>
               </div> 
           </div>
        </nav> 
            </div>}

            {user === "patient" && <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark"> 
           <div className="container-fluid">
               <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                   <li className="nav-item">
                   <Link className="nav-link" to="/about">About</Link> 
                   </li>
                   <li className="nav-item">
                   <Link className="nav-link" to="/contact">Contact</Link> 
                   </li>
                   <li className="nav-item"> 
                   <button onClick={()=>exit()} className="btn btn-danger">Exit</button>  
                   </li>
               </ul>
               </div> 
           </div>
        </nav> 
            </div> }
        </div>  
    );
}

export default Navbar;