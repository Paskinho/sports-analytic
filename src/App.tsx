import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Players} from "./features/players/Players";

function App() {
    const [player, setPlayer] = useState(0)

    return (
        <>
            <div>
                <Players/>
            </div>

        </>
    )
}

export default App
