import React, { Component } from 'react';
import './App.css';
import Board from './Board';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="game-board" >
          <Board />
        </div>
        <div className="game-info" >
          <div> </div>
          <ol> </ol>
        </div>
      </div>
    );
  }
}

export default App;
