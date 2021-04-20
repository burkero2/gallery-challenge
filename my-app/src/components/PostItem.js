import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    const { name, title, description, image } = props.post
    return (
        <div className={css.SearchItem}>
            <div>
                <p><strong>Title:</strong> {title}</p>
                <p><strong>Artist:</strong> {name}</p>
            </div>
            <img src={image} alt = {title}/>
            <div>
                <p><strong>Artist:</strong> {description}</p>
            </div>
        </div>
    )
}

export default PostItem