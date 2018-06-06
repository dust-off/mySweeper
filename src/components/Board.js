import React from 'react'
import Row from './Row'

export default function Board({ updateState, board, name }) {
    return (
        <div className="Board">
            {board.map((row, index) => {
                return (
                    <Row
                        row={row}
                        key={index}
                        rowIndex={index}
                        updateState={updateState}
                        name={name}
                    />
                )
            })}
        </div>
    )
}