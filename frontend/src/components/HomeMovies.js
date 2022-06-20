import React, { Component } from "react";

export default class HomeMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      activeItem:{
        id:null,
        title:'',
        thumb:'',
        description:'',
      },
    }
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
      this.setState({
        movieList: data
      })
      )
  }

  render() {
    var movies = this.state.movieList
    return (
      <div class="py-10">
        <h1>Home Filmes</h1>
        <hr/>
        {movies.map(function(movie, index){
          return(
            <div key={index}>
              <p>{movie.title}</p>
              <p>{movie.description}</p>
              <img src={movie.thumb.url}/>
            </div>
          )
        })}
      </div>
    );
  }
}

