import React, {useState} from 'react'
import {data} from "../data/data";
import {Game} from "./Play";
import {NavLink, Route, Redirect} from "react-router-dom";
import {MainC} from "./MainC";
import {Score} from "./Score";
import {Menu} from "./Menu";
import {Footer} from "./Footer";
import {PlayContainer} from "./PlayContainer";
import sound from '../assets/a30aa53e7ecd230.mp3'


export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userStep: '',
            computerStep: '',
            message: '',
            count: localStorage.score,
            nick: '',
            lightColor: 'light'
        }

        this.audio = new Audio(sound)
    }

    getCopmuterStep = (data) => {
        let rand = Math.floor(Math.random() * 3)
        setTimeout(() => {
            this.setState({computerStep: data[rand]})
        }, 2000)
    }

    game = () => {
        const {userStep, computerStep} = this.state
        let combine = userStep + computerStep
        switch (combine) {
            case 'rr':
            case 'ss':
            case 'pp':
                return 'draw'
                break;
            case 'rs':
            case 'sp':
            case 'pr':

                this.setState((prevState) => {
                    return {
                        count: Number(prevState.count) + 1
                    }
                })
                this.audio.play()
                return 'You win!'
                break;
            case 'sr':
            case 'ps':
            case 'rp':
                this.setState((prevState) => {
                    return {
                        count: prevState.count - 1
                    }
                })
                this.audio.play()
                return 'You lose!'
                break;
        }
    }

    userStepOnClick = (e) => {
        this.setState({userStep: e.target.name})
        this.getCopmuterStep(data)
        setTimeout(() => {
            this.setState({message: this.game()})
        }, 2000)

    }

    resetOnClick = () => {
        this.setState({userStep: '', computerStep: '', message: '',})
    }

    resetScore = (e) => {
        const {count} = this.state
        e.preventDefault()
        this.setState({count: 0, nick: ''})
    }

    setNickname = (nickname) => {
        this.setState({nick: nickname})
    }



    render() {
        const {count, userStep, computerStep, message} = this.state
        localStorage.score = this.state.count;
        return (
            <div>
                <Route path='/main' render={() => <Score color={this.props.color} bgClass={this.props.bgClass} count={count}/>}/>
                <Route path='/game' render={() => <Score count={count}/>}/>

                <Route path='/main' render={() => <MainC play={this.props.play} resetScore={this.resetScore}
                                                         userStepOnClick={this.userStepOnClick}/>}/>

                <Route path='/game' render={() => (
                    <PlayContainer userStepOnClick={this.userStepOnClick}
                                   resetOnClick={this.resetOnClick}
                                   count={count}
                                   userStep={userStep}
                                   computerStep={computerStep}
                                   message={message}
                                   nick={this.state.nick}
                    />)}/>
                <Route exact path='/' render={() => <Menu nickname={this.state.nick} setNickname={this.setNickname}/>}/>
                <Footer/>
            </div>


        )
    }
}

