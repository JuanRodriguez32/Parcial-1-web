import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount()
  {
    fetch("/getFollowers/juanrodriguez32")
    .then((res) => res.json())
    .then((json) => console.log(json));
  }

  onSearch(user) {
    console.log(user);
  }
  render() {
    return (
      <div className="App">
        <SearchBox onSearch = {this.onSearch.bind{this}}
        user = {"juanrodriguez32"}
      </div>
    );
  }
}

export default App;


