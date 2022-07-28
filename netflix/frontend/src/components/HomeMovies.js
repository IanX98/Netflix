import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeMovies = () => {
  const [movieList, setMovielist] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/movie-list/')
      .then(response => response.json())
      .then(data =>{
        setMovielist(data)
      }
      ).catch((e)=>{console.log(e)})
  }, [])

  return (
    <div class="py-10">
      <h1>Home Filmes</h1>
      {movieList.map((movie, index) => {
        return (
          <div key={index}>
            <hr/>
            <Link 
              to={`${index+1}`}>
              <p>{movie.title}</p>
            </Link>
            <p>{movie.description}</p>
            <img src={`${movie.thumb}`} />
          </div>
        )
      })}
    </div>
  );
}

export default HomeMovies;

//{`http://127.0.0.1:8000/filmes/${index+1}/`}