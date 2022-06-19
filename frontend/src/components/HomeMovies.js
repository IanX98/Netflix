import React, { Component } from "react";

export default class HomeMovies extends Component {
  constructor(props) {
    super(props);
    this.fetchMovies = this.fetchMovies.bind(this)
  }

  componentWillMount(){
    this.fetchMovies()
  }

  fetchMovies(){
    console.log('Fetching...')

    fetch('http://127.0.0.1:8000/api/movie-list/')
    .then(response => response.json())
    .then(data => 
        console.log('Data:', data)
      )
  }

  render() {
    return (
      <div class='py-10'>
        <h1>Home Filmes</h1>
        <hr/>

      </div>
    );
  }
}

;