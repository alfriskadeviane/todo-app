import React, {useEffect, useState} from 'react'
import Register from '../components/Register' 
import Login from '../components/Login'
import { Navigate, useNavigate } from 'react-router-dom'

export const AuthPage = () => {
    const [isActive, setIsActive] = useState(true);
    const navigate =useNavigate()

    useEffect(() => {   
        const storeAuthenticated = localStorage.getItem('isAuthenticated')
        console.log("auth",storeAuthenticated)
        if(storeAuthenticated) {
           navigate('/')
        } 
    }, [])


  return (
    <div className='auth_container'>
        {isActive ? <Login onSwitchRegister={() => setIsActive(!isActive)}/> 
        : <Register onSwitchRegister={() => setIsActive(isActive)}/>
        
        }


    </div>
  )
}

export default AuthPage
