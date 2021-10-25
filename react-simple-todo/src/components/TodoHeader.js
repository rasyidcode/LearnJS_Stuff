import React from 'react'

const TodoHeader = ({ onClear }) => {
    return (
        <div style={Style}>
            <h3>TODO</h3>
            <button onClick={onClear}>Clear</button>
        </div>
    )
}

const Style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

export default TodoHeader
