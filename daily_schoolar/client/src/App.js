import React from "react";
import "./App.css";
import Admin from "./Components/AdminPage/Admin";
import LoginPage from "./Components/LoginPage/LogIn";
import Nav from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";
import Student from "./Components/StudentPage/Student"



function App() {
  return (
    <wrapper>
   <div>
     <Nav />
     {/* </div> */}
     {/* <div> */}
     {/* <LoginPage /> */}
     {/* </div> */}
      {/* <div> */}
        {/* <Admin /> */}
        <Student />
     <Footer />
     </div>
     </wrapper>
   
    
  );
}

export default App;
