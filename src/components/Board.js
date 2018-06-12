import React from 'react'
import Row from './Row'

export default function Board({ updateState, board, name }) {
    return (
        <div>
        <div className="Board-info">
        Name:
        Mines:
        </div>
            <div className="Board">
                {board.map((row, index) => {
                    return (
                        <Row
                            row={row}
                            key={`row${index}`}
                            rowIndex={index}
                            updateState={updateState}
                            name={name}
                        />
                    )
                })}
            </div>
        </div>
    )
}