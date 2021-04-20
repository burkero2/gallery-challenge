import React, { Component } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import API_KEY from '../secrets';
import css from './css/Content.module.css'
// import { posts } from '../loremPicsum.json';
import { posts } from '../posts.json';
import Loader from './Loader'


export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // CDM BIT
            posts: [],
            isLoading: true
            //
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
                posts: posts
            })
        }, 2000)
    }

// API BIT (CLASS)
async fetchImages() {
    const { data } = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
    const images = data.hits.map(hit => hit.webformatURL)
    this.setState({
        isLoading: false,
        posts: posts.map((post, idx) => ({...post, image: images[idx]}))
    })
}

    handleChange = (event) => {
        const name = event.target.value
        const filteredPosts = posts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts
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
                    {
                        this.state.isLoading ?
                        <Loader /> :
                        this.state.posts.map(post => {
                            return (
                                <PostItem key={post.title} post={post} />
                            )
                        })
                    }                    
                </div>
            </div>
        )
    }
}

export default Content
