import axios from "axios";

export default {
    saveStudent: function(studentData){
        console.log("studentData in API.js file: " +JSON.stringify(studentData))
        return axios.post("/api/students", studentData);
    }
}