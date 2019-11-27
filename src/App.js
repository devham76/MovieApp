import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';


class App extends React.Component {

  state = {}

  componentDidMount() {
    this._getMovies();
  }

  // 비동기화 함수
  _getMovies = async() => {
    // await를 하는 것은 call api기능이 끝나는것을 기다리고
    // 끝나면 그 결과값을 movies에 넣는다
    const movies = await this._callApi()
    // 해당부분은 callApi 작업이 완료 되기 전까지는 실행되지 않는다
    this.setState({
       // 모던 자바스크립트의 표현, 이전표현 => movies : movies
      movies 
    })
  }

  //-- url 을 ajax로 불러온다
  _callApi = () =>{
    const url = "https://yts.lt/api/v2/list_movies.json?sort_by=rating"; 
    return fetch(url)
    .then( potato => potato.json()) // json으로 변경
    .then( json => json.data.movies)
    .catch( err => console.log(err))
  }

  // 리액트는 자체 기능이 많기 때문에
  // 리액트 자체기능과 나의 기능에 차이를 두려고 '_'를 사용한다
  _renderMovies = () => {
    // movies라는 변수에 데이터 저장
    const movies = this.state.movies.map( movie => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
    })
    return movies
  }


  // state에 movies가 없기 때문에 state.movies를 출력하라는 코드는 에러가 난다.
  // 해결 방법 -> movies가 없으면 "Loading"출력, 있으면 movies출력
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}
export default App;

