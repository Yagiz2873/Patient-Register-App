
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import PatientService from "../service";
import Navbar from "./navbar";
import swal from 'sweetalert';

function Home() {

    const navigate = useNavigate();
    const patient = new PatientService()

    const [patientList,setPatientList]= useState([]);

    const getPatienList = () =>{
        patient.getAllPatients().then(patients=>{
            console.log(patients.data);
            setPatientList(patients.data)
            swal("Mission Accomplished", "All the patients' datas were brought successfully", "success");
        })
       
    }

    useEffect(()=>{
        getPatienList();
        
    },[])

    const removePatient = (id) =>{
        patient.removePatient(id).then(()=>{
            swal("Mission Accomplished","The patient's datas were removed successfully" , "success").then(()=>{
                getPatienList();
            })
        })
    }

    return ( 
        <div>
            <Navbar/> 
            <h3 className="text-center my-4">Welcome to the Homepage <button onClick={()=>navigate('/patientupsert')} className="btn btn-success btn-sm ms-5">Add New Patient</button></h3> 
            <div className="container">
                <div className="row">
                <table className="table table-bordered text-center table-striped table-hover"> 
                <thead>
                    <tr>
                    <th scope="col">Id No</th>
                    <th scope="col">Name Surname</th>
                    <th scope="col">Age</th>
                    <th scope="col">Disease</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patientList.map((patient,index)=>{
                            return <tr key={index}>
                                    <td>{patient.id}</td>
                                    <td>{patient.nameSurname}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.disease}</td>
                                    <td>{patient.gender}</td>
                                    <td><button onClick={()=>removePatient(patient.id)} className="btn btn-danger btn-sm me-2">Remove</button>
                                        <button onClick={()=>navigate('/patientupsert/'+patient.id)} className="btn btn-warning btn-sm">Update</button> 
                                    </td> 
                                   </tr>
                        })
                    }
                    
                </tbody>
            </table>
                </div>
            </div>
            
        </div>
     );
}

export default Home;