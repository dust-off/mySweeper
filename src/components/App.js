import React from 'react';
import './App.css';

import { initStore, updateState } from '../Store';

import Board from './Board';
import { Flowing } from './bits/Flowing'
import { StyledButton } from './bits/StyledButton'

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
    // let innerWidth = window.innerWidth
    // let innerHeight = window.innerHeight

    // const len = this.state.board.length
    // const wide = (49 * len) + (len < 6 ? 50 : 18)

    // wide, tall 481 780 410 - ok
    // wide, tall 479 780 410 - fail
        // diff: 70px

    // wide, tall 660 780 606 - ok
    // wide, tall 658 780 606 - fail
        // 53px

    // console.log('wide, tall', innerWidth, innerHeight, wide)

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
      position: 'relative',
      margin: '0 auto',
      padding: '0px',
      maxWidth: `${wide}px`
    }
    return (
      <div className="game">
        <Flowing classTitle={this.getClassOfInfo()} >
          <div style={{ position: 'absolute', top: '50px', left: '50%' }}>
            <StyledButton> 
              <div class="button" onClick={this.reSize}>
                {this.state.gameState.win === null ? 'mySweeper' : 'New Game'}
              </div>
            </StyledButton>
          </div>
          <div className="info">mines: {this.state.gameState.mines}</div>
          <div className="info">flags: {this.state.gameState.flags}</div>
          <br/>
          <div style={{height: '50px'}} />
          Size: <input onChange={this.inputChange} id="size" type="number" inputMode="numeric" defaultValue={this.state.size}></input>
          Mines: <input onChange={this.inputChange} id="mines" type="number" inputMode="numeric" defaultValue={this.state.mines}></input>
        </Flowing>
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

