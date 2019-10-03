import React from "react";
import "./App.css";
import Admin from "./Components/AdminPage/Index";

require('../daily_schoolar/server.js.js')


function App() {
  return (
    <wrapper>
    <p>HelloWorld</p>
    <Admin />
    </wrapper>
  );
}

export default App;
