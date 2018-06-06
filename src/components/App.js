import React from 'react'
import Board from './Board'

import { initStore, updateState } from '../Store'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = initStore
        this.updateState = updateState.bind(this)
    }
    render() {
        return (
            <div className="App">
                <h1>THAT is an app</h1>
                <Board
                    updateState={this.updateState}
                    board={this.state.board}
                    name={this.state.players.player1.name}
                />
            </div>
        )
    }
}