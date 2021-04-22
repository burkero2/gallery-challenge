import React from 'react';
import css from './css/Sidebar.module.css';

const Sidebar = () =>  {
    return (
    <div className={css.sidebar}>
        <a href = "#" rel="noreferrer" target = "_blank" alt = "a link">My Photos</a>
        <a href = "#" rel="noreferrer" target = "_blank" alt = "a link">My Illustrations</a>
        <a href = "#" rel="noreferrer" target = "_blank" alt = "a link">My Paintings</a>
    </div>
    )
}

export default Sidebar;