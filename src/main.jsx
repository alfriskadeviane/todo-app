import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TodoPage from './pages/TodoPage.jsx'
import Login from './components/Login.jsx'
import CountPage from './pages/CountPage.jsx'
import AuthPage from './pages/AuthPage.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { AuthProvider } from './context/AuthContext.jsx'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element:
        <ProtectedRoute>
          <TodoPage />
        </ProtectedRoute>
      },
      {
        path: '/count',
        element: <CountPage />
      }
    ]
  },      
  {
    path: '/login',
    element: <AuthPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
       <RouterProvider router={router} />  
    </AuthProvider>
    </Provider>
  </StrictMode>,
)
