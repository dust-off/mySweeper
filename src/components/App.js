import React from 'react';

import Board from './Board';
import { initStore, updateState } from '../Store';
import StyledButton from './bits/StyledButton'
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = initStore;
    this.updateState = updateState.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.reSize = this.reSize.bind(this)
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

  inputChange(e) {
    let obj = {
      type: 'SELECT_SIZE',
      size: this.state.size,
      mines: this.state.mines,
    }

    obj[e.target.id] = e.target.value;
    this.updateState(obj)
  }

  reSize() {
    this.updateState({
      type: 'RESIZE',
    })
  }

  render() {
    const len = this.state.board.length
    const wide = (49 * len) + (len < 6 ? 50 : 18)
    const styles = {
      margin: '0 auto',
      padding: '0px',
      maxWidth: `${wide}px`
    }
    return (
      <div className="game">
{/*       
        <div className="monkey">
          <div className="info">
            <StyledButton />
            <input type="number" inputmode="numeric" placeholder="mines" style={{position: 'center'}}></input>
            <input type="number" inputmode="numeric" placeholder="mines"></input>
          </div>
        </div> */}

        <div className={this.getClassOfInfo()}>
          <span><h1>mySweeper</h1></span>
          <div className="info">mines: {this.state.gameState.mines}</div>
          <div className="info">flags: {this.state.gameState.flags}</div>
          <br/>
          <input onChange={this.inputChange} id="size" type="number" inputmode="numeric" placeholder="size"></input>
          <input onChange={this.inputChange} id="mines" type="number" inputmode="numeric" placeholder="mines"></input>
          <button onClick={this.reSize}>Restart</button>
        </div>
        <div style={styles}>
          <Board
            board={this.state.board}
            updateState={this.updateState}
          />
        </div>

      </div>
    );
  }
}

