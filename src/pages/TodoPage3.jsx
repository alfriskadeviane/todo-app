import React, {useState, useEffect}from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { fetchTodos } from '../services/todoService';
import { addTodo } from '../services/todoService';
import { toggleTodo } from '../services/todoService';   
import { deleteTodo } from '../services/todoService';


export const TodoPage = () => {
    // State to hold the fetched data
    const [todos, setTodos] = useState([])

     // Fetch data when the component mounts
    // useEffect(() => {
    //     // URL for the online mock JSON data (e.g., JSONPlaceholder)
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((response) => {
    //         if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then((jsonData) => {
    //         setTodos(jsonData);
    //         // setLoading(false);
    //     })
    //     .catch((error) => {
    //         console.error('Error fetching data:', error);
    //         // setLoading(false);
    //     });
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTodos();
                setTodos(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        }
    , []); 

    // handle add todo without json file
    // const handleAddTodo = (title) => {
    //     const newTodo = {
    //         id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    //         title,
    //         complated: false
    //     }

    //     setTodos([...todos, newTodo])
    // }

    // handle add todo with json file
    const handleAddTodo = (title) => {
        const newTodo = {
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            title,
            complated: false
        }
        const addtodo = async () => {

            await addTodo(newTodo)
        }

        addtodo()

        setTodos([...todos, newTodo])
    }  

    // handle toggle todo without json file
    // const handleToggleTodo = (id) => {
    //     setTodos(
    //         todos.map((todo) => {
    //         todo.id === id ? {...todo, complated: !todo.complated} : todo
    //         }))     

    // }
    //handle toggle todo with json file
    const handleToggleTodo = async (id) => {
        const response = await toggleTodo(id)
        response()
        setTodos(
            todos.map((todo) => {
            todo.id === id ? {...todo, complated: !todo.complated} : todo
            }))
    }

    // const handleDeleteTodo = (id) => {
    //     setTodos(todos.filter((todo) => todo.id !== id))
    // }   
    // handle delete with json file
    const handleDeleteTodo = async (id) => {
        await deleteTodo(id)
        setTodos(todos.filter((todo) => todo.id !== id))
    }

  return (
    <div className='container'>
        <h1 className='header'> Todo Page</h1>
        <TodoForm addTodo={handleAddTodo}/>
        <TodoList todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo}/>
    </div>
  )
}


export default TodoPage