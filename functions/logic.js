export function unMask(cords, grid) {
    let check = [cords]
    while (check.length > 0) {
        let next = check.shift();
        let adjMines = 0;

        [[0, -1], [0, 1], [-1, 0], [1, 0]].forEach(delta => {
            let row = next[0] + delta[0]
            let col = next[1] + delta[1]

            if (Math.min(row, col) >= 0 && Math.max(row, col) <= grid[0].length - 1) {
                if (grid[row][col] === null) {
                    check.push([row, col])
                } else if (grid[row][col] === "X") {
                    adjMines++
                }
            }
        });
        [[-1, -1], [-1, 1], [1, -1], [1, 1]].forEach(delta => {
            let row = next[0] + delta[0]
            let col = next[1] + delta[1]

            if (Math.min(row, col) >= 0 && Math.max(row, col) <= grid[0].length - 1) {
                if (grid[row][col] === "X") {
                    adjMines++
                }
            }
        })
        grid[next[0]][next[1]] = adjMines;
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

const makeMatrix = (size, fill = null) => {
    return Array.from({ length: size }, () => new Array(size).fill(fill))
}

const populateBoard = (matrix, count) => {
    const size = matrix[0].length
    let fakeArray = [];
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            fakeArray.push([i,j])
        }
    }
    fakeArray = shuffle(fakeArray)

    for (let i = 0; i < count; i++) {
        matrix[fakeArray[i][0]][fakeArray[i][1]] = "X"
    }

    return matrix
}

export function finalBoard(size, count = 0, fill = null) {
    let board = makeMatrix(size, fill)
    return populateBoard(board, count)
}