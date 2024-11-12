import React, { useState }  from 'react'

export const TodoForm = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState('')    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (newTodo.trim()) {
            addTodo(newTodo)
            
        }
        setNewTodo('')
    }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder='Enter new table'
            className='input'
        />

        <button className='button' type='submit'>Add</button>

    </form>
  )
}


export default TodoForm