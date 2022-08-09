import { useEffect, useState } from "react";
import Navbar from "./navbar";
import axios from "axios";
import swal from 'sweetalert';

function PatientCard() {

    const [patientList,setPatientList]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/patients").then(patients=>{
            console.log(patients.data);
            setPatientList(patients.data);
            swal("Mission Accomplished", "All the patients' datas were brought successfully", "success");
        })
    },[]) 

    return ( 
        <>
            <Navbar/>
            <h3 className="text-center mt-3">Patient Information Cards</h3>  
            <div className="container">
             <div className="row">

                {
                    patientList.map((patient,index)=>{
                        return  <div className="card mt-2 mx-auto mb-4" style={{width:"20rem"}} key={index}>
                                    <img src={patient.imgUrl} className="card-img-top mt-2" alt=""/> 
                                    <div className="card-body">
                                        <h6 className="card-title">Full Name : {patient.nameSurname}</h6> 
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Age : {patient.age}</li>
                                        <li className="list-group-item">Gender : {patient.gender}</li>
                                        <li className="list-group-item">Height : {patient.height} cm</li>
                                        <li className="list-group-item">Weight : {patient.weight} kg</li>
                                        <li className="list-group-item">Disease : {patient.disease}</li>
                                    </ul>
                                </div>
                    })
                }

                {/*
                    {
                        "id":1,
                        "imgUrl":"https://randomuser.me/api/portraits/women/3.jpg", 
                        "nameSurname":"Jessica Clemens",
                        "age":34,
                        "gender":"female",
                        "height":170,
                        "weight":70,
                        "disease":"Diabetes" 
                    }
                */}


             </div>
            </div>
        </>
     );
}

export default PatientCard;