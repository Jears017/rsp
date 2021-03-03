import React from 'react'
import {NavLink} from "react-router-dom";
import '../App.css'
import rock from '../assets/rock-paper-scissors-296854_1280.png'
import scissor from '../assets/rock-paper-scissors-296853_1280.png'
import paper from '../assets/rock-paper-scissors-296855_1280.png'


export const MainC = (props) => {
    return (
        <div className='kek'>
            <div className='game_field'>
                <div className='newGame_button_container'>
                    <div className='button' onClick={props.resetScore}><NavLink to='/'>new game</NavLink></div>
                </div>
                <div className='characters_container'>
                    <NavLink to='/game'>
                        <span onClick={props.play}>
                        <img className='rock img i' src={rock} alt="rock" name='r'
                             onClick={props.userStepOnClick}/>
                             </span>
                    </NavLink>
                    <NavLink to='/game'>
                        <span onClick={props.play}>
                        <img className='scissor img i' src={scissor} alt="scissor" name='s'
                             onClick={props.userStepOnClick}/>
                        </span>
                    </NavLink>
                    <NavLink to='/game'>
                        <span onClick={props.play}>
                        <img className='paper img i' src={paper} alt="paper" name='p'
                             onClick={props.userStepOnClick}/>
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}