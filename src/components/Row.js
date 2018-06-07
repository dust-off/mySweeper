import React from 'react'
import Box from './Box'

export default function Row({ updateState, rowIndex, row, name }) {
    return (
        <div className="Row">
            {row.map((cell, index) => {
                return (
                    <Box
                        rowIndex={rowIndex}
                        colIndex={index}
                        updateState={updateState}
                        cell={cell}
                        key={`${cell.row}${cell.col}`}
                        name={name}
                    />
                )
            })}
        </div>
    )
}