import React from 'react';
import Movie from './Movie';
import './App.css';

const movies = [
  {
    title : "Harry Poter",
    poster : "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5xq2/image/w2gbbJ7lwG0quKMZtTihufPuvno.jpg"
  },
  {
    title : "Toy Story",
    poster : "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5uYQ/image/R3t_QxnFFfr20i8ekqVdzxUnBYE.jpg"
  },
  {
    title : "Aladin",
    poster :   "http://img.movist.com/?img=/x00/05/11/49_p1.jpg"
  }
]

function App() {
  componentWillMonut(){
    console.log(" will mount");
  }
  componentDidMount(){
    console.log("did mount");
  }
  return (
    <div className="App">
      {movies.map( (movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
      })}
    </div>
  );
}

export default App;

