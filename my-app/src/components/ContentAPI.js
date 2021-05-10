import React, { Component, useState, useEffect } from 'react'
import {posts} from "../posts.json"
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI.js'
import Loader from './Loader.js';
import axios from 'axios';
import API_KEY from '../secrets';

// Change import posts to import {importedPosts}
export class ContentAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            // Add posts when creating the search bar
            posts: [], 
        }
    }

    componentDidMount(){
        this.fetchImages();
    }

    // API BIT (CLASS)
    async fetchImages() {
        const { data } = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = data.hits

        // SAVE FETCHED POSTS to the class so that it can be referenced later
        this.savedPosts = fetchedPosts
        
        this.setState({
            isLoaded: true,
            posts: fetchedPosts
        })
    }

    handleChange = (event) => {
        const name = event.target.value
        console.log('name', name);
        const filteredPosts = this.savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts,
        })
    }

    render() {
        return (
            <div className={css.Content}>
                {/* Test post.json file: {JSON.stringify(posts)} */}
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
                                
                                <PostItemAPI key = {post.id} post = {post} />
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
export default ContentAPI

