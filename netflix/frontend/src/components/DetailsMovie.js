import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsMovie = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const {pk} = useParams()

  useEffect(() => {    
    fetch(`http://127.0.0.1:8000/api/movie-detail/${pk}/`)
    .then(response => response.json())
    .then(data =>{
      setMovieDetail(data)
    }
    ).catch((e)=>{console.log(e)})
  }, [])

    return (
      <div class="py-10">
        <h1>Home Filmes</h1>
          <div >
            <hr/>
            <p>{movieDetail.title}</p> 
            <p>{movieDetail.description}</p>
            <img src={`${movieDetail.thumb}`}/>
          </div>
      </div>
    );
}

export default DetailsMovie;
