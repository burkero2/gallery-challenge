import React, {useState} from 'react'
import css from './NavBarFunc.module.css'

function NavBarFunc() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        setUsername("");
        setPassword("");
    }
    const handleLogOut = () => {
        setIsLoggedIn(false);
    }
    return (
        <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <div>
                { isLoggedIn
                ? <button onClick={handleLogOut}>Sign In</button>
                : <>
                    <form id="login-form" onSubmit={(e) => handleLogIn(e)}>
                        <div>
                            <label htmlFor="username">Username: </label>
                            <input
                                onChange={e => setUsername(e.target.value)} value={username}
                                id="username" type="text" placeholder="username"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input
                                onChange={e => setPassword(e.target.value)} value={password}
                                id="password" type="password" placeholder="password"
                            />
                        </div>
                    </form>
                    <button type="submit" form="login-form">Submit</button>
                </>
                }
                
            </div>
        </div>
    )
}

export default NavBarFunc
