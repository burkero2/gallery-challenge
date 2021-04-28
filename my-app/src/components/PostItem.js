import React from 'react'
import css from './css/PostItem.module.css';

function PostItem(props) {
    const { name, title, description, image } = props.post;
    return (
        <div className={css.SearchItem}>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Artist:</strong> {name}</p>
            <img src={image} alt = {title}/>
            <p><strong>Description:</strong> {description}</p>
        </div>
    )
}

export default PostItem
