import React from 'react';
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
  <Router>
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </div>
  </Router>
  );
}

export default App;
