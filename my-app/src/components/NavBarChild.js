import React from 'react'

function NavBarChild(props) {

    return (
        <div>
            {props.isLoggedIn ? (
                    <button onClick = {() => props.handleClick()}>Login</button>
                )
                :(
                    // Simplified this form
                    <form>
                        <label htmlFor = "username">Username:</label>
                        <input type = "text" id = "username" placeholder = "username" />

                        <label htmlFor = "password">Password:</label>
                        <input type = "password" id = "password" placeholder = "password" />

                        <button  onClick = {() => props.handleClick()}>Submit</button>
                    </form>
                    
                )}
        </div>
    )
}

export default NavBarChild
