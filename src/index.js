import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import { state, updateState } from './Store'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = state;
        this.handleGameStart = () => console.log('handleGameStart')
        this.updateState = updateState.bind(this)
    }

    render() {
        return (
            <div className="game">
                {/* <div className="game-info">
                    <div className="instructions">
                        <h4>Rules</h4>
                        <p>You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you click on a square containing a bomb, you lose. If you manage to click all the squares (without clicking on any bombs) or flag all the mines, you win.</p>
                        <p>Clicking a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs. Use this information plus some guess work to avoid the bombs.</p>
                        <p>To open a square, point at the square and click on it. To mark a square you think is a bomb, point and right-click.</p>
                    </div>
                    <h4>Select a level a click "start"</h4>
                    <span className="info">Level:
                        <select id="level_select">
                            <option value="beginner"> Beginner </option>
                            <option value="intermediate"> Intermediate </option>
                            <option value="expert"> Expert </option>
                        </select>
                    </span>
                    <button onClick={this.handleGameStart}>Start</button>
                </div> */}


                <div className="game-info">
                    <span className="info">mines: {'??'}</span><br />
                    <span className="info">{  }</span>
                </div>


                <Board
                    mineCount={'??'}
                    board={this.state.board}
                    updateState={this.updateState}
                />
                
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));
