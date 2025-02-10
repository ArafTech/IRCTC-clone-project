import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'


export default function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children: [
        {index:true, element:<Home/>},
        {path:"/Login", element:<Login/>},
        {path:"/register", element:<Register/>}
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
