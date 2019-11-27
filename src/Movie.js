import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css';
import generate from '@babel/generator';
import LinesEllipsis from 'react-lines-ellipsis'


function Movie({ title, poster, genres, synopsis, rating }) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Moive__Genres">
          {genres.map((genre, index) => {
            return <MovieGenre genre={genre} key={index} />
          })}
        </div>
        <div className="Moive__Rating">
          {rating}
        </div>
        <p className="Movie__Synopsis">

          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis=' ... '
            trimRight
            basedOn='letters'
          />
        </p>
      </div>
    </div>
  )
}

function MoviePoster({ poster, alt }) {
  return (
    <img className="Movie__Poster" src={poster} alt={alt} />
  )
}

function MovieGenre({ genre }) {
  return (
    <span className="Movie__Genre">{genre} </span>
  )
}

Movie.proptype = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

MoviePoster.prototype = {
  poster: PropTypes.string.isRequired
}

MovieGenre.prototype = {
  genres: PropTypes.string.isRequired
}
export default Movie;
