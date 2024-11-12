const API_URL= "https://jsonplaceholder.typicode.com/todos"

export const fetchTodos = async () => {
    const response = await fetch(API_URL)
    if(!response.ok) {
        throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.slice(0, 10)
}

export const addTodo = async (title) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            completed: false
        })
    })
    if(!response.ok) {
        throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
}

export const toggleTodo = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            completed: true
        })
    })
    if(!response.ok) {
        throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
}

export const deleteTodo = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    if(!response.ok) {
        throw new Error('Network response was not ok')
    }
    // gaperlu di return karena balikannya string kosong
    // const data = await response.json()
    // return data
}