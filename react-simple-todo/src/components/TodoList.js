import TodoItem from "./TodoItem"

const TodoList = ({ items, onUpdate, onDelete }) => {
    return (
        <ul style={{ padding: 0, listStyle: 'none' }}>
            {items.map((item) => (
                <TodoItem key={item.id} item={item} onDelete={onDelete} onUpdate={onUpdate} />
            ))}
        </ul>
    )
}

export default TodoList