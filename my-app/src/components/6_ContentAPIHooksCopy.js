import React, { Component, useState, useEffect } from 'react'
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI.js'
import Loader from './Loader.js';
import axios from 'axios';
import API_KEY from '../secrets';

// Step 1: Create a new functional Component ContentAPIHooks
// Step 2: Import the relevant files, e.g. Loader, PostItemAPI, Content.module.css, axios, and API_KEY.
// Step 3: Copy and paste return statement from ContentAPI.js
// Step 4: Replace your contructor and states by creating your useState Hooks for isLoaded, posts, and savedPosts, set their initial states as false, [], [] respectively
// Step 5: Replace the componentDidMount function, by using a useEffect function and call on the fetchImages function
// Step 6: Recreate your fetchImages function, call upon your API_KEY. 
// Step 7: Once the API data has been fetched, replace the setState method by calling upon the useState functions. Set isLoaded to true, posts as response.data.hits, and savedPosts as response.data.hits using your hooks.
// Step 8: Create your handleChange function, filter your savedPosts, using the name variable. Replace the setState method using hooks.
// Step 9: Remove any reference to this or this.state in the return statement. Make sure the correct variables are being referenced. 


function ContentAPIHooksCopy() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    //don't forget to use an arrow function
    useEffect(() => {
        fetchImages()
    }, [])

    //must replace the function name to using an async arrow function
    const fetchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);

        setIsLoaded(true);
        setPosts(response.data.hits);
        setSavedPosts(response.data.hits);
    }

    //must save it as a const
    const handleChange = (event) => {
        const name = event.target.value
        const filteredPosts = savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name)
        })
        setPosts(filteredPosts) 
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

export default ContentAPIHooksCopy
