import React, { useState, useEffect } from 'react'
import {savedPosts} from "../posts.json"
import css from './css/Content.module.css'
import PostItem from './PostItem.js'
import Loader from './Loader.js';


function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => { 
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, [])

    const handleChange = (event) => {
        const name = event.target.value
        console.log(name);
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        setFetchedPosts(filteredPosts);
    }

    return (
        <div className={css.Content}>
                {/* Test post.json file: {JSON.stringify(posts)} */}
                
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
                
                <h4>posts found: {fetchedPosts.length}</h4>

            
                <div className={css.SearchResults}>

                    {isLoaded ? (
                        // Change to this.state.posts once we add posts to the state
                        fetchedPosts.map(fetchedPost => {
                            return(
                                <PostItem key = {fetchedPost.title} post = {fetchedPost} />
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

export default ContentHooks
