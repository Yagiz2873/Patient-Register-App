import * as yup from "yup"

const validation = yup.object().shape({
    age:yup.string().required("Please enter the patient's age"),
    disease:yup.string().required("Please enter the patient's disease"),
    gender:yup.string().required("Please choose the patient's gender"),  
    height:yup.string().required("Please enter the patient's height"),
    imgUrl:yup.string().required("Please add the patient's photograph"),
    nameSurname:yup.string().required("Please add the patient's name and surname"),
    weight:yup.string().required("Please enter the patient's weight"),
})

const patientValidation = yup.object().shape({
    age:yup.string().required("Please enter your age"),
    disease:yup.string().required("Please enter your disease"),
    gender:yup.string().required("Please choose your gender"),  
    height:yup.string().required("Please enter your height"),
    imgUrl:yup.string().required("Please add your photograph"),
    nameSurname:yup.string().required("Please add your name and surname"),
    contact:yup.string().required("Please add your telephone or email"),
    weight:yup.string().required("Please enter your weight"),
})

export {validation,patientValidation}; 