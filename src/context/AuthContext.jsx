import { useEffect, useState } from "react"
import { createContext } from "react"
const API_URL ='http://localhost:3000/users'

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const [user, setUser] = useState(null);

    useEffect(() => {   
        const storeAuthenticated = localStorage.getItem('isAuthenticated')
        console.log("auth",storeAuthenticated)
        if(storeAuthenticated) {
            setIsAuthenticated(true)
        }   
    }, [])


    const login = async (email, password) => {
        try {
            const response = await fetch(API_URL)
            const users = await response.json()
            const user = users.find((user) => user.email === email && user.password === password)
            console.log(user)
            if(user) {  
                setIsAuthenticated(true)
                localStorage.setItem('isAuthenticated', 'true') 
                alert ('Login success')    
                return {success: true, user}
            }
           
        } catch (error) {
            console.log(error)
            alert(error.message)
            return {success: false, message: 'Error logging in'}    
        }
    }   

    const logout = () => {
        
        localStorage.removeItem('isAuthenticated')
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
    
}