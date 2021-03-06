import { winCheck, finalBoard, unmaskCascade, revealBoard, getCount } from './logic'

export const initStore = {
    difficulty: 'beginner',
    board: finalBoard(8, 12),
    players: { player1: { name: 'Genero', score: 0 } },
    gameState: {win: null, flags: 0, revealed: 0, mines: 1},
    size: 8,
    mines: 12,
};

export function updateState(update) {
    let nextState = Object.assign({}, this.state)

    const cell = update.cell || {}
    const { row, col, isFlagged, isMine, isRevealed } = cell

    switch (update.type) {
        case "RESIZE":
            console.log('RESIZE', update)
            const { size, mines } = nextState;
            nextState['board'] = finalBoard(size, mines)
            nextState['gameState'] = {win: null, flags: 0, revealed: 0, mines}
            break;
        case 'SELECT_SIZE':
            console.log('SELECT_SIZE', update)
            nextState.size = update.size;
            nextState.mines = update.mines;
            break;
        case "MOVE_CLICK":
            if (isRevealed) return;
            if (nextState['gameState']['win'] !== null) return;
            
            nextState['board'][row][col]['isRevealed'] = true;

            if (update.cell.isFlagged) {
                update.cell.isFlaseFlag = true;
                update.cell.isFlagged = false;
            }

            if (isMine) {
                nextState['gameState']['win'] = false
                revealBoard(nextState['board'])
                break;
            }

            const didYouWin = winCheck(nextState['board'])
            nextState['gameState'] = {
                win: null,
                flags: didYouWin.flags.length,
                mines: didYouWin.mines.length,
                revealed: didYouWin.revealed.length,
            }
            if (didYouWin.done) {
                revealBoard(nextState['board'])
                nextState['gameState']['win'] = true
            } else {
                unmaskCascade([row, col], nextState['board'])

                const newCount = getCount.revealed(nextState['board']);
                const size = nextState['board'].length * nextState['board'].length

                if (newCount.length + didYouWin.mines.length === size) {
                    revealBoard(nextState['board'], true)
                    nextState['gameState']['win'] = true                 
                }
            }

            break;
        case "FLAG_CLICK":
            if (nextState['gameState']['win'] !== null) return;
            nextState['board'][row][col]['isFlagged'] = !isFlagged;

            const isGameOver = winCheck(nextState['board'])
            nextState['gameState'] = {
                win: null,
                flags: isGameOver.flags.length,
                mines: isGameOver.mines.length,
                revealed: isGameOver.revealed.length,
            }
            if (isGameOver.done) {
                revealBoard(nextState['board'])
                nextState['gameState']['win'] = true
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
