import React, { Component } from 'react';
import css from './css/NavBarForm.module.css';
import NavBarChild from './NavBarChild.js';


// Changed to class component
export class NavBarForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true,
        }
    }


    handleClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn === false ? true : false,
        }), () => console.log(this.state.isLoggedIn));
    }

    render() {
        return (
            <div className = {css.NavBar}>
                {/* Css needs to change */}

                <h1>My Gallery</h1>

                
                {/* {this.state.isLoggedIn ? (
                        <button onClick = {() => this.handleClick()}>Login</button>
                    )
                    :(
                        // Simplified this form
                        <form>

                            <label htmlFor = "username">Username:</label>
                            <input type = "text" id = "username" placeholder = "username" />

                            <label htmlFor = "password">Password:</label>
                            <input type = "password" id = "password" placeholder = "password" />

                            <button  onClick = {() => this.handleClick()}>Submit</button>
                        </form>
                        
                    )} */}
                

                <NavBarChild 
                    isLoggedIn = {this.state.isLoggedIn} 
                    handleClick = {this.handleClick}
                    />
            </div>
        )
    }
}

export default NavBarForm
