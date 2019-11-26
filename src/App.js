import React from 'react';
import Movie from './Movie';
import './App.css';

const moviesTitles = [
  "Harry Poter",
  "Toy Story",
  "Aladin"
]
const movieImages = [
  "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5xq2/image/w2gbbJ7lwG0quKMZtTihufPuvno.jpg",
  "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5uYQ/image/R3t_QxnFFfr20i8ekqVdzxUnBYE.jpg",
  "http://img.movist.com/?img=/x00/05/11/49_p1.jpg"
]

function App() {
  return (
    <div className="App">
     <Movie title={moviesTitles[0]} poster={movieImages[0]} />
     <Movie title={moviesTitles[1]} poster={movieImages[1]} />
     <Movie title={moviesTitles[2]} poster={movieImages[2]} /> 
    </div>
  );
}

export default App;

