import { useState } from 'react'
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'

const Todo = () => {
    const [items, setItems] = useState([])
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!text.length) {
            return
        }

        const newItem = {
            id: Date.now(),
            text: text
        }

        setItems(items.concat(newItem))
        setText('')
    }

    const handleClear = () => {
        setItems([])
    }

    const handleUpdate = (id, updatedTodoName) => {
        setItems(items.map((item) => item.id === id ? { ...item, text: updatedTodoName } : item))
    }

    const handleDelete = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }

    return (
        <div style={todoContainerStyle}>
            <TodoHeader onClear={handleClear} />

            { 
                items.length > 0 ? 
                <TodoList 
                    items={items} 
                    onDelete={handleDelete} 
                    onUpdate={handleUpdate} /> : 
                <p>No Todos.</p> 
            }

            <form style={formAddStyle} onSubmit={handleSubmit}>
                <input placeholder='Add new todo' onChange={(e) => { setText(e.target.value) }} value={text} />
                <button>Add #{items.length + 1}</button>
            </form>

        </div>
    )
}

const todoContainerStyle = {
    width: '250px',
    padding: '16px',
    border: '1px solid #cecece'
}

const formAddStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}

export default Todo