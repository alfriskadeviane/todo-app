import React,{useState} from 'react'
import Count from './components/Count'
import CountPage from './pages/CountPage'
import './App.css'
import TodoPage from './pages/TodoPage'
import TodoForm from './components/TodoForm'
import Header from './components/Header'
import {Outlet} from 'react-router-dom'


function App() {


  return (
    <>
    <div>
      <Header/>
      <Outlet/>
    </div>
      
    </>
  )
}

export default App
