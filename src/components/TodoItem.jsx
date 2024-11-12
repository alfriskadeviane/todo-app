import React from 'react'

export const TodoItem = ({todo, toggleTodo, deleteTodo}) => {
  return (
    <>
        {/* <div>TodoItem</div> */}
        <li className='todoItem'>
            <span 
                className={'todolist ${todo.completed ? "completed":""}'}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.title}

            </span>
            <button className='deleteButton' onClick={() => deleteTodo(todo.id)}>delete</button>
        </li>
    
    </>

  )
}

export default TodoItem