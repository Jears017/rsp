import React, {useEffect, useState} from 'react'
import './App.css';
import {Main} from "./components/Main";
import useSound from "use-sound";
import sound from "./assets/a30aa53e7ecd230.mp3";


const App = () => {
    const [play] = useSound(sound);
    const [color, setColor] = useState( '')
    const bgClass = (color) => {
        if( color === 'dark'){
            window.localStorage.setItem('color','dark')
            setColor(color)
        } else {
            window.localStorage.setItem('color','light')
            setColor(color)
        }

    }


    return (
        <div className={`App ${!localStorage.color ? 'light': localStorage.color}`}>
            <Main play={play} bgClass={bgClass}/>
        </div>
    );
}

export default App;
