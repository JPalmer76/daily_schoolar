import axios from "axios";

export default {
    // Saves the student
    saveStudent: function(year) {
        return axios.post("/api/students", year);
    } 
}