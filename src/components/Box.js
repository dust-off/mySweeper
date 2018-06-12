import React from 'react'

const getValue = (cell) => {

    // if (cell.isMine) {
    //     return <div>'X'</div>
    // }

    console.log(cell.isRevealed)
    if (!cell.isRevealed) {
        return cell.isFlagged ? <div style={{ background: 'blue' }}>"🚩"</div> : <div style={{background: 'blue'}}></div>
    }
    if (cell.isMine) {
        return "💣";
    }
    if (cell.numAdjMines === 0) {
        return <div style={{background:'green'}}></div>;
    }
    return <div style={{ background: 'green' }}>{cell.numAdjMines}</div>;
}

export default function Box({ updateState, rowIndex, colIndex, cell, name }) {
    return (
        <div
            className="Box"
            onClick={() => updateState({
                                type: "MOVE_CLICK",
                                rowIndex, colIndex
                            })}
            >
            <p>{getValue(cell)}</p>
        </div>
    )
}