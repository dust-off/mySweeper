import React from 'react';

const getValue = (cell) => {
    if (!cell.isRevealed) {
        return cell.isFlagged ? "🚩" : null;
    }
    if (cell.isMine) {
        return "💣";
    }
    if (cell.numAdjMines === 0) {
        return cell.isFalseFlagged ? "🚩" : null;
    }
    return cell.numAdjMines;
}

export default function Cell({ cell, cellClick, onRightClick }) {
    let className = "cell";
    className += cell.isRevealed ? "" : " hidden";
    className += cell.isMine ? " is-mine" : "";
    className += cell.isFlagged || cell.isFalseFlagged ? " is-flag" : "";

    return (
        <div
            className="cell"
            onClick={cellClick}
            className={className}
            onContextMenu={onRightClick}>

        {getValue(cell)}
        </div>
    );
}
