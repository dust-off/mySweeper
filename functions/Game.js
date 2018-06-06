export class Game {
    constructor(size) {
        this._size = size
        this._board = Array.from({ length: size }, () => new Array(size).fill(null))
        this._pos = [0, 0]
        this.delta = {
            left: [0, -1],
            right: [0, 1],
            up: [-1, 0],
            down: [1, 0]
        }
    }
    look(dir) {
        let row = this._pos[0] + this.delta[dir][0]
        let col = this._pos[1] + this.delta[dir][1]
        if (Math.min(row, col) < 0) return undefined
        if (Math.max(row, col) >= this._size) return undefined
        return this._board[this._pos[0] + this.delta[dir][0]][this._pos[1] + this.delta[dir][1]]
    }
    move(dir) {
        if (this.look(dir) === undefined) return false;
        let row = this._pos[0] + this.delta[dir][0]
        let col = this._pos[1] + this.delta[dir][1]
        this._pos = [row, col]
        return this._board[row][col]
    }
    get pos() {
        return this._pos
    }
    get val() {
        return this._board[this._pos[0]][this._pos[1]]
    }
    valAt(cords) {
        return this._board[cords[0]][cords[1]]
    }
}

// var game1 = new Game(5)
// console.log(game1.move('up'))
// console.log(game1.move('up'))
// console.log(game1.move('right'))
// console.log(game1.move('right'))
// console.log(game1.move('right'))
// console.log(game1.move('right'))
// console.log(game1.move('right'))
// console.log(game1.pos)
// console.log(game1.valAt([2, 7]))
