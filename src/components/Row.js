import React from 'react'
import Box from './Box'

export default function Row({ updateState, rowIndex, row, name }) {
    return (
        <div className="Row">
            {row.map((value, index) => {
                return (
                    <Box
                        rowIndex={rowIndex}
                        colIndex={index}
                        updateState={updateState}
                        value={value}
                        key={index}
                        name={name}
                    />
                )
            })}
        </div>
    )
}