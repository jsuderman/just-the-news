import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Header />
        <Route exact path="/register"  component={Register} />
        <Route exact path="/login"  component={Login} />
      </div>
    </Router>
  );
}

export default App;
