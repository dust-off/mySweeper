import React from 'react'

export default function Box({ updateState, rowIndex, colIndex, value, name }) {
    return (
        <div
            className="Box"
            onClick={() => updateState({
                                type: "MOVE_CLICK",
                                rowIndex, colIndex
                            })}
        >
            <p>{value}</p>
        </div>
    )
}