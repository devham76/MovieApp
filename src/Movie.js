import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css';


Movie.proptype = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}
function Movie({ title, poster }) {
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  )
}

MoviePoster.prototype = {
  poster: PropTypes.string.isRequired
}
function MoviePoster({ poster }) {
  return (
    <img className="posterImg" src={poster} alt="poster" />
  )
}

export default Movie;
