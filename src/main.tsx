import React from 'react'
import ReactDOM, {createRoot} from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {Header} from "./layout/header/Header";
import {Players} from "./features/players/Players";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {Login} from "./features/auth/Login/Login";
import {Virgil} from "./features/players/player/Liverpool/Virgil";
import {store} from "./app/store";
import {Main} from "./layout/sections/main/Main";
import {Footer} from "./layout/footer/Footer";
import {PersonalInformation} from "./features/profile/personal-information";
import {Statistics} from "./features/statistics/Statistics";
import {GlobalStyles} from "./common/styles/GlobalStyles";
import {Theme} from "./common/styles/Theme";
import {SignUp} from "./features/auth/Sign-Up";
import {RecoveryPassword} from "./features/auth/RecoveryPassword";
import {NewPassword} from "./features/auth/NewPassword";
import {Teams} from "./features/teams/Teams";
import {FavoritePlayers} from "./features/players/favoritePlayers/favoritePlayers";


const router = createBrowserRouter([
    {
        path: '/',
        element: <div>I'm Uladzislau Paskanau. This is my site</div>,
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
        path: "/virgil",
        element: <Virgil/>
    },
    {
        path: 'main',
        element: <Main/>
    },
    {
        path: "profile",
        element: <PersonalInformation/>
    },
    {
        path: "statistics",
        element: <Statistics/>
    },
    {
        path:"registration",
        element: <SignUp/>
    },
    {
        path:"recoveryPassword",
        element: <RecoveryPassword/>
    },
    {
        path: "newPassword",
        element: <NewPassword/>
    },
    {
        path: "teams",
        element: <Teams/>
    },
    {
        path: "favoritePlayers",
        element: <FavoritePlayers/>
    },
])

const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyles/>
            {/*<Theme/>*/}
            <Header/>
            <App/>
        </BrowserRouter>
        <RouterProvider router={router}/>
        <Footer/>
    </Provider>
);

// ReactDOM.createRoot(document.getElementById('root')!).render(
// // root.render(
//   <React.StrictMode>
//       <BrowserRouter store={store}>
//       {/*<Provider>*/}
//       <Header/>
//     <App />
//       </BrowserRouter>
//       {/*</Provider>*/}
//       <RouterProvider router={router}/>
//   </React.StrictMode>,
// )
