import axios from "axios"
export default class PatientService {
    baseUrl = "http://localhost:3001/patients";

    async getAllPatients(){
        const response = await axios.get(this.baseUrl);
        return response;
    }

    async removePatient(id){
        const response = await axios.delete(this.baseUrl + "/" + id) 
    }

    async addPatient(model){
        const response = await axios.post(this.baseUrl + "/",model);
        return response; 
    }

    async getPatientById(id){
        const response = await axios.get(this.baseUrl + "/" + id)
        return response;
    }

    async updatePatient(id,model){
        const response = await axios.put(this.baseUrl+"/"+id,model)
    }

}