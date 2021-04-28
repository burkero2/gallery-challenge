import React, { Component } from 'react'
import {posts} from "../posts.json"
import css from './css/Content.module.css'
import PostItem from './PostItem.js'
import Loader from './Loader.js';

export class Content extends Component {
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
                {/* Test post.json file: {JSON.stringify(posts)} */}
                
                <div className = {css.TitleBar}> 
                    <h1>My Photos</h1>
                </div>

                {/* Stage 3: Creating your PostItem within Content.js */}
                {/* <div className={css.SearchResults}>
                {posts.map(post => {
                    return(
                        <div className={css.SearchItem} key = {post.title}>
                            <p><strong>Title:</strong> {post.title}</p>
                            <p><strong>Artist:</strong> {post.name}</p>
                            <img src={post.image} alt = {post.title}/>
                            <p><strong>Description:</strong> {post.description}</p>
                        </div>
                    )})}
                </div> */}

                {/* Stage 4 & 5: Using a Child Component for PostChild, and conditionally rendering it based on the state isLoaded */}
                <div className={css.SearchResults}>

                    {this.state.isLoaded ? (
                        posts.map(post => {
                            return(
                                <PostItem key = {post.title} post = {post} />
                            )}
                        )
                    ) 
                    : (
                        <Loader />
                    )}
                </div>
                
            </div>
        )
    }
}

export default Content
