import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {Header} from "./features/header/Header";
import {Players} from "./features/players/Players";
import {createBrowserRouter} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello world!</div>,
    },
    {
        path: '/login',
        // element: <Login/>,

    },
    {
        path: '/players',
        element: <Players/>
    },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header/>
    <App />
  </React.StrictMode>,
)
