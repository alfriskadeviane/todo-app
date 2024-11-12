import React, {useState} from 'react'

export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')    
    return (
      <form action="" className='auth_form'>
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
          <button type='submit' className='auth_button'>Register</button>
      </form>
    )
}

export default Register