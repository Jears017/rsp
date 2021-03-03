import React from 'react'
import {Game} from "./Play";
import {Redirect} from "react-router-dom";


export const PlayContainer = (props) => {
    return(
        <>
            {props.userStep ?<Game data={{...props}}/>:<Redirect to='/main'/>}
        </>
    )
}