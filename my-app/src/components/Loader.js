import React from 'react'
import css from './css/Loader.module.css'

function Loader() {
    return (
        <div>
            <div className={css.Loader} />
            <p>Loading...</p>
        </div>
    )
}

export default Loader