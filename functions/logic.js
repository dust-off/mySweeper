export function unMask(cords, matrix) {
    let check = [matrix[cords[0]][cords[1]]]
    let visitMap = new Map()

    visitMap.set(check[0], true)

    while(check.length > 0) {
        let cell = check.shift()
        
        let slice = getAdjacent([cell.row, cell.col], matrix)
        
        slice.forEach(row => {
            row.forEach(value => {
                
                console.log('cell:', [cell.row, cell.col])
                console.log('isFlagged', value.isFlagged, 'isRevealed', value.isRevealed, 'numAdjMines', value.numAdjMines, 'isMine', value.isMine)
                if (!value.isFlagged && !value.isMine) {
                    value.isRevealed = true
                }
                // if (!value.isFlagged && !value.isRevealed && (!(value.numAdjMines > 0) || !value.isMine)) {
                //     value.isRevealed = true;
                //     if (!(value.numAdjMines > 0) && !visitMap.get(value)) {
                //         visitMap.set(value, true)
                //         check.push(value)
                //     }
                // }
            })
        })


        // if (!(cell.numAdjMines > 0)) {
        //     let slice = getAdjacent([cell.row, cell.col], matrix)
        //     slice.forEach(row => {
        //         row.forEach(col => {
        //             if (!visitMap.get(col)) {
        //                 visitMap.set(col, true)
                        
        //                 if (col.numAdjMines > 0) {
        //                     col.isRevealed = true;
        //                 } else {
        //                     check.push(col)
        //                 }
        //             }
        //         })
        //     })
        // } else if (!cell.isFlagged && !cell.isMine) {
        //     cell.isRevealed = true
        // }

    }
    return matrix;
}

const getAdjacent = ([x, y], matrix) => {
    const slice = [[], [], []];
    const size = matrix[0].length - 1

    // top left
    if (x > 0 && y > 0) {
        slice[0][0] = (matrix[x - 1][y - 1]);
    }

    // top center
    if (x > 0) {
        slice[0][1] = (matrix[x - 1][y]);
    }

    // top right
    if (x > 0 && y < size) {
        slice[0][2] = (matrix[x - 1][y + 1]);
    }

    // down
    if (x < size) {
        slice[2][1] = (matrix[x + 1][y]);
    }

    // left
    if (y > 0) {
        slice[1][0] = (matrix[x][y - 1]);
    }

    // center
    slice[1][1] = matrix[x][y]

    // right
    if (y < size) {
        slice[1][2] = (matrix[x][y + 1]);
    }

    // bottom right
    if (x < size && y < size) {
        slice[2][2] = (matrix[x + 1][y + 1]);
    }

    // bottom left
    if (x < size && y > 0) {
        slice[2][0] = (matrix[x + 1][y - 1]);
    }

    slice

    return slice;
}

const flatten = (matrix) => {
    let flat = []

    matrix.forEach(row => {
        row.forEach(cell => {
            flat.push(cell)
        })
    })
    return flat;

    // return matrix.reduce((sum, part) => {
    //     return sum.concat(part)
    // }, [])
}

const getCount = {
    all: (matrix, filter) => {
        let totalCount = 0;
        let fCount = 0;
        matrix.forEach(row => {
            row.forEach(square => {
                totalCount++;
                if (square[`is${filter}`]) {
                    fCount++;
                }
            })
        })
        return filter ? fCount : totalCount
    },
    mines: (matrix) => {
        return getCount.all(matrix, 'Mine')
    },
    flags: (matrix) => {
        return getCount.all(matrix, 'Flagged')
    },
    revealed: (matrix) => {
        return getCount.all(matrix, 'Revealed')
    }
}

export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const makeMatrix = (size, contents) => {
    // return Array.from({ length: size }, () => new Array(size).fill(contents()))
    let matrix = []
    for (let i = 0; i < size; i++) {
        matrix.push([])
        for (let j = 0; j < size; j++) {
            matrix[i][j] = contents ? contents(i, j) : {}
        }
    }
    return matrix;
}

const insertMines = (matrix, count) => {
    const size = matrix[0].length
    let shuffleCords = [];
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            shuffleCords.push([i,j])
        }
    }
    shuffleCords = shuffle(shuffleCords)

    for (let i = 0; i < count; i++) {
        matrix[shuffleCords[i][0]][shuffleCords[i][1]]['isMine'] = true
        matrix[shuffleCords[i][0]][shuffleCords[i][1]]['isFlagged'] = true
    }

    return matrix
}

const updateAdjMineCount = (matrix) => {
    let adj;
    matrix.forEach((row, i) => {
        row.forEach((square, j) => {
            adj = getAdjacent([i, j], matrix)
            let count = getCount.mines(adj)
            if (square.isMine) count--;
            square.numAdjMines = count;
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
    }
}