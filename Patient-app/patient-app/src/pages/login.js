import { useState } from "react";
import {useNavigate} from "react-router-dom";
import swal from 'sweetalert';

function Login() {
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const login = () =>{
        if(username === "admin" && password==="123"){  
            localStorage.setItem("user","admin");
            localStorage.setItem("username",username);
            localStorage.setItem("password",password);
            navigate('/home')  
        }
        else if(username==="patient" && password ==="123"){
            localStorage.setItem("user","patient");
            localStorage.setItem("username",username);
            localStorage.setItem("password",password);
            navigate('/about')  
        } 
        else{
            swal("Error","Username or password is wrong","error")   
        }
    }
    return ( 
        <div className="login"> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="bg-light login-main border border-3 mx-5 py-5 ">
            <h1 className="text-center">Welcome the Patient App Login Page</h1>
            <i className="fa-solid fa-user"></i>
            <input className="inputAnimation mb-3" placeholder="Username..." onChange={(e)=>setUserName(e.target.value)} />
            <i class="fa-solid fa-lock"></i>
            <input className="inputAnimation" placeholder="Password..." type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button className="btn btn-primary mt-2" onClick={login}>Login</button>
            </div>
        </div>
     );
}

export default Login;