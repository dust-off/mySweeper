import React from 'react';

const getValue = (cell) => {
    if (!cell.isRevealed) {
        return cell.isFlagged ? "🚩" : null;
    }
    if (cell.isMine) {
        return "💣";
    }
    if (cell.numAdjMines === 0) {
        return cell.isFlagged ? "🚩" : null;
    }
    return cell.numAdjMines;
}

export default function Cell({ cell, cellClick, onRightClick, updateState }) {
    let className = "cell";
    className += cell.isRevealed ? "" : " hidden";
    className += cell.isMine ? " is-mine" : "";
    className += cell.isFlagged ? " is-flag" : "";
    className += cell.isRevealed && (cell.isFlagged || cell.isMine) ? " is-fail" : "";
    className += cell.isRevealed && cell.isFlagged && cell.isMine ? " is-pass" : "";

    return (
        <div
            className={className}
            onClick={cellClick}
            onContextMenu={onRightClick}
            >

        {getValue(cell)}
        </div>
    );
}
