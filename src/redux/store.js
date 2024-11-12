import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./slices/todoSlice"

export const store = configureStore({
    reducer: {
        todos:todoreducer // todos harus sama dengan naming raducer yang dibuat di todoSlice.js
    }
})