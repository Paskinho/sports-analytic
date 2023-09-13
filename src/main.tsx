import React from 'react'
import ReactDOM, {createRoot} from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {Header} from "./features/header/Header";
import {Players} from "./features/players/Players";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {Login} from "./features/auth/Login/Login";
import {Virgil} from "./features/players/player/Liverpool/Virgil";


const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello world!</div>,
    },
    {
        path: '/login',
        element: <Login/>,

    },
    {
        path: '/players',
        element: <Players/>
    },
    {
        path:"/Virgil",
        element: <Virgil/>
    }
])

const container = document.getElementById('root')!;
const root = createRoot(container);


ReactDOM.createRoot(document.getElementById('root')!).render(
// root.render(
  <React.StrictMode>
      <BrowserRouter>
      {/*<Provider>*/}
      <Header/>
    <App />
      </BrowserRouter>
      {/*</Provider>*/}
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
