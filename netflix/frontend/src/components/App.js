import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { render } from "react-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import HomeMovies from "./HomeMovies";
import DetailsMovie from "./DetailsMovie";

const App = () => {

    return (
      <div>
        <NavBar />
        <Router>
          <Routes>
            <Route element={<HomePage/>} path=""/>
            <Route element={<HomeMovies/>} path="filmes/"/>
            <Route element={<DetailsMovie/>} path="filmes/:pk/"/>
          </Routes>
        </Router>
      </div>
    );
}

const rootDiv = document.getElementById("root");
render(<App />, rootDiv);

export default App;
