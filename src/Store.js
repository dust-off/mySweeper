import { winCheck, finalBoard, unmaskCascade, revealBoard } from '../functions/logic'

export const initStore = {
    board: finalBoard(10, 1),
    players: {player1: { name: 'Genero', score: 0}},
    gameState: null,
}

export const state = {
    height: 8,
    width: 8,
    mines: 10,
    difficulty: 'beginner',
    board: finalBoard(8, 1),
    players: { player1: { name: 'Genero', score: 0 } },
};

export function updateState(update) {
    let nextState = Object.assign({}, this.state)

    const cell = update.cell || {}
    const { row, col, isFlagged, isMine, isRevealed } = cell

    switch (update.type) {
        case "MOVE_CLICK":
            if (isRevealed) return;
            update.cell.isRevealed = true;
            //nextState['board'][row][col]['isRevealed'] = true;
            if (update.cell.isFlagged) {
                update.cell.isFlaseFlag = true;
                update.cell.isFlagged = false;
            }

            if (isMine) {
                nextState['gameState'] = { win: false }
                revealBoard(nextState['board'])
                break;
            }

            const didYouWin = winCheck(nextState['board'])
            if (didYouWin) {
                revealBoard(nextState['board'])
                nextState['gameState'] = { win: true }
            } else {
                unmaskCascade([row, col], nextState['board'])
            }

            break;
        case "FLAG_CLICK":
            nextState['board'][row][col]['isFlagged'] = !isFlagged;

            const isGameOver = winCheck(nextState['board'])
            if (isGameOver) {
                revealBoard(nextState['board'])
                nextState['gameState'] = { win: true }
            }

            break;
        case "test":
            console.log('testing the no cell property thing', row, col)
            break;
        default:
            break;
    }
    this.setState(nextState)
}
