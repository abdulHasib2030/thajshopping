import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

import router from './routes/Route.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <HelmetProvider>
       <RouterProvider router={router}/>
    </HelmetProvider>


    </>
  )
}

export default App
