import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from "../../services/todoService";

export const fetchTodoThunk= createAsyncThunk('todo/fetchTodo', async () => {
    return await fetchTodos();
})

export const addTodoThunk= createAsyncThunk('todo/addTodo', async (title) => {
    return  await addTodo(title);
    
})

export const toggleTodoThunk= createAsyncThunk('todo/toggleTodo', async (id) => {
    return  await toggleTodo(id);
    
})     

export const deleteTodoThunk= createAsyncThunk('todo/deleteTodo', async (id) => {
    return await deleteTodo(id);
     
})

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder)    => {
        builder
            .addCase(fetchTodoThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTodoThunk.fulfilled, (state, action) => {
                state.loading =false;
                state.items = action.payload
            })
            .addCase(fetchTodoThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = "Failed to fetch todo";
            })
            .addCase(addTodoThunk.fulfilled, (state, action) => {
                state.items.push(action.payload)
            })
            .addCase(toggleTodoThunk.fulfilled, (state, action) => {
                const index = state.items.findIndex((todo) => todo.id === action.payload.id)
                if (index !== -1) {
                    state.items[index].completed = action.payload.completed
                }
            })
            .addCase(deleteTodoThunk.fulfilled, (state, action) => {
                state.items = state.items.filter((todo) => todo.id !== action.payload.id)
            })
    }

})

export default todoSlice.reducer