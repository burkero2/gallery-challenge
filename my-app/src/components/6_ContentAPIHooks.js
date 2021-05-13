import React, { Component, useState, useEffect } from 'react'
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI.js'
import Loader from './Loader.js';
import axios from 'axios';
import API_KEY from '../secrets';

function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState([])
    const [savedPosts, setSavedPosts] = useState([])

    useEffect(() => {
        fetchImages()
    }, [])

    const fetchImages = async () => {
        console.log("Hello");
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);

        
        setIsLoaded(true)
        setPosts(response.data.hits)
        setSavedPosts(response.data.hits)
    }

    const handleChange = (event) => {
        const name = event.target.value
        const filteredPosts = savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name)
        })
        setPosts(filteredPosts)
    }

    return (
        <div className={css.Content}>

            <div className = {css.TitleBar}> 
                <h1>My Photos</h1>
                <form>
                    <label htmlFor = "searchInput">Search: </label>
                    <input
                        onChange={(e) => handleChange(e)}
                        type="text"
                        size="20"
                        id = "searchInput"
                        placeholder="By Author"
                    />
                </form> 
            </div>

            <h4>posts found: {posts.length}</h4>

            <div className={css.SearchResults}>
                {isLoaded ? (
                    posts.map(post => {
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
export default ContentAPIHooks