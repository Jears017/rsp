import React from 'react'
import '../App.css'
import sun from '../assets/sunW.png'
import moon from '../assets/moonW.png'

export const Score = (props) => {


    const light = () => {
        props.bgClass('light')
    }

    const dark = () => {
        props.bgClass('dark')
    }

    return (
        <div className='score_parent_container'>
            <div className='score_main_container'>
                <div className='button-container'>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-success" onClick={light}><img className='star' src={sun} alt=""/></button>
                        <button type="button" className="btn btn-success" onClick={dark}><img className='stars' src={moon} alt=""/></button>
                    </div>
                </div>
                <div className='score_content_container'>
                    <div className={`score_text ${props.color}`}>Score:</div>
                    <div className='score_value'>{props.count}</div>
                </div>
            </div>
        </div>
    )
}