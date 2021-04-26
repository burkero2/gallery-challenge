import React, { Component } from 'react'
import css from "./css/NavBarSimple.module.css"

export class NavBarSimple extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "guest!",
        }
    }

    handleClick = () => {
        this.setState((prevState) => ({
            name: prevState.name === "guest!" ? " back, user!" : "guest!",
        }), () => console.log(this.state.name))
    }
    
    render() {
        return (
            <div className = {css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>Welcome {this.state.name}</span>
                    <button onClick = {() => this.handleClick()}>Log In</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple
