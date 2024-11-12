import React, {useState, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'


export const Header = () => {
  const {logout} = useContext(AuthContext)

  const handleLogout =  async() => {
    await logout()
  }
  return (
    <header className='header'>

        <button onClick={handleLogout}>Logout</button>

    </header>
  )
}

export default Header