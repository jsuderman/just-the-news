import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

// import { Provider } from "react-redux";
// import store from "./store";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search"

function App() {
  return (
    // <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <Header />
          <Search />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    // </Provider>
  );
}

export default App;
