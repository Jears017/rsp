import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {Main} from "./Main";
import useSound from "use-sound";
import sound from "../assets/a30aa53e7ecd230.mp3";


export const Menu = (props) => {
    const [nickname, setNick] = useState('')

    const setName = (e) => {
        let name = e.target.value
        setNick(name)
        props.setNickname(name)
    }

    const setNameOnClick = (e) => {
        e.preventDefault()
        setNick('')
    }


    return (
        <div className='menu-container'>
            <div>
                <form onSubmit={setNameOnClick}>
                    <div className="input-group mb-3">

                        <input type="text" className="form-control" placeholder="Enter nickname"
                               aria-label="Enter nickname" aria-describedby="button-addon2" value={nickname}
                               onChange={setName}/>
                    </div>
                </form>
                <div className='main-menu'>
                    <NavLink to='/main'>
                        <div onClick={() => {
                            localStorage.score = 0
                        }} className='menu-item'>Start
                        </div>
                    </NavLink>
                    <div className='menu-item'>Options</div>
                    <div className='menu-item'>Rules</div>
                </div>
            </div>

        </div>
    )
}