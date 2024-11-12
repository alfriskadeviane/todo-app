import React from 'react'
import TodoItem from './TodoItem'

export const TodoList = ({todos, toggleTodo, deleteTodo}) => {
  return (
        <ul className='todoList'>
            {todos.map((todo) => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>

  )
}

export default TodoList