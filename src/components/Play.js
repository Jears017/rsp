import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import rock from '../assets/rock-paper-scissors-296854_1280.png'
import scissor from '../assets/rock-paper-scissors-296853_1280.png'
import paper from '../assets/rock-paper-scissors-296855_1280.png'
import '../App.css'
import useSound from 'use-sound';
import sound from '../assets/salamisound-3834747-alarm-electric-alarm-clock.mp3'

export const Game = (props) => {
    const [counter, setCounter] = useState(2);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
    const userStep = () => {
        switch (props.data.userStep) {
            case 'r':
                return rock
            case 's':
                return scissor
            case 'p':
                return paper
        }
    }

    const compStep = () => {
        switch (props.data.computerStep) {
            case 'r':
                return rock
            case 's':
                return scissor
            case 'p':
                return paper
        }
    }


    const [play] = useSound(sound);


    return (
        <div className='result_field'>
            <div className='play_container1'>
                <div className='ch'>
                    <div
                        className='userStep_text'>{!props.data.nick ? 'User' : props.data.nick} picked {props.data.userStep === 'r' ? 'Rock' : props.data.userStep === 's' ? 'Scissor' : 'Paper'}</div>
                    <div className='computerStep_text'>The Computer
                        picked {props.data.computerStep === 'r' ? 'Rock' : props.data.computerStep === 's' ? 'Scissor' : 'Paper'}</div>
                </div>
                <div className="loh">
                    <div className='steps'>
                        <div className='userStep_container'>
                        <span>
                            {props.data.userStep && <img className='img' src={userStep()}/>}
                        </span>
                        </div>
                        <div>
                            <div className='game_message'>{props.data.message}</div>
                            <div>{
                                props.data.message &&
                                <NavLink to='/main'><input type="button" className="btn btn-success" value='play again'
                                                           onClick={props.data.resetOnClick}/></NavLink>
                            }</div>
                        </div>
                        <div className='computerStep_container'>
                        <span>
                            {!props.data.computerStep ?
                                <div className='timer-container'><span className='timer-value'>{counter}</span></div> :
                                <img className='img' src={compStep()} alt=""/>}
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}