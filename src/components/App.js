import React from 'react';

import Board from './Board';
import { initStore, updateState } from '../Store'
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = initStore;
    this.updateState = updateState.bind(this)
  }

  getClassOfInfo() {
    let className = "game-info";
    className += this.state.gameState.win === true ? ' is-pass' : '';
    className += this.state.gameState.win === false ? ' is-fail' : '';

    return className;
  }

  render() {
    return (
      <div className="game">

        <div className={this.getClassOfInfo()}>
          <span className="info">mines: {this.state.gameState.mines}</span>
          <span className="info">flags: {this.state.gameState.flags}</span>
        </div>

        <Board
          board={this.state.board}
          updateState={this.updateState}
        />

      </div>
    );
  }
}

