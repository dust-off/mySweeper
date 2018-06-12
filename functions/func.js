// // reveals the whole board
// function revealBoard() {
//     let updatedData = this.state.boardData;
//     updatedData.map((datarow) => {
//         datarow.map((dataitem) => {
//             dataitem.isRevealed = true;
//         });
//     });
//     this.setState({
//         boardData: updatedData
//     })
// }


// /* reveal logic for empty cell */
// function revealEmpty(x, y, data) {
//     let area = this.traverseBoard(x, y, data);
//     area.map(cell => {
//         if (!cell.isRevealed && (cell.isEmpty || !cell.isMine)) {
//             data[cell.x][cell.y].isRevealed = true;
//             if (cell.isEmpty) {
//                 this.revealEmpty(cell.x, cell.y, data);
//             }
//         }
//     });
//     return data;
// }


// // Handle User Events

// function handleCellClick(x, y) {
//     let win = false;

//     // check if revealed. return if true.
//     if (this.state.boardData[x][y].isRevealed) return null;

//     // check if mine. game over if true
//     if (this.state.boardData[x][y].isMine) {
//         this.revealBoard();
//         alert("game over");
//     }

//     let updatedData = this.state.boardData;
//     updatedData[x][y].isFlagged = false;
//     updatedData[x][y].isRevealed = true;

//     if (updatedData[x][y].isEmpty) {
//         updatedData = this.revealEmpty(x, y, updatedData);
//     }

//     if (this.getHidden(updatedData).length === this.props.mines) {
//         win = true;
//         this.revealBoard();
//         alert("You Win");
//     }

//     this.setState({
//         boardData: updatedData,
//         mineCount: this.props.mines - this.getFlags(updatedData).length,
//         gameWon: win,
//     });
// }




// function _handleContextMenu(e, x, y) {
//     e.preventDefault();
//     let updatedData = this.state.boardData;
//     let mines = this.state.mineCount;
//     let win = false;

//     // check if already revealed
//     if (updatedData[x][y].isRevealed) return;

//     if (updatedData[x][y].isFlagged) {
//         updatedData[x][y].isFlagged = false;
//         mines++;
//     } else {
//         updatedData[x][y].isFlagged = true;
//         mines--;
//     }

//     if (mines === 0) {
//         const mineArray = this.getMines(updatedData);
//         const FlagArray = this.getFlags(updatedData);
//         win = (JSON.stringify(mineArray) === JSON.stringify(FlagArray));
//         if (win) {
//             this.revealBoard();
//             alert("You Win");
//         }
//     }

//     this.setState({
//         boardData: updatedData,
//         mineCount: mines,
//         gameWon: win,
//     });
// }


// // export function handleGameStart() {
// //     let difficulty = this.state.difficulty;
// //     if (difficulty.value === "beginner") {
// //         this.setState({
// //             height: 8,
// //             width: 8,
// //             mines: 10,
// //         });
// //     }
// //     if (difficulty.value === "intermediate") {
// //         this.setState({
// //             height: 12,
// //             width: 12,
// //             mines: 20,
// //         });
// //     }
// //     if (difficulty.value === "expert") {
// //         this.setState({
// //             height: 16,
// //             width: 16,
// //             mines: 40,
// //         });
// //     }
// // }

// // // get mines
// // const getMines = (data) => {
// //     let mineArray = [];

// //     data.map(datarow => {
// //         datarow.map((dataitem) => {
// //             if (dataitem.isMine) {
// //                 mineArray.push(dataitem);
// //             }
// //         });
// //     });

// //     return mineArray;
// // }

// // // get Flags
// // const getFlags = (data) => {
// //     let mineArray = [];

// //     data.map(datarow => {
// //         datarow.map((dataitem) => {
// //             if (dataitem.isFlagged) {
// //                 mineArray.push(dataitem);
// //             }
// //         });
// //     });

// //     return mineArray;
// // }

// // // get Hidden cells
// // const getHidden = (data) => {
// //     let mineArray = [];

// //     data.map(datarow => {
// //         datarow.map((dataitem) => {
// //             if (!dataitem.isRevealed) {
// //                 mineArray.push(dataitem);
// //             }
// //         });
// //     });

// //     return mineArray;
// // }

// // // get random number given a dimension
// // function getRandomNumber(dimension) {
// //     // return Math.floor(Math.random() * dimension);
// //     return Math.floor((Math.random() * 1000) + 1) % dimension;
// // }

// // // Gets initial board data
// // function initBoardData(height, width, mines) {
// //     let data = [];

// //     for (let i = 0; i < height; i++) {
// //         data.push([]);
// //         for (let j = 0; j < width; j++) {
// //             data[i][j] = {
// //                 x: i,
// //                 y: j,
// //                 isMine: false,
// //                 neighbour: 0,
// //                 isRevealed: false,
// //                 isEmpty: false,
// //                 isFlagged: false,
// //             };
// //         }
// //     }
// //     data = this.plantMines(data, height, width, mines);
// //     data = this.getNeighbours(data, height, width);
// //     console.log(data);
// //     return data;
// // }

// // // plant mines on the board
// // function plantMines(data, height, width, mines) {
// //     let randomx, randomy, minesPlanted = 0;

// //     while (minesPlanted < mines) {
// //         randomx = this.getRandomNumber(width);
// //         randomy = this.getRandomNumber(height);
// //         if (!(data[randomx][randomy].isMine)) {
// //             data[randomx][randomy].isMine = true;
// //             minesPlanted++;
// //         }
// //     }

// //     return (data);
// // }

// // // get number of neighbouring mines for each board cell
// // function getNeighbours(data, height, width) {
// //     let updatedData = data, index = 0;

// //     for (let i = 0; i < height; i++) {
// //         for (let j = 0; j < width; j++) {
// //             if (data[i][j].isMine !== true) {
// //                 let mine = 0;
// //                 const area = this.traverseBoard(data[i][j].x, data[i][j].y, data);
// //                 area.map(value => {
// //                     if (value.isMine) {
// //                         mine++;
// //                     }
// //                 });
// //                 if (mine === 0) {
// //                     updatedData[i][j].isEmpty = true;
// //                 }
// //                 updatedData[i][j].neighbour = mine;
// //             }
// //         }
// //     }

// //     return (updatedData);
// // };

// // // looks for neighbouring cells and returns them
// // function traverseBoard(x, y, data) {
// //     const el = [];

// //     //up
// //     if (x > 0) {
// //         el.push(data[x - 1][y]);
// //     }

// //     //down
// //     if (x < this.props.height - 1) {
// //         el.push(data[x + 1][y]);
// //     }

// //     //left
// //     if (y > 0) {
// //         el.push(data[x][y - 1]);
// //     }

// //     //right
// //     if (y < this.props.width - 1) {
// //         el.push(data[x][y + 1]);
// //     }

// //     // top left
// //     if (x > 0 && y > 0) {
// //         el.push(data[x - 1][y - 1]);
// //     }

// //     // top right
// //     if (x > 0 && y < this.props.width - 1) {
// //         el.push(data[x - 1][y + 1]);
// //     }

// //     // bottom right
// //     if (x < this.props.height - 1 && y < this.props.width - 1) {
// //         el.push(data[x + 1][y + 1]);
// //     }

// //     // bottom left
// //     if (x < this.props.height - 1 && y > 0) {
// //         el.push(data[x + 1][y - 1]);
// //     }

// //     return el;
// // }

