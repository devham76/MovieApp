import React from 'react';
import './Movie.css';


function Movie() {
  return (
    <div>
        <MoviePoster />
        <h1>hello this is a Movie</h1>
    </div>
  );
}

function MoviePoster() {
    return (
        <img src="https://t1.daumcdn.net/cfile/tistory/153C003D4F6EED983A" />
    );
}   
export default Movie;
