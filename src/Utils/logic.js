export function unmaskCascade(cords, board) {
    let { flat } = getAdjacent(cords, board, true);
    flat.map(cell => {
        if (!cell.isRevealed && (cell.isEmpty || !cell.isMine) && !cell.isFlagged) {
            board[cell.row][cell.col].isRevealed = true;
            if (cell.isEmpty) {
                unmaskCascade([cell.row, cell.col], board);
            }
        }
        return cell;
    });
    return board;
}

export function revealBoard(board, win) {
    board.map((row) => {
        row.map((cell) => {
            cell.isRevealed = true;
            if (win) {
                if (cell.isMine) cell.isFlagged = true;
            }
            return cell;
        });
        return row;
    });
    
    return board
}

export function winCheck(board) {
    const winState = {
        mines: getCount.mines(board),
        flags: getCount.flags(board),
        revealed: getCount.revealed(board),
        done: false,
    }
    
    if (JSON.stringify(winState.mines) === JSON.stringify(winState.flags)) {
        winState.done = true
    }
    return winState;
}

const getAdjacent = ([x, y], matrix, all = false) => {
    const slice = [[], [], []];
    const size = matrix[0].length - 1
    const cardinal = [];
    const flat = [];

    // top left
    if (x > 0 && y > 0) {
        let cell = matrix[x - 1][y - 1];
        slice[0][0] = cell;
        flat.push(cell)
    }

    // top center
    if (x > 0) {
        let cell = (matrix[x - 1][y])
        slice[0][1] = cell;
        flat.push(cell)
        cardinal.push(cell)
    }

    // top right
    if (x > 0 && y < size) {
        let cell = (matrix[x - 1][y + 1]);
        slice[0][2] = cell
        flat.push(cell)
    }

    // down
    if (x < size) {
        let cell = (matrix[x + 1][y]);
        slice[2][1] = cell;
        flat.push(cell)
        cardinal.push(cell)
    }

    // left
    if (y > 0) {
        let cell = (matrix[x][y - 1]);;
        slice[1][0] = cell;
        flat.push(cell)
        cardinal.push(cell)
    }

    // center
    slice[1][1] = matrix[x][y]

    // right
    if (y < size) {
        let cell = (matrix[x][y + 1]);
        slice[1][2] = cell;
        flat.push(cell)
        cardinal.push(cell)
    }

    // bottom right
    if (x < size && y < size) {
        let cell = (matrix[x + 1][y + 1]);
        slice[2][2] = cell;
        flat.push(cell)
    }

    // bottom left
    if (x < size && y > 0) {
        let cell = (matrix[x + 1][y - 1]);
        slice[2][0] = cell;
        flat.push(cell)
        cardinal.push(cell)
    }

    if (all) {
        return {
            slice,
            flat,
            cardinal
        }
    }

    return slice;
}

export function eachNumber(board) {
    return getCount.eachNumber(board)
}

const getCount = {
    all: (board, filter) => {
        let totalCount = 0;
        let fCount = [];
        board.forEach(row => {
            row.forEach(cell => {
                totalCount++;
                if (cell[`is${filter}`]) {
                    fCount.push(cell)
                }
            })
        })
        return filter ? fCount : totalCount
    },
    mines: (board) => {
        return getCount.all(board, 'Mine')
    },
    flags: (board) => {
        return getCount.all(board, 'Flagged')
    },
    revealed: (board) => {
        return getCount.all(board, 'Revealed')
    },
    eachNumber: (board) => {
        return {
            mines: getCount.all(board, 'Mine').length,
            flagged: getCount.all(board, 'Flagged').length,
            revealed: getCount.all(board, 'Revealed').length,
        }
    }
}

const _getCount = getCount;
export { _getCount as getCount };

export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const makeMatrix = (size, contents) => {
    let matrix = []
    for (let i = 0; i < size; i++) {
        matrix.push([])
        for (let j = 0; j < size; j++) {
            matrix[i][j] = contents ? contents(j, i) : {}
        }
    }
    return matrix;
}

const insertMines = (board, count) => {
    const size = board[0].length
    let shuffleCords = [];
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            shuffleCords.push([i,j])
        }
    }
    shuffleCords = shuffle(shuffleCords)

    for (let i = 0; i < count; i++) {
        board[shuffleCords[i][0]][shuffleCords[i][1]]['isMine'] = true
    }

    return board
}

const updateAdjMineCount = (board) => {
    board.forEach((row, i) => {
        row.forEach((cell, j) => {
            let adj = getAdjacent([i, j], board)
            let count = getCount.mines(adj).length
            if (cell.isMine) count--;
            cell.numAdjMines = count;
            if (count === 0 && !cell.isMine) cell.isEmpty = true;
        })
    })
}

export function finalBoard(size, count = 0, fill = makeSquareData) {
    let board = makeMatrix(size, fill)
    insertMines(board, count)
    updateAdjMineCount(board)

    return board
}

const makeSquareData = (col, row) => {
    return {
        col,
        row,
        isFlagged: false,
        isMine: false,
        isRevealed: false,
        numAdjMines: null,
        isEmpty: false,
        isFlaseFlag: false,
    }
}

// export const all = {
//     winCheck,
//     getAdjacent,
//     getCount,
//     shuffle,
//     makeMatrix,
//     insertMines,
//     updateAdjMineCount,
//     finalBoard,
//     makeSquareData,
// }