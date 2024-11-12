import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export const Login = ({onSwitchRegister}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')    
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

  return (
    <form action="" className='auth_form' onSubmit={handleSubmit}>
        <input t
            type="email" 
            placeholder='Enter email' 
            onChange={(e) => setEmail(e.target.value)}
            className='auth_input'
            required
        /> 
        <input 
            type="password" 
            placeholder='Enter password' 
            onChange={(e) => setPassword(e.target.value)}
            className='auth_input'
        /> <br />
        <button type='submit' className='auth_button'>Login</button>
        <p className="auth_switch">
                Don't have an account? 
                <span className='auth_switchLink' onClick={onSwitchRegister}
                >Register</span>
            </p>
 
    </form>
  )
}
export default Login