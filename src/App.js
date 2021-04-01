import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import All from './pages/All'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/*google react router rendering, how to link path to a specific component. you're going to have a react router line that will show 'All' on a specific click */}
        <All/>
      </Router>
    </>
  )
}
export default App;
