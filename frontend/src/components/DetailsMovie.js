import React, { Component } from "react";

export default class DetailsMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetail: [],
      activeItem:{
        id:null,
        title:'',
        thumb:'',
        description:'',
      },
    }
    this.fetchMovie = this.fetchMovie.bind(this)
  }

  componentWillMount(){
    this.fetchMovie()
  }

  fetchMovie(){
    console.log('Fetching...')
    return

    fetch('http://127.0.0.1:8000/api/movie-list/int:pk/')
    .then(response => response.json())
    .then(data => 
      this.setState({
        movieDetail: data
      })
      )
  }

  render() {
    console.log(this.props.match.params)
    var movie = this.state.movieDetail
    return (
      <div class="py-10">
        <h1>Home Filmes</h1>
          return(
            <div >
              <hr/>
              <p>{movie.title}</p>
              <p>{movie.description}</p>
              <img src={`${movie.thumb}`}/>
            </div>
          )
        
      </div>
    );
  }
}

