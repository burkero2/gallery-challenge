import React, { Component } from 'react'
import css from "./css/NavBarSimple.module.css"

export class NavBarSimple extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello, guest!",
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
        }), () => console.log(this.state.message))
    }
    
    render() {
        return (
            <div className = {css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick = {() => this.handleClick()}>Log In</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple
