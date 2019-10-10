import axios from "axios";

export default {
<<<<<<< HEAD
    saveStudent: function(studentData){
        console.log("studentData in API.js file: " +JSON.stringify(studentData))
        return axios.post("/api/students", studentData);
    }
=======
    // Saves the student
    saveStudent: function(year) {
        return axios.post("/api/students", year);
    } 
>>>>>>> origin
}