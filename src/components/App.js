import React from 'react';

import Board from './Board';
import { initStore, updateState } from '../Store';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = initStore;
    this.updateState = updateState.bind(this)
  }

  getClassOfInfo() {
    let className = "game-info"

    if (this.state.gameState.win) {
      className += ' is-pass'
    } else if (this.state.gameState.win === false) {
      className += ' is-fail'
    }

    return className;
  }

  render() {
    return (
      <div className="game">

        <div className={this.getClassOfInfo()}>
          <span><h1>mySweeper</h1></span>
          <div className="info">mines: {this.state.gameState.mines}</div>
          <div className="info">flags: {this.state.gameState.flags}</div>
          <br/>
          <input id="input_size" type="number" inputmode="numeric" placeholder="size"></input>
          <input id="input_mines" type="number" inputmode="numeric" placeholder="mines"></input>
        </div>

        <Board
          board={this.state.board}
          updateState={this.updateState}
        />

      </div>
    );
  }
}

