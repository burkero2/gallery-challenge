import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from "../posts.json"
import PostItem from './PostItem.js'
import Loader from './Loader.js';

export class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded: false,
            posts: [], 
        }
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }


    handleChange = (event) => {
        const name = event.target.value
        console.log(name);
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts,
        })
    }

    render() {
        return (
            <div className={css.Content}>
                
                <div className = {css.TitleBar}> 
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor = "searchInput">Search: </label>
                        <input
                            onChange={(e) => this.handleChange(e)}
                            type="text"
                            size="20"
                            id = "searchInput"
                            placeholder="By Author"
                        />
                    </form> 
                </div>
                
                <h4>posts found: {this.state.posts.length}</h4>

                <div className={css.SearchResults}>

                    {this.state.isLoaded ? (
                        this.state.posts.map(post => {
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
