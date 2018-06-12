import { unMask, winCheck, finalBoard } from '../functions/logic'

export const initStore = {
    board: finalBoard(10, 5),
    players: {player1: { name: 'Genero', score: 0}},
    gameState: null,
}

export function updateState(update) {
    let nextState = Object.assign({}, this.state)

    switch (update.type) {
        case "MOVE_CLICK":
            let isGameOver = winCheck([update.rowIndex, update.colIndex], nextState)

            if(!isGameOver) unMask([update.rowIndex, update.colIndex], nextState['board'])

            console.log('nextState', nextState)
            break;
        case "TEST":
            nextState['players']['player1']['name'] = 'Dustin'
            // this.setState({ players: nextState.players})
            break;
        default:
            break;
    }
    this.setState(nextState)
}
