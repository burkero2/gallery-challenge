import React from 'react'
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI.js'
import Loader from './Loader.js';
import axios from 'axios';
import API_KEY from '../secrets';


// Step 1: Copy and paste in the Render content from ComponentAPI.js
// Step 2: Copy and Paste any relevant imports from ComponentAPI.js e.g. import css etc...
// Step 3: Create the useState hooks for isLoaded and fetchedPosts
// Step 4: Create the fetchImages function, 


function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => { 
        fetchedimages();
    }, [])

    async fetchImages() {
        const { data } = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const fetchedPosts = data.hits

        // SAVE FETCHED POSTS to the class so that it can be referenced later
        const savedPosts = fetchedPosts
        
        // this.setState({
        //     isLoaded: true,
        //     posts: fetchedPosts
        // })
    }

    handleChange = (event) => {
        const name = event.target.value
        console.log('name', name);
        const filteredPosts = savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts,
        })
    }

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
                <h4>posts found: {fetchedPosts.length}</h4>
                
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

export default ContentAPIHooks
