import React from "react";
import "./App.css";



// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// require('../daily_schoolar/server.js.js')



import Nav from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";

import Register from "./Components/RegisterPage/RegisterPage";







function App() {
  return (

    // <Router>

    // <div>
    // <Nav /> 
    //  {/* </div> */}

     
    //  {/* <LoginPage /> */}
     
    //    {/* <div> */}
    //    <Switch>
    //       <Route exact path= "/" component={LoginPage} />
    //       <Route exact path= "/" component={Register} />
    //       <Route exact path= "/" component={Footer}/>
    //     </Switch>
    //     {/* <Register />
    //  <Footer /> */}
    //  </div> 
    //  </Router>
   
    <wrapper>

   


       <div>
         <Nav />




        {/* <Admin /> */}
        {/* <Student /> */}
        <Register />
        <Footer />
      </div>
    </wrapper>



  );
}

export default App;