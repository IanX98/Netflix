import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { render } from "react-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import HomeMovies from "./HomeMovies";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Routes>
            <Route element={<HomePage/>} path=""/>
            <Route element={<HomeMovies/>} path="filmes/"/>
          </Routes>
        </Router>
      </div>
    );
  }
}

const rootDiv = document.getElementById("root");
render(<App />, rootDiv);