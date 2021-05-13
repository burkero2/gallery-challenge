import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from "../posts.json"

export class RenderLists extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }
    }

    render() {
        return (
            <div className={css.Content}>
                
                <div className = {css.TitleBar}> 
                    <h1>My Photos</h1>
                    
                </div>
                <div className={css.SearchResults}>
                    <div className={css.SearchItem}>
                        {savedPosts.map(post => {
                            return(
                                <div key = {post.title}>
                                    <p><strong>Title:</strong> {post.title}</p>
                                    <p><strong>Artist:</strong> {post.name}</p>
                                    <img src={post.image} alt = {post.title}/>
                                    <p><strong>Description:</strong> {post.description}</p>
                                </div>
                            )}
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default RenderLists
