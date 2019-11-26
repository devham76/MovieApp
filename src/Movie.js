import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

// 제목은 반드시 문자열임을 지정해준다.
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}
function Movie(props) {
  return (
    <div>
        <MoviePoster poster={props.poster}/>
        <h1>{props.title}</h1>
    </div>
  );
}

MoviePoster.prototype = {
  poster : PropTypes.string.isRequired
}
function MoviePoster(props) {
    return (
        <img className="posterImg" src={props.poster} />
    );
}   
export default Movie;
