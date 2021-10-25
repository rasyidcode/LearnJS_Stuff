import { useState } from "react"

const TodoItem = ({ item, onDelete, onUpdate }) => {

    const [toggleUpdate, setToggleUpdate] = useState(false)
    const [todoName, setTodoName] = useState(item.text)

    const handleUpdating = () => {
        setToggleUpdate(true)
    }

    const handleSubmitClick = (e) => {
        e.preventDefault()

        if (!todoName) {
            setToggleUpdate(false)
            return
        }

        onUpdate(item.id, todoName)
        setToggleUpdate(false)
    }

    return (
        <>
            {
                !toggleUpdate ?
                    <li style={itemStyle}>
                        <p>{item.text}</p>
                        <div>
                            <span onClick={handleUpdating} style={{
                                backgroundColor: 'orange',
                                padding: '3px',
                                cursor: 'pointer'
                            }}>U</span>
                            <span onClick={() => onDelete(item.id)} style={{
                                backgroundColor: 'red',
                                padding: '3px',
                                cursor: 'pointer'
                            }}>D</span>
                        </div>
                    </li>
                    :
                    <li style={itemStyle}>
                        <input
                            type='text'
                            onChange={(e) => setTodoName(e.target.value)}
                            value={todoName} />
                        <button onClick={handleSubmitClick}>Edit</button>
                    </li>
            }
        </>
    )
}

const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

export default TodoItem
