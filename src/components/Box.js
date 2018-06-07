import React from 'react'

const getValue = (cell) => {
    // return 3
    console.log(cell.isRevealed)
    if (!cell.isRevealed) {
        return cell.isFlagged ? "🚩" : '[?]';
    }
    if (cell.isMine) {
        return "💣";
    }
    if (cell.numAdjMines === 0) {
        return '[0]';
    }
    return cell.numAdjMines;
}

export default function Box({ updateState, rowIndex, colIndex, cell, name }) {
    return (
        <div
            className="Box"
            // className={`
            //                 Box 
            //                 ${cell.isFlagged ? 'flagged' : null} 
            //             `}
            onClick={() => updateState({
                                type: "MOVE_CLICK",
                                rowIndex, colIndex
                            })}
        >
            <p>{getValue(cell)}</p>
        </div>
    )
}