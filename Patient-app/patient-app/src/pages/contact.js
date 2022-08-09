import Navbar from "./navbar";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useFormik} from "formik";
import {patientValidation} from "../validation";
import swal from "sweetalert";

function Contact() {
    const navigate = useNavigate(); 

    const [age,setAge] = useState("");
    const [disease,setDisease] = useState("");
    const [gender,setGender] = useState("");
    const [height,setHeight] = useState("");
    const [imgUrl,setImgUrl] = useState("");
    const [nameSurname,setNameSurname] = useState("");
    const [weight,setWeight] = useState("");  
    const [contact,setContact] = useState(""); 

    const {values,handleSubmit,handleChange,errors,touched,handleBlur} = useFormik({  
        initialValues:{ 
            age:age,
            disease:disease,  
            gender:gender,
            height:height,
            imgUrl:imgUrl,
            nameSurname:nameSurname,    
            weight:weight,  
            contact:contact,
        },
        onSubmit: (values) =>{
            swal("Mission Accomplished","Your datas will be added our database","success").then(()=>{
                navigate("/")
            })
        },

        validationSchema: patientValidation, 
    })

    return ( 
        <>
            <Navbar/>
            <h1 className="text-center my-5">Contact Page</h1>
            <div className="container mb-5">
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
                            <label htmlFor="imgUrl"  className="form-label">Your Image:</label>
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
                        <div className="col-6 mb-3 mx-auto">
                            <label htmlFor="contact"  className="form-label">Telephone Number or Email:</label>
                            <input onBlur={handleBlur} value={values.contact} type="text" id="contact" className="form-control" name="contact" onChange={handleChange}/>
                        </div>
                        {
                            errors.contact && touched.contact && <div className="alert alert-danger w-50 mx-auto" role="alert">
                                                    {errors.contact} 
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
                            <button type="submit" className="btn btn-sm btn-primary mb-2">Submit</button> 
                        </div>
                    </form> 
                </div>
            </div> 
        </>
     );
}

export default Contact;