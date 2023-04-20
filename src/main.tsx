import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GlobalStyles } from 'twin.macro'
import { RouterProvider } from 'react-router-dom'
import { router } from './config/routes/router'
import { Navbar } from './shared/components/navbar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Navbar/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
