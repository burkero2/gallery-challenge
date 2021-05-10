import React from 'react'
import css from './css/PostItem.module.css';
function PostItem(props) {
    const { user, type, tags, webformatURL } = props.post
    return (
        <div className={css.SearchItem}>
            <p><strong>Artwork type:</strong> {type}</p>
            <p><strong>Artist:</strong> {user}</p>
            <img src={webformatURL} alt = {user}/>
            <p><strong>Tags:</strong> {tags}</p>
        </div>
    )
}
export default PostItem