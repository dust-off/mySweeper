import React from 'react';
import Cell from './Cell';

export default function Board({ updateState, board }) {
    return (
        <div className="board">
            {board.map((row) => {
                return row.map((cell) => {
                    return (
                        <div key={cell.col * row.length + cell.row}>
                            <Cell
                                cellClick={() => {
                                    updateState({
                                        type: "MOVE_CLICK",
                                        cell,
                                    })
                                }}
                                onRightClick={(e) => {
                                    e.preventDefault()
                                    updateState({
                                        type: "FLAG_CLICK",
                                        cell,
                                    })
                                }}
                                updateState={updateState}
                                cell={cell}
                            />
                        {(row[row.length - 1] === cell) ? <div className="clear" /> : ""}
                    </div>);
            })
        })}
        </div>
    );
}