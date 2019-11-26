import React from 'react';
import './Movie.css';


function Movie(props) {
  console.log(props);
  return (
    <div title="hi">
        <MoviePoster poster={props.poster}/>
        <h1>{props.title}</h1>
    </div>
  );
}

function MoviePoster(props) {
    return (
        <img className="posterImg" src={props.poster} />
    );
}   
export default Movie;
