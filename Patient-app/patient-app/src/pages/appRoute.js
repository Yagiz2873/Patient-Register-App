import Home from './home';
import {Routes,Route} from "react-router-dom";
import PatientCard from './patientDetailCard';
import PatientUpsert from './patientUpsert'; 
import Login from './login';
import Container from './container';
import About from './about';
import Contact from './contact';


function AppRoute() {   
    const user = localStorage.getItem("user");
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    return ( 
        <div>
        {!user && <Routes>
            <Route path='/' element={<Container/>}> 
                <Route index ={true} element={<Login/>}/>
                <Route path='*' element={<Container/>}/>
            </Route>
      </Routes>}


      {user === "admin" && username && password && <Routes>
            <Route path='/' element={<Container/>}> 
                <Route index ={true} element={<Login/>}/> 
                <Route path='home' element={<Home/>}/>   
                <Route path='patientcard' element={<PatientCard/>}/>
                <Route path='patientupsert' element={<PatientUpsert/>}/>
                <Route path='patientupsert/:id' element={<PatientUpsert/>}/>  
                <Route path='*' element={<Container/>}/>
            </Route>
      </Routes> }  

      {user === "patient" && username && password && <Routes>
            <Route path='/' element={<Container/>}> 
                <Route index ={true} element={<Login/>}/> 
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>} />  
                <Route path='*' element={<Container/>}/>
            </Route>
      </Routes> }
        </div> 
     );
}

export default AppRoute;