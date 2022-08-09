
import { useFormik } from "formik"; 
import { useEffect,useState} from "react"; 
import { useNavigate, useParams } from "react-router-dom";
import PatientService from "../service";
import {validation} from "../validation";
import Navbar from "./navbar";
import swal from 'sweetalert';

function PatientUpsert() {
    const navigate = useNavigate();   

    const patient = new PatientService();
    const {id} = useParams(); 
    console.log(id);   
       
    const [age,setAge] = useState("");
    const [disease,setDisease] = useState("");
    const [gender,setGender] = useState("");
    const [height,setHeight] = useState("");
    const [imgUrl,setImgUrl] = useState("");
    const [nameSurname,setNameSurname] = useState("");
    const [weight,setWeight] = useState(""); 

    useEffect(()=>{
        if(id){
            patient.getPatientById(id).then(res=>{ 
                console.log(res.data) 
                setAge(res.data.age); 
                values.age = res.data.age;
                setDisease(res.data.disease)
                values.disease = res.data.disease;
                setGender(res.data.gender)
                values.gender = res.data.gender;
                setHeight(res.data.height)
                values.height = res.data.height;
                setImgUrl(res.data.imgUrl)
                values.imgUrl = res.data.imgUrl;
                setNameSurname(res.data.nameSurname)
                values.nameSurname = res.data.nameSurname;
                setWeight(res.data.weight)   
                values.weight = res.data.weight;    
                console.log(values); 
            })  
        }
    },[]) 

    const {values,handleSubmit,handleChange,errors,touched,handleBlur} = useFormik({  
        initialValues:{ 
            age:age,
            disease:disease,  
            gender:gender,
            height:height,
            imgUrl:imgUrl,
            nameSurname:nameSurname,    
            weight:weight,  
        },
        onSubmit: (values) =>{
            console.log(values); 
            if(!id){
                patient.addPatient(values).then(()=>{
                    swal("Mission Accomplished", "The new patient was added successfully", "success").then(()=>{
                        navigate("/home") ; 
                    })
                })
            }
            else{
                patient.updatePatient(id,values).then(()=>{
                    swal("Mission Accomplished", "The current patient's datas were updated successfully", "success").then(()=>{
                        navigate("/home") ; 
                    })  
                }) 
            } 
            
        },

        validationSchema: validation, 
    })


    return (  
        <>
           {console.log(errors)}
            <Navbar/>
            <h3 className="text-center mt-3">{id?"Update Current Patient":"Add New Patient"}</h3> 
            <div className="container">
                <div className="">
                    <form className="" onSubmit={handleSubmit}>
                        <div className="col-6 mb-3 mx-auto">
                            <label htmlFor="nameSurname"  className="form-label">Name Surname:</label>
                            <input onBlur={handleBlur} value={values.nameSurname} type="text" id="nameSurname" className="form-control" name="nameSurname" onChange={handleChange}/>
                        </div>
                        {
                            errors.nameSurname && touched.nameSurname && <div className="alert alert-danger w-50 mx-auto" role="alert">
                                                    {errors.nameSurname} 
                                                  </div>
                           
                        } 
                        <div className="col-6 mb-3 mx-auto">
                            <label htmlFor="age"  className="form-label">Age:</label>
                            <input onBlur={handleBlur} value={values.age} type="text"  id="age" className="form-control" name="age" onChange={handleChange}/>
                        </div>
                        {
                            errors.age && touched.age && <div className="alert alert-danger w-50 mx-auto" role="alert">
                                                    {errors.age} 
                                                  </div>
                        }
                        <div className="col-6 mb-3 mx-auto">
                            <label htmlFor="imgUrl"  className="form-label">Patient's Image:</label>
                            <input onBlur={handleBlur} value={values.imgUrl} type="text"  id="imgUrl" className="form-control" name="imgUrl" onChange={handleChange}/>
                        </div>
                        {
                            errors.imgUrl && touched.imgUrl && <div className="alert alert-danger w-50 mx-auto" role="alert">
                                                    {errors.imgUrl} 
                                                  </div>
                        }
                        <div className="col-6 mb-3 mx-auto">
                            <label htmlFor="height"  className="form-label">Height:</label>
                            <input onBlur={handleBlur} value={values.height} type="text"  id="height" className="form-control" name="height" onChange={handleChange}/>
                        </div>
                        {
                            errors.height && touched.height && <div className="alert alert-danger w-50 mx-auto" role="alert">
                                                    {errors.height} 
                                                  </div>
                        }
                        <div className="col-6 mb-3 m-auto">
                            <label htmlFor="weight"  className="form-label">Weight:</label>
                            <input onBlur={handleBlur} value={values.weight} type="text"  id="weight" className="form-control" name="weight" onChange={handleChange}/>
                        </div>
                        {
                            errors.weight && touched.weight && <div className="alert alert-danger w-50 mx-auto" role="alert">
                                                    {errors.weight} 
                                                  </div>
                        }
                        <div className="col-6 mb-3 mx-auto">
                            <label htmlFor="disease"  className="form-label">Disease:</label>
                            <input onBlur={handleBlur} value={values.disease} type="text"  id="disease" className="form-control" name="disease" onChange={handleChange}/>
                        </div>
                        {
                            errors.disease && touched.disease && <div className="alert alert-danger w-50 mx-auto" role="alert">
                                                    {errors.disease} 
                                                  </div>
                        }
                        <div className="col-2 mb-3 mx-auto">
                            <label htmlFor="gender"  className="form-label me-1">Gender:</label>
                            Male <input onBlur={handleBlur} checked={values.gender==="Male"} value="Male" type="radio" id="gender" className="form-check-input me-2" name="gender" onChange={handleChange}/>
                            Female <input onBlur={handleBlur} checked={values.gender==="Female"} value="Female" type="radio" id="gender" className="form-check-input" name="gender" onChange={handleChange}/>
                        </div> 
                        {
                            errors.gender && touched.gender && <div className="alert alert-danger w-50 mx-auto" role="alert">
                                                    {errors.gender} 
                                                  </div>
                        }
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-sm btn-primary mb-3">{id?"Update Patient":"Add Patient"}</button> 
                        </div>
                    </form> 
                </div>
            </div> 
        </>
     );
}

export default PatientUpsert;