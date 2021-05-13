import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from "../posts.json"
import Loader from "./Loader"

export class ComponentLifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded: false,
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoaded: true,
            })
        }, 2000)
    }

    render() {
        return (
            <div className={css.Content}>
                
                <div className = {css.TitleBar}> 
                    <h1>My Photos</h1>
                    
                </div>
                <div className={css.SearchResults}>
                    { this.state.isLoaded ? (
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
                    ):(
                        <Loader />
                    )}
                </div>
            </div>
        )
    }
}

export default ComponentLifecycle
