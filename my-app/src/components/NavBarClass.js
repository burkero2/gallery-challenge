import React, { Component } from 'react'
import css from './css/NavBarClass.module.css'

export class NavBarClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello, guest!",
            buttonText: "log in",
        }
    }
    handleLogIn = () => {
        this.setState((prevState) => ({
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "log in" ? "log out" : "log in"
        }))
    }
    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={this.handleLogIn}>
                        {this.state.buttonText}
                    </button>
                </div>
            </div>
        )
    }
}

export default NavBarClass
