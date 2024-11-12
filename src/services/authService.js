const API_URL ='http://localhost:3000/users'

export const login = async (email, password) => {
    try {
        const response = await fetch(API_URL)
        const users = await response.json()
        const user = users.find((user) => user.email === email && user.password === password)
        if(user) {
            localStorage.setItem('isAuthenticated', 'true')  
            return {success: true, user}
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return {success: false, message: 'Error logging in'}    
    }
}   